# Radio

A round button with its own label, for picking exactly one option from a small group. Put the group in a [fieldset.md](fieldset.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Connects the radio to its label. Required. |
| name | string | — | Shared by every radio in the group. Required. |
| value | string | — | Value sent when selected. |
| isChecked | boolean | `false` | Renders `checked`. |
| isDisabled | boolean | `false` | Renders `disabled`. |
| count | number | — | Number of matching results, shown after the label. |
| onChange | function | — | Called when selected. |
| children | string | — | Label text. |

## Variations

### Single

```emmet
label.radio[for=pay-card]>input#pay-card[type=radio name=payment value=card]+span.radio__label{Debit or credit card}
```

### With count

```emmet
label.radio[for=rating-4]>input#rating-4[type=radio name=rating value=4]+span.radio__label{4 stars and up}+span.radio__count{(96)}
```

## Examples

- **Delivery or collection**: the choice inside [option-card.md](option-card.md).
- **Rating filter**: "4 stars and up".
- **Payment method** at checkout.

## Notes

- Always put radios in a [fieldset.md](fieldset.md), so the question is read out.
- Use [checkbox.md](checkbox.md) if more than one option can be chosen.
- Tokens: same as [checkbox.md](checkbox.md).
