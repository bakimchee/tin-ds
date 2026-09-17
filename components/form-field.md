# Form Field

Wraps a single form control with a visible label, an optional hint and an error message. Every [input.md](input.md), [select.md](select.md) and [textarea.md](textarea.md) goes inside one. For a group of controls, use [fieldset.md](fieldset.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | `id` of the control. The label's `for`, the hint and the error ids all come from it. Required. |
| label | string | — | Visible label. Required. |
| hint | string | — | Help text under the label. Renders a [field-message.md](field-message.md) `#{id}-hint`. |
| error | string | — | Error message. Renders a field message `#{id}-error` with `status=danger`, and makes the control `isInvalid`. |
| isRequired | boolean | `false` | Marks the control as required. Optional fields show "(optional)" in the label instead. |
| isLabelHidden | boolean | `false` | Adds `data-visually-hidden` to the label. |
| layout | `stacked` \| `inline` | `stacked` | `inline` puts the label and control on one row, used for sort. |
| children | node | — | One `Input`, `Select`, `Textarea`, `InputGroup` or `PasswordInput`. Its `describedBy` lists the hint and error ids. |

## Variations

### Stacked

```emmet
div.form-field>label.form-field__label[for=email]{Email address}+Input#email[type=email name=email autocomplete=email isRequired]
```

### With hint

```emmet
div.form-field>label.form-field__label[for=phone]{Mobile number}+FieldMessage#phone-hint{We'll text you delivery updates.}+Input#phone[type=tel name=phone autocomplete=tel describedBy=phone-hint]
```

### With error

```emmet
div.form-field>label.form-field__label[for=postcode]{Postcode}+FieldMessage#postcode-error[status=danger]{Enter a valid UK postcode}+Input#postcode[name=postcode autocomplete=postal-code isInvalid describedBy=postcode-error]
```

### Inline

```emmet
div.form-field[data-layout=inline]>label.form-field__label[for=sort]{Sort by}+Select#sort[name=sort]
```

## Examples

- **Checkout details**: stacked fields for name, email, phone and address.
- **Sort by**: `inline` on the listing toolbar.
- **Postcode check**: with an error when the postcode is invalid.
- **Promo code**: stacked, holding an [input-group.md](input-group.md) with the apply button.
- **Password**: holding a [password-input.md](password-input.md).

## Notes

- The error comes before the control so screen readers read it first.
- Order of parts: label, hint, error, control.
- Uses [field-message.md](field-message.md) and the control it wraps.
