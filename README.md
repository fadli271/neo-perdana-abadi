# PT Neo Perdana Abadi — Landing Page (Astro)

Modern, premium, and elegant landing page built with Astro + Tailwind.

## Quick Start

1) Install dependencies

```
npm install
```

2) Start dev server

```
npm run dev
```

3) Build for production

```
npm run build && npm run preview
```

## Deploy to GitHub Pages

This repo is configured to deploy with GitHub Actions.

1) Push to `main`
2) In GitHub: Settings → Pages → Source: **GitHub Actions**
3) Wait for the "Deploy to GitHub Pages" workflow to finish

Site URL:

```
https://fadli271.github.io/neo-perdana-abadi
```

## Branding Colors

Colors are defined in `src/styles/global.css` as CSS variables. Update the brand palette there if needed.

## Assets

- Place brand assets in `public/brand/`
- Logo is referenced at `/brand/logo-neo-perdana-abadi.jpeg`

## Structure

- `src/pages/index.astro` — main landing page
- `src/layouts/BaseLayout.astro` — HTML shell and global CSS import
- `src/components/Nav.astro` — top navigation
- `src/styles/global.css` — Tailwind and theme tokens

## Notes

- No form backend is wired yet; connect to your preferred service (Formspree, API, etc.).
- SEO basics present; expand with structured data as needed.
