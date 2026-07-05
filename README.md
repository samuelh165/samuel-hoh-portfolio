# Samuel Hoh — Portfolio

Vite + vanilla JS + three.js. Static build, deploys anywhere.

## Run locally
    npm install
    npm run dev

## Build
    npm run build      # outputs to dist/
    npm run preview    # serve the build locally to check it

## Deploy (simplest path: Netlify)
1. Push this folder to a GitHub repo.
2. netlify.com → "Add new site" → "Import an existing project" → pick the repo.
   Build command and publish dir are already set via netlify.toml
   (build: `npm run build`, publish: `dist`). Click deploy.
3. Domain: Site settings → Domain management → add your custom domain,
   point its DNS (A/CNAME) at Netlify per their instructions.

No server, no env vars, no backend — it's just static files.

## Where things live
- `src/content.js`   — all copy, project list, decor placement (see comments)
- `src/main.js`      — index build, word-load animation, sheet logic
- `src/face3d.js`    — the 3D head: idle turntable spin, click = home
- `src/style.css`    — all styling, colour tokens at the top
- `public/model/face.glb`        — compressed head (245KB, was 1.97MB)
- `public/fonts/`                — PP Monument Normal Bold
- `public/images/decor/`         — drop Figma image exports here (see README.txt in that folder)

## Still to do (yours)
- Export the 11 decor images from Figma per public/images/decor/README.txt
- Write real case study copy per project in src/content.js (`caseCopy` field,
  falls back to PLACEHOLDER_CASE until you add one)
- About me. / let's talk. sheet content — currently one placeholder line each
- Swap PLACEHOLDER_CASE for real writing once ready
