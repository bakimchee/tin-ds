# Input Group

An input joined to a fixed prefix, a suffix or a button, so they look like one control. Examples are "£" before a price, "cm" after a size, or "Apply" after a promo code. Put it inside [form-field.md](form-field.md) for the label.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| prefix | string | — | Text before the input, such as "£". |
| suffix | string | — | Text after the input, such as "cm". |
| children | node | — | One `Input`, then optionally one `Button`. |

## Variations

### Prefix

```emmet
div.input-group>span.input-group__prefix[aria-hidden=true]{£}+Input#filter-price-min[type=number name=priceMin min=0 inputMode=numeric]
```

### Suffix

```emmet
div.input-group>Input#height[type=number name=height min=0 inputMode=decimal]+span.input-group__suffix[aria-hidden=true]{cm}
```

### With button

```emmet
div.input-group>Input#promo[name=promo autocomplete=off]+Button[type=submit variant=secondary]{Apply}
```

## Examples

- **Price filter**: `prefix=£` on the min and max fields in [filter-group.md](../patterns/filter-group.md).
- **Promo code**: input and "Apply" in [order-summary.md](../patterns/order-summary.md).
- **Newsletter**: email and "Sign up" in [site-footer.md](../patterns/site-footer.md).
- **Postcode**: postcode and "Find address" in [address-lookup.md](../patterns/address-lookup.md).

## Notes

- The prefix and suffix are hidden from screen readers, so put the unit in the label: "Min price (£)".
- One input per group. The button submits the surrounding form.
- Uses [input.md](input.md) and [button.md](button.md).
- Tokens: `--control-radius` on the outer corners only, `--color-surface-subtle` behind the prefix and suffix.
