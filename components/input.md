# Input

A single-line text box. Give it a visible label by placing it inside [form-field.md](form-field.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Connects the input to its label. Required. |
| name | string | — | Form field name. |
| type | `text` \| `email` \| `tel` \| `number` \| `password` \| `search` | `text` | Native type. |
| size | `sm` \| `md` \| `lg` | `md` | Height from `--control-height-*`. |
| value | string | — | Current value. |
| placeholder | string | — | Example format only, never a replacement for a label. |
| autocomplete | string | — | Native autofill hint, such as `postal-code` or `email`. |
| inputMode | string | — | Mobile keyboard, such as `numeric`. Renders `inputmode`. |
| min | number | — | Lowest value for `number`. |
| max | number | — | Highest value for `number`. |
| isRequired | boolean | `false` | Renders `required`. |
| isInvalid | boolean | `false` | Renders `aria-invalid=true`. |
| isDisabled | boolean | `false` | Renders `disabled`. |
| describedBy | string | — | `id`s of hint or error text. Renders `aria-describedby`. |
| onChange | function | — | Called when the value changes. |

## Variations

### Text

```emmet
input.input#email[type=email name=email autocomplete=email required]
```

### Postcode

```emmet
input.input#postcode[type=text name=postcode autocomplete=postal-code placeholder="e.g. SW1A 1AA"]
```

### Invalid

```emmet
input.input#postcode[type=text name=postcode aria-invalid=true aria-describedby=postcode-error]
```

### Search

```emmet
input.input#q[type=search name=q autocomplete=off]
```

## Examples

- **Checkout address**: `text` with `autocomplete` values such as `address-line1`.
- **Postcode check**: on the product page and at checkout.
- **Quantity**: `number` inside [quantity-selector.md](quantity-selector.md).
- **Promo code**: in [order-summary.md](../patterns/order-summary.md).

## Notes

- Minimum font size is 16px, so iOS doesn't zoom in on focus.
- For a prefix, suffix or attached button use [input-group.md](input-group.md). For passwords use [password-input.md](password-input.md). For several lines use [textarea.md](textarea.md).
- Tokens: `--control-height-{size}`, `--control-radius`, `--color-border-default`, `--color-border-focus`, `--color-status-danger-text` when invalid.
