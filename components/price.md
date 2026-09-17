# Price

Shows what something costs now, and optionally what it cost before. The root is a `span`, so it can sit inside a label, a paragraph or a table cell. Show savings as a separate [badge.md](badge.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| amount | number | — | Current price. Required. |
| amountWas | number | — | Previous price, shown struck through. |
| prefix | string | — | Text before the price, such as "From". |
| suffix | string | — | Text after the price, such as "per month". |
| currency | string | `GBP` | ISO currency code used for formatting. |
| size | `sm` \| `md` \| `lg` | `md` | `lg` on the product page, `sm` in lists. |

## Variations

### Default

```emmet
span.price>data.price__now[value=349.00]{£349.00}
```

### Reduced

```emmet
span.price>data.price__now[value=349.00]{£349.00}+span.price__was>span.price__was-label{Was }+s>data[value=399.00]{£399.00}
```

### With prefix

```emmet
span.price[data-size=sm]>span.price__prefix{From }+data.price__now[value=19.99]{£19.99}
```

### Product page

```emmet
span.price[data-size=lg]>data.price__now[value=349.00]{£349.00}+span.price__was>span.price__was-label{Was }+s>data[value=399.00]{£399.00}
```

### With suffix

```emmet
span.price[data-size=sm]>data.price__now[value=29.08]{£29.08}+span.price__suffix{ a month}
```

## Examples

- **Product card**: `size=sm` with `amountWas` when reduced.
- **Product page buy box**: `size=lg`.
- **Order summary total**: `size=lg`.
- **Delivery option**: `amount=0` shows "Free".

## Notes

- `amount=0` shows "Free", not "£0.00".
- Write "Was" as real text, so screen readers don't just hear two prices.
- Tokens: `--color-price-now`, `--color-price-was`.
