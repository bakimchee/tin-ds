# Field Message

Help or validation text for a form control or a group of controls: a hint, an error or a confirmation. The control points to it with `describedBy`, so screen readers read it with the field.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Referenced by the control's `describedBy`, usually `{controlId}-hint` or `{controlId}-error`. Required. |
| status | `neutral` \| `success` \| `danger` | `neutral` | `neutral` is a hint. `danger` is an error, with a warning icon and hidden "Error:" text. `success` confirms a check passed. |
| isLive | boolean | `false` | Renders `aria-live=polite`, so changes are announced. |
| children | string | — | Message text. |

## Variations

### Hint

```emmet
p.field-message#phone-hint{We'll text you delivery updates.}
```

### Error

```emmet
p.field-message#postcode-error[data-status=danger]>Icon[name=warning]+span[data-visually-hidden]{Error: }+span{Enter a valid UK postcode}
```

### Success

```emmet
p.field-message#promo-message[data-status=success aria-live=polite]>Icon[name=check]+span{Promo code SAVE10 applied}
```

## Examples

- **Hint**: "For example, 27 3 1990" under a date of birth.
- **Error**: "Enter a valid UK postcode" after the form is submitted.
- **Success**: "Promo code SAVE10 applied" in the order summary.
- **Live count**: "You have 20 characters remaining" in [character-count.md](character-count.md).

## Notes

- Errors say what went wrong and how to fix it: "Enter your email address", not "Invalid field".
- Errors appear when the form is submitted, not while someone is typing.
- An `isLive` message must be in the page before its text changes, or it won't be announced.
- Placed by [form-field.md](form-field.md) and [fieldset.md](fieldset.md), between the label and the control.
- Tokens: `--color-text-muted` for hints, `--color-status-danger-text`, `--color-status-success-text`.
