# Badge

A short, non-interactive label that highlights something: an offer, a saving, a new product or a count.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `status` \| `promo` \| `count` | `status` | `status` uses `status` colours. `promo` is the brand offer style. `count` is a small number bubble. |
| status | `neutral` \| `info` \| `success` \| `warning` \| `danger` | `neutral` | Colour when `variant=status`. |
| label | string | — | Visually hidden text after a `count`, such as " items". |
| children | string | — | Label, one to three words or a number. |

## Variations

### Status

```emmet
span.badge[data-status=success]{New}
```

### Promo

```emmet
span.badge[data-variant=promo]{Save £50}
```

### Count

```emmet
span.badge[data-variant=count]>span{3}+span[data-visually-hidden]{ items}
```

## Examples

- **Product card offers**: `promo` "Save £50", "Buy 2 for £20", "Special offer".
- **Product card flags**: `status=info` "New", `status=warning` "Clearance".
- **Trolley count in the header**: `count`.
- **Verified review**: `status=success` "Verified purchase".

## Notes

- Not clickable. Use [chip.md](chip.md) for something you can press.
- `count` includes visually hidden text that says what is counted, because `aria-label` isn't allowed on a `span`.
- Tokens: `--color-status-{status}-*`, `--color-price-save`.
