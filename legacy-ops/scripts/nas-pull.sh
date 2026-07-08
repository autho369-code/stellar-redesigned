#!/bin/bash
# =============================================================================
# Stellar NAS puller - runs ON the Synology via DSM Task Scheduler.
#
# Completes the document pipeline that ingest-outlook starts:
#   cloud relay (Supabase Storage bucket "incoming-documents",
#   path = "<Association>/<Category>/<file>")
#     -> downloaded to the NAS under DEST_ROOT
#     -> documents.synced_to_nas flipped to true
#     -> relay object deleted (the relay stays empty; the NAS is the record)
#
# Setup: see scripts/NAS-SETUP.md. Fill in the two values below, then schedule:
#   DSM Control Panel -> Task Scheduler -> Create -> Scheduled Task ->
#   User-defined script, user "root", every 5 minutes:
#   bash /volume1/<your-share>/scripts/nas-pull.sh
# =============================================================================

# --- CONFIG ------------------------------------------------------------------
# 1) Absolute NAS path of the folder that CONTAINS the association folders.
#    Share confirmed 2026-07-04: /volume1/Stellar Property MGMT
DEST_ROOT="/volume1/Stellar Property MGMT/Stellar Properties"

# 2) Supabase service_role key (Dashboard -> Project Settings -> API keys ->
#    service_role). Keep this file readable by root only: chmod 700 nas-pull.sh
SERVICE_KEY="PASTE-SERVICE-ROLE-KEY-HERE"
# ------------------------------------------------------------------------------

SUPABASE_URL="https://qfjhmzvuaifxnvmwblux.supabase.co"
BUCKET="incoming-documents"
LOG="$(dirname "$0")/nas-pull.log"
LIMIT=100

log() { echo "$(date '+%Y-%m-%d %H:%M:%S') $*" >> "$LOG"; }

# Refuse to run half-configured.
if [[ "$DEST_ROOT" == *CHANGE-ME* || "$SERVICE_KEY" == PASTE-* ]]; then
  log "ERROR not configured: edit DEST_ROOT and SERVICE_KEY at the top of this script"
  exit 1
fi
if [[ ! -d "$DEST_ROOT" ]]; then
  log "ERROR DEST_ROOT does not exist: $DEST_ROOT"
  exit 1
fi

AUTH=(-H "apikey: $SERVICE_KEY" -H "Authorization: Bearer $SERVICE_KEY")

# Percent-encode a path segment-by-segment (keeps the / separators).
urlencode_path() {
  local path="$1" out="" c i seg IFS='/'
  read -ra parts <<< "$path"
  for seg in "${parts[@]}"; do
    local enc=""
    for (( i=0; i<${#seg}; i++ )); do
      c="${seg:$i:1}"
      case "$c" in
        [a-zA-Z0-9.~_-]) enc+="$c" ;;
        *) enc+=$(printf '%%%02X' "'$c") ;;
      esac
    done
    out+="${out:+/}$enc"
  done
  printf '%s' "$out"
}

# Fetch the queue: documents not yet on the NAS (relay-era rows have relative
# storage_path with no leading slash; legacy Dropbox rows are excluded).
QUEUE=$(curl -sf "${AUTH[@]}" \
  "$SUPABASE_URL/rest/v1/documents?select=id,storage_path&synced_to_nas=eq.false&storage_path=not.like./*&order=created_at.asc&limit=$LIMIT")

if [[ -z "$QUEUE" || "$QUEUE" == "[]" ]]; then
  exit 0  # nothing to do; stay quiet so the log doesn't fill with noise
fi

# Parse "id" and "storage_path" pairs without jq (not guaranteed on DSM).
echo "$QUEUE" | tr '}' '\n' | while IFS= read -r row; do
  id=$(echo "$row" | sed -n 's/.*"id"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')
  sp=$(echo "$row" | sed -n 's/.*"storage_path"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')
  [[ -z "$id" || -z "$sp" ]] && continue

  # JSON-unescape the few characters that matter in filenames.
  sp=$(printf '%s' "$sp" | sed 's/\\\//\//g; s/\\"/"/g; s/\\\\/\\/g')

  enc=$(urlencode_path "$sp")
  dest="$DEST_ROOT/$sp"
  tmp="$dest.part"

  mkdir -p "$(dirname "$dest")"
  if ! curl -sf "${AUTH[@]}" -o "$tmp" "$SUPABASE_URL/storage/v1/object/$BUCKET/$enc"; then
    log "FAIL download: $sp"
    rm -f "$tmp"
    continue
  fi
  if [[ ! -s "$tmp" ]]; then
    log "FAIL empty download: $sp"
    rm -f "$tmp"
    continue
  fi
  mv -f "$tmp" "$dest"

  # Mark synced in the database.
  if ! curl -sf -X PATCH "${AUTH[@]}" \
      -H "Content-Type: application/json" -H "Prefer: return=minimal" \
      -d '{"synced_to_nas": true}' \
      "$SUPABASE_URL/rest/v1/documents?id=eq.$id" > /dev/null; then
    log "WARN synced flag not updated (file IS on NAS): $sp"
    continue
  fi

  # Clean the relay (best effort - re-download is harmless if this fails).
  curl -sf -X DELETE "${AUTH[@]}" \
    "$SUPABASE_URL/storage/v1/object/$BUCKET/$enc" > /dev/null \
    || log "WARN relay cleanup failed: $sp"

  log "OK $sp"
done
