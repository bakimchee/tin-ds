# @tin-ds/css

The code half of [tin-ds](../../README.md): design tokens, breakpoints and the grid as plain CSS. Components and patterns are documented in Markdown in the repo root. This package gives them their visual values and layout.

| File | What it holds |
| --- | --- |
| [tokens.css](tokens.css) | Primitive and semantic design tokens as CSS variables. |
| [breakpoints.css](breakpoints.css) | Breakpoint widths as variables, for reference and scripts. |
| [grid.css](grid.css) | The 12-column, mobile-first grid. Needs `tokens.css`. |
| [index.css](index.css) | Imports all three, in order. |

## Use

With a bundler (Vite, webpack, Parcel, Next.js), import the whole package:

```css
@import "@tin-ds/css";
```

or only the parts you need:

```css
@import "@tin-ds/css/tokens.css";
@import "@tin-ds/css/grid.css";
```

Without a bundler, copy or serve the files and link them in this order:

```html
<link rel="stylesheet" href="/tin-ds/tokens.css">
<link rel="stylesheet" href="/tin-ds/breakpoints.css">
<link rel="stylesheet" href="/tin-ds/grid.css">
```

## Rules

- Components and patterns use semantic tokens only. To re-theme, change the primitives or the brand aliases in `tokens.css`.
- CSS variables don't work inside `@media`, so `grid.css` repeats the widths in `breakpoints.css`. Change both files together.

The full rules are in [conventions.md](../../conventions.md).
