# Pranjal Sharma — Portfolio

My personal portfolio site: projects, experience, education and skills.

**Live:** https://pranjal0211.github.io/portfolio/

Built with React and Vite, styled with plain CSS.

## Run locally

```sh
npm install
npm run dev       # dev server at http://localhost:5173/portfolio/
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Editing content

All the copy (profile, projects, jobs, education, skills, side quests) lives in
[`src/data.js`](src/data.js). Change it there and every section updates.

## Structure

- `src/data.js` — site content
- `src/components/` — one component per page section, plus `Reveal` (scroll fade-in) and `SectionHead`
- `src/hooks/useActiveSection.js` — highlights the nav link for the section in view
- `src/styles.css` — design tokens, layout and responsive styles
- `public/images/` — photos used on the site

## Deploy

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages.
