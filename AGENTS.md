# AGENTS.md

Guidance for AI coding agents working in tin-ds.

## What this repo is

tin-ds is a **text-only design system** for e-commerce sites (Argos, AO) and news sites (BBC News, the Guardian). The docs are the product:

- `components/*.md`: atoms and molecules (`Button`, `Price`, `FormField`).
- `patterns/*.md`: organisms up to whole page templates (`ProductCard`, `SiteHeader`, `Home`).
- `tokens.css`, `breakpoints.css`, `grid.css`: the only design system code.
- `sites/`: example sites generated from the docs. They show the system in use; they are not the source of truth.
- `ops/`: checks that guard the docs and the example sites.

**Read [conventions.md](conventions.md) before you edit any component or pattern.** It defines the file template, the Emmet syntax, how props map to HTML, prop naming, tokens and breakpoints. This file only summarises it.

## Rules that matter most

- **A component never uses a pattern.** The only exception is content: a container such as `Carousel` or `Dialog` can take a pattern in `children`. `ops` enforces this rule.
- Every doc follows the template in conventions.md: a title, one paragraph, then `## Props`, `## Variations` (with ```` ```emmet ```` blocks), `## Examples` and `## Notes`.
- In Emmet, `lowercase` tags are HTML elements and `PascalCase` tags are tin-ds components or patterns. Every PascalCase name must exist as a doc, and every prop used on it must be in that doc's prop table.
- Props are camelCase and reuse the shared vocabulary: `is…`, `has…`, `on…`, `variant`, `size` (`sm|md|lg`), `status` (`neutral|info|success|warning|danger`), `children`, `label`, `hint`, `error`, `title`, `description`, `level`, `…Href`. Responsive props take the `Sm|Md|Lg|Xl|2xl` suffix.
- Root class = file name (`product-card.md` → `.product-card`). Parts use BEM `__part`. Enum props become `data-*` attributes; booleans become the native attribute or an empty `data-*`.
- Accessibility: use `data-visually-hidden` text, never `aria-label` on a plain `div`, `span`, `p` or `ul`.
- Components and patterns use **semantic tokens only**, never primitives or raw values.
- Breakpoints are mobile first and in `rem`, written as `@media (width >= 48rem)`. `breakpoints.css` and `grid.css` both hold the widths; change them together.
- Components don't set their own widths. Layout goes through `Grid` / `GridItem`.
- Use British English and UK retail words: "trolley", "postcode", "colour" in copy. Keep prose short and plain, like the existing docs.

## Common tasks

### Add or change a component or pattern

1. Create or edit the `.md` file in `components/` or `patterns/` using the template.
2. Add or update its line in the matching list in [README.md](README.md).
3. If the example sites use it, update the renderer in `sites/build/*.mjs` so it still matches the doc's Emmet, and add or adjust styles in `sites/site.css`.
4. Rebuild the sites and run the checks (below).

### Example sites

`sites/shop-site/`, `sites/news-site/` and `sites/forms-gallery/` are **generated**. Don't hand-edit their HTML. Change the generator in `sites/build/` (`foundations.mjs`, `components.mjs`, `patterns.mjs`, `news.mjs`, `gallery.mjs`, with content in `data.mjs` and `news-data.mjs`), then rebuild:

```sh
cd sites/build && npm install && npm run build
```

Shared styling is in `sites/site.css`. Placeholder artwork is in `sites/img/` and captions in `sites/video/`.

## Checks

Run these before you finish any change:

```sh
cd ops && npm install && npm run check:all
```

They check that every Emmet block expands, every referenced component exists, every link resolves, every prop is documented, no component uses a pattern, and the example sites are valid HTML. `npm run check` runs only the docs checks. Fix what fails rather than weakening a check.

## Don't

- Add frameworks, build tools or JavaScript to the design system itself. The only code is the three CSS files, plus the tooling in `sites/build/` and `ops/`.
- Commit `node_modules/` or `.playwright-mcp/`. Both are in `.gitignore`.
