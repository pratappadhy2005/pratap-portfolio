# Pratap's Portfolio

A personal portfolio website built with React and Vite, deployed to GitHub Pages.

Live site: https://pratappadhy2005.github.io/pratap-portfolio/

---

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- GitHub Pages (`gh-pages`)

---

## Local Development

```bash
npm install
npm run dev
```

---

## Deploying to GitHub Pages

The site has two branches:

| Branch | Purpose | How it's updated |
|---|---|---|
| `main` | Source code (JSX, config) | `git push` |
| `gh-pages` | Compiled site (`dist/`) | `npm run deploy` |

### Step 1 — Commit source code changes to `main`

```bash
git add <changed-files>
git commit -m "Your commit message"
git push origin main
```

### Step 2 — Build and deploy to GitHub Pages

```bash
npm run deploy
```

This automatically runs `npm run build` first, then pushes the `dist/` folder to the `gh-pages` branch. The live site updates within ~60 seconds.

### Hard refresh after deploy

If the site shows stale content after deploying, do a hard refresh in the browser:

- **Mac:** `Cmd + Shift + R`
- Or open the site in an **incognito window**

---

## Important: Vite Base Path

The `vite.config.js` must have the base path set to match the GitHub Pages subdirectory:

```js
export default defineConfig({
  base: '/pratap-portfolio/',
  plugins: [react()],
})
```

Commenting this out will cause a blank page on the live site.
