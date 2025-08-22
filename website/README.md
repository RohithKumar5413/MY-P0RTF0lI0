# Website Starter

A minimal, modern static website.

## Run locally

Option A: Use Python (already installed on most systems)

```bash
cd /workspace/website
python3 -m http.server 8000
```

Visit `http://localhost:8000`.

Option B: Use Node (if installed)

```bash
npx serve -s . -l 8000 --yes
```

## Project structure

- `index.html`: Landing page markup
- `styles.css`: Responsive styles
- `script.js`: Nav toggle, smooth scrolling, dynamic year

## Deploy

You can deploy the `website` folder to any static host:
- GitHub Pages: push to `main`, set Pages to `/website`
- Netlify: drag-and-drop the folder or connect repository
- Vercel: import repo and set root to `/workspace/website` or `website`
- Any S3/CDN: upload files, enable website hosting

## Customize

- Update colors in `:root` in `styles.css`
- Replace the Inter font or remove Google Fonts
- Edit sections in `index.html` to fit your content