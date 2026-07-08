# NAS puller setup (Synology)

Completes the document pipeline: Arthur (the `ingest-outlook` cloud function)
uploads email attachments to a transient Supabase Storage relay
(`incoming-documents`, path `<Association>/<Category>/<file>`); this puller
runs **on the Synology** and moves them onto the NAS, marks them synced, and
empties the relay. Dropbox is not involved anywhere.

## One-time setup (~10 minutes)

1. **Copy the script to the NAS.**
   In DSM File Station, create a `scripts` folder on your main share and
   upload `nas-pull.sh` there (or copy it over SMB).

2. **Fill in the two config values** at the top of `nas-pull.sh`:
   - `DEST_ROOT` — the absolute NAS path of the folder that contains the
     association folders. Find it in File Station: right-click your
     `01 Associations` folder → Properties → Location
     (e.g. `/volume1/StellarDocs/01 Associations`).
   - `SERVICE_KEY` — Supabase Dashboard → Project Settings → API keys →
     `service_role` → copy. (This key stays on the NAS only. Never put it
     in a repo or a browser.)

3. **Restrict the file** (SSH or File Station permissions):
   `chmod 700 /volume1/<share>/scripts/nas-pull.sh`

4. **Schedule it.** DSM Control Panel → Task Scheduler → Create →
   Scheduled Task → User-defined script:
   - User: `root`
   - Schedule: every 5 minutes, all days
   - Run command: `bash /volume1/<share>/scripts/nas-pull.sh`

5. **First run + verify.** Select the task → Run. Then check:
   - The four waiting documents appear under the right association folders
     (Rosemont Apartments / Photos, Lincoln Commons / Invoices,
     Granville Courts / Invoices ×2).
   - `/ops/documents` shows them as synced.
   - `scripts/nas-pull.log` (next to the script) shows `OK <path>` lines.

## Notes

- The relay bucket is transient by design: after a successful pull the object
  is deleted, so cloud storage stays near-empty and the NAS is the system of
  record.
- Legacy Dropbox-era rows (absolute paths starting with `/`) are ignored by
  the puller; those files already live on the NAS via the old sync.
- If a download fails, the row stays unsynced and is retried on the next run.
  Check `nas-pull.log` for `FAIL`/`WARN` lines.
