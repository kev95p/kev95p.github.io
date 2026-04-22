# AGENTS.md

This file provides guidance for AI coding agents working in this codebase.

## Project Overview

This is a personal website built with **Astro 6.0** using TypeScript. The project uses **pnpm** as the package manager and requires Node.js >= 22.12.0.

## Build/Lint/Test Commands

```bash
# Install dependencies
pnpm install

# Start development server (localhost:4321)
pnpm dev

# Build for production (outputs to ./dist/)
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro -- --help

# Type checking (uses astro check)
pnpm astro check

# Add integrations or features
pnpm astro add <integration-name>
```

**Note:** This project does not currently have a test framework configured. If tests are added, check for vitest or similar testing frameworks.

## Project Structure

```
/
├── public/           # Static assets (favicon, images)
├── src/
│   ├── assets/       # Importprocessed assets (SVGs, images)
│   ├── components/   # Reusable Astro components
│   ├── layouts/      # Page layout components
│   └── pages/        # File-based routing (index.astro = /)
├── astro.config.mjs  # Astro configuration
├── tsconfig.json     # TypeScript configuration (extends astro/tsconfigs/strict)
└── package.json      # Dependencies and scripts
```

## Code Style Guidelines

### TypeScript

- Uses strict TypeScript configuration (`astro/tsconfigs/strict`)
- Always use TypeScript for any `.ts` files
- Prefer explicit types over `any`

### Astro Components

Astro components use the `.astro` extension with this structure:

```astro
---
// Frontmatter: Server-side JavaScript/TypeScript
import Component from '../components/Component.astro';
const data = 'value';
---

<!-- Template: HTML with JSX-like expressions -->
<div class="container">
	<Component prop={data} />
</div>

<style>
	/* Scoped CSS by default */
	.container {
		/* styles */
	}
</style>

<script>
	// Client-side JavaScript (optional)
</script>
```

### Imports

- Use relative imports: `import X from '../components/X.astro'`
- Include `.astro` extension in imports
- Group imports logically at the top of frontmatter

### File Naming

- **Components:** PascalCase (e.g., `Welcome.astro`, `Card.astro`)
- **Layouts:** PascalCase (e.g., `Layout.astro`)
- **Pages:** lowercase with dashes (e.g., `about.astro`, `blog-post.astro`)
- **Assets:** lowercase with dashes (e.g., `background.svg`)

### Formatting

- Indentation: Tabs (follow existing files)
- HTML attributes: Use double quotes for attribute values
- Booleans: Use shorthand syntax when true (e.g., `<button disabled>`)
- Multiline elements: Place closing bracket on new line for readability

```astro
<!-- Good: Multiline elements -->
<a href="https://example.com"><img src={logo.src} alt="Logo" /></a>
```

### CSS Guidelines

- Use scoped styles in `<style>` blocks within components when possible
- Use global styles in `<style is:global>` for site-wide styles
- Prefer CSS custom properties for theming
- Use kebab-case for class names and IDs

### Error Handling

- Use TypeScript's strict null checks to catch potential errors
- Validate props using Astro's `Props` interface:

```astro
---
interface Props {
	title: string;
	count?: number;
}

const { title, count = 0 } = Astro.props;
---
```

### Common Patterns

#### Layout Pattern

```astro
---
// src/layouts/Layout.astro
interface Props {
	title?: string;
}

const { title = 'Default Title' } = Astro.props;
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>{title}</title>
	</head>
	<body>
		<slot />
	</body>
</html>
```

#### Page Pattern

```astro
---
// src/pages/example.astro
import Layout from '../layouts/Layout.astro';
import Component from '../components/Component.astro';
---

<Layout title="Page Title">
	<Component />
</Layout>
```

#### Asset Import Pattern

```astro
---
import logo from '../assets/logo.svg';
---

<img src={logo.src} alt="Logo" />
```

## Best Practices

1. **Performance:** Use `fetchpriority="high"` for above-the-fold images
2. **Accessibility:** Always include meaningful `alt` attributes for images
3. **SEO:** Set appropriate page titles and meta descriptions in layouts
4. **Responsive Design:** Use CSS media queries for mobile-first approach
5. **Type Safety:** Define `Props` interfaces for all components that accept props

## Important Notes

- This project uses Astro's default static site generation (SSG) mode
- No server-side rendering (SSR) is configured
- No database or API integrations are currently present
- Node.js version must be >= 22.12.0 as specified in `package.json`
