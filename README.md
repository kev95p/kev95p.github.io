# Kevin Pleitez — Personal Website

Personal portfolio built with [Astro](https://astro.build) 6.0 and TypeScript. Statically generated and deployed to GitHub Pages.

## Tech Stack

- **Framework:** Astro 6.0 (SSG)
- **Language:** TypeScript (strict)
- **Styling:** Scoped CSS with CSS custom properties
- **Package Manager:** pnpm
- **Node.js:** >= 22.12.0

## Project Structure

```text
/
├── public/              # Static assets (fonts, images, favicon, robots.txt, sitemap)
├── src/
│   ├── assets/          # Import-processed assets
│   ├── components/      # Reusable Astro components (Hero, Experience, Skills, Contact, Footer)
│   ├── layouts/         # Page layouts
│   └── pages/           # File-based routing
├── astro.config.mjs     # Astro configuration
├── eslint.config.mjs    # ESLint flat config (Astro + TypeScript)
├── .prettierrc          # Prettier configuration
└── package.json         # Dependencies and scripts
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview production build locally                 |
| `pnpm check`     | Run Astro type checking                          |
| `pnpm lint`      | Run ESLint                                       |
| `pnpm format`    | Format code with Prettier                        |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Deployment

The site is configured for static export and deployed to **GitHub Pages** at `https://kev95p.github.io`.

## License

MIT
