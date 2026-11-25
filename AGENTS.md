# AGENTS.md

Guidance for AI coding agents working in tin-ds.

## What this repo is

tin-ds is a **text-only design system** for e-commerce sites (Argos, AO) and news sites (BBC News, the Guardian). The docs are the product:

- `components/*.md`: atoms and molecules (`Button`, `Price`, `FormField`).
- `patterns/*.md`: organisms up to whole page templates (`ProductCard`, `SiteHeader`, `Home`).
- `packages/css/`: the only design system code, published as `@tin-ds/css`. `tokens.css`, `breakpoints.css` and `grid.css`, plus `index.css`, which imports all three.
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

## Git workflow

**Never push to `main`.** Every change goes on a branch and through a pull request.

1. Branch from an up-to-date `main`. Name it `<type>/<short-description>`, such as `feat/energy-rating` or `fix/grid-offsets`.
2. Write each commit as a [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/): `<type>(<scope>): <description>`.
3. Run the checks (below) and make sure they pass.
4. Push the branch and open a pull request. Its title uses the same format as a commit, and its description says what changed and why.
5. Agents don't merge their own pull requests unless they're asked to.

Types, as they apply here:

| Type | Use for |
| --- | --- |
| `feat` | A new component, pattern, prop, variation or token. |
| `fix` | A wrong doc, broken CSS or a failing check put right. |
| `docs` | README, conventions, AGENTS and other prose that doesn't change the system. |
| `refactor` | Moving or restructuring files without changing what they describe. |
| `style` | Formatting only. |
| `build` | `packages/css/package.json`, the site generator in `sites/build/` and dependencies. |
| `ci` | Workflows and the checks in `ops/`. |
| `chore` | Anything else, such as `.gitignore`. |
| `revert` | Undoing an earlier commit. |

- The scope is optional. Use the component or pattern file name (`feat(product-card): add hasCompare`), or `css`, `sites`, `ops`.
- Write the description in the imperative and lower case, with no full stop: `fix(button): keep the label on one line`.
- Mark a breaking change with `!` after the type or scope, plus a `BREAKING CHANGE:` footer. Removing or renaming a prop, token, class or exported file counts as breaking: `feat(tokens)!: rename the action colour tokens`.

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

- Add frameworks, build tools or JavaScript to the design system itself. The only code is the CSS in `packages/css/`, plus the tooling in `sites/build/` and `ops/`.
- Add a file to `packages/css/` without also adding it to `files` and `exports` in its `package.json`, or it won't ship.
- Commit `node_modules/` or `.playwright-mcp/`. Both are in `.gitignore`.
