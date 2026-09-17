# Heading

A title for a page or section. `level` sets the document outline and `size` sets how big it looks, so a section can be an `h2` that looks small.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| level | `1`–`6` | `2` | Renders `h1`–`h6`. |
| size | `sm` \| `md` \| `lg` \| `xl` | `md` | Visual size. `xl` is only for the page title. |
| isVisuallyHidden | boolean | `false` | Renders `data-visually-hidden`. The heading stays in the outline for screen readers. |
| children | string | — | Heading text. |

## Variations

### Page title

```emmet
h1.heading[data-size=xl]{Televisions}
```

### Section title

```emmet
h2.heading{Shop by category}
```

### Small title

```emmet
h3.heading[data-size=sm]{Delivery}
```

## Examples

- **Product listing**: `level=1 size=xl` for the category name.
- **Home page rails**: `level=2 size=lg` for "Trending this week".
- **Card and panel titles**: `level=3 size=sm`.

## Notes

- One `level=1` per page.
- Don't skip levels to get a size. Change `size` instead.
- Tokens: `--font-heading-weight`, `--font-heading-line-height`, `--font-size-400` (sm) to `--font-size-800` (xl).
