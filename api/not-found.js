const SITE_URL = 'https://www.stellarpropertygroup.com';

export default function handler(_request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300');
  response.setHeader('X-Robots-Tag', 'noindex, follow');
  response.status(404).send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, follow">
    <title>Page Not Found | Stellar Property Management</title>
    <style>
      :root { color-scheme: light; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f6f8fa; color: #101828; }
      main { width: min(38rem, calc(100% - 3rem)); text-align: center; }
      p:first-child { color: #9a6b2f; font-size: .75rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
      h1 { margin: 1rem 0; font-family: Georgia, serif; font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 400; line-height: 1; }
      p { color: #52606d; line-height: 1.7; }
      a { display: inline-block; margin-top: 1.5rem; padding: .9rem 1.3rem; background: #101828; color: white; text-decoration: none; }
      a:focus-visible { outline: 3px solid #9a6b2f; outline-offset: 3px; }
    </style>
  </head>
  <body>
    <main>
      <p>Stellar Property Management</p>
      <h1>That page is not here.</h1>
      <p>The address may have changed. Return to our Chicago condominium and HOA management site to find services, resources, and contact information.</p>
      <a href="${SITE_URL}/">Return to the homepage</a>
    </main>
  </body>
</html>`);
}
