# Text

Body copy: paragraphs, supporting lines, small print and inline status messages.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| as | `p` \| `span` \| `small` | `p` | HTML element. |
| size | `sm` \| `md` \| `lg` | `md` | Visual size. |
| status | `neutral` \| `info` \| `success` \| `warning` \| `danger` | `neutral` | Colour for meaning, such as "In stock" in success. |
| isMuted | boolean | `false` | Lower-contrast supporting text. |
| isBold | boolean | `false` | Bold weight. |
| children | string | — | The text. May contain `Link`. |

## Variations

### Paragraph

```emmet
p.text{Get it delivered tomorrow when you order by 6pm.}
```

### Muted small

```emmet
p.text[data-size=sm data-muted]{Cat. No. 123/4567}
```

### Status

```emmet
p.text[data-status=success data-bold]{In stock}
```

### Legal

```emmet
small.text[data-size=sm data-muted]{Credit subject to status. Terms apply.}
```

## Examples

- **Product description**: default paragraphs.
- **Catalogue or model number**: `size=sm isMuted`.
- **Finance line**: "Or £12.50/month with Pay Later", `size=sm`.
- **Footer legal copy**: `as=small size=sm isMuted`.

## Notes

- Use `Heading` for titles, not bold Text.
- Tokens: `--font-body-size`, `--font-body-line-height`, `--color-text-*`.
