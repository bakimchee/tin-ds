# Energy Rating

The UK/EU energy class (A–G) for appliances, TVs and lighting. It links to the product information sheet, which is a legal requirement.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| grade | `A` \| `B` \| `C` \| `D` \| `E` \| `F` \| `G` | — | Energy class. Required. |
| href | string | — | Link to the label image or product information sheet. |
| size | `sm` \| `md` | `sm` | `md` on the product page. |

## Variations

### Default

```emmet
a.energy-rating[href=/docs/energy-label-123.pdf data-grade=B aria-label="Energy rating B, view energy label"]{B}
```

### Product page

```emmet
a.energy-rating[href=/docs/energy-label-123.pdf data-grade=B data-size=md aria-label="Energy rating B, view energy label"]{B}
```

## Examples

- **Appliance product card**: next to the price.
- **Product buy box**: `size=md`, next to the title.

## Notes

- The arrow shape and colour per grade are added with styling.
- Tokens: `--color-energy-a` to `--color-energy-g`.
