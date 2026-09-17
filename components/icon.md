# Icon

A small symbol that supports a label, such as the trolley next to "Trolley" or the tick next to "In stock". Icons never carry meaning alone. Pair them with visible text, or give the parent control a `label`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| name | string | — | Icon name from the set below. Required. |
| size | `sm` \| `md` \| `lg` | `md` | 16px, 24px or 32px. |

## Variations

### Default

```emmet
span.icon[data-name=basket aria-hidden=true]
```

### Large

```emmet
span.icon[data-name=truck data-size=lg aria-hidden=true]
```

## Examples

- **Header actions**: `user`, `heart` and `basket` above their text labels.
- **Delivery options**: `truck` for delivery and `store` for collection.
- **Availability**: `check` for in stock, `close` for out of stock.

## Notes

- Icon set: `arrow-right`, `basket`, `calendar`, `check`, `chevron-down`, `chevron-left`, `chevron-right`, `close`, `filter`, `grid`, `heart`, `heart-filled`, `info`, `list`, `location`, `lock`, `menu`, `minus`, `plus`, `return`, `search`, `star`, `store`, `trash`, `truck`, `user`, `warning`, `facebook`, `instagram`, `x`, `youtube`, `tiktok`.
- Always `aria-hidden=true`. The artwork is added later with styling (for example a mask image per `data-name`).
- Colour follows the text colour of its parent.
