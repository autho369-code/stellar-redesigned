// Returns HTTP 410 for URL patterns left over from the old (compromised)
// website — e.g. /site/* spam doorway pages still in search indexes. A hard
// 410 + noindex gets them deindexed much faster than a soft-404.
export default function handler(req, res) {
  res.setHeader('X-Robots-Tag', 'noindex');
  res.status(410).send('Gone. This page never belonged to Stellar Property Management.');
}
