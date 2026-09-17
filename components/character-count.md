# Character Count

A textarea that shows how many characters are left. Going over the limit shows an error instead of cutting the text off. Used for delivery instructions, reviews and gift messages.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Textarea `id`. The count message is `#{id}-count`. Required. |
| name | string | — | Form field name. |
| label | string | — | Visible label. Required. |
| hint | string | — | Help text. |
| error | string | — | Error message, such as when the text is too long. |
| maxLength | number | — | Character limit. Required. |
| rows | number | `4` | Visible lines. |
| value | string | — | Current text. |

## Variations

### Default

```emmet
div.character-count>FormField[id=instructions label="Delivery instructions (optional)" hint="For example, leave with the neighbour at number 12"]>Textarea#instructions[name=instructions rows=3 describedBy="instructions-hint instructions-count"]^FieldMessage#instructions-count[isLive]{You can enter up to 100 characters}
```

### Over the limit

```emmet
div.character-count[data-over-limit]>FormField[id=instructions label="Delivery instructions (optional)" error="Delivery instructions must be 100 characters or fewer"]>Textarea#instructions[name=instructions rows=3 isInvalid describedBy="instructions-error instructions-count"]^FieldMessage#instructions-count[isLive]{You have 12 characters too many}
```

## Examples

- **Checkout**: delivery instructions, 100 characters.
- **Write a review**: review text, 1,000 characters.
- **Gift message**: 150 characters.

## Notes

- Without JavaScript the message states the limit and the server checks the length. With JavaScript it counts down: "You have 20 characters remaining".
- Update the message after a short pause in typing, not on every key press.
- Leave out the native `maxlength`, so pasted text isn't cut off without warning.
- Over the limit, `data-over-limit` on the root colours the count as an error. The count keeps `status=neutral`, so the hidden "Error:" text is only read once, from the field error.
- Uses [form-field.md](form-field.md), [textarea.md](textarea.md) and [field-message.md](field-message.md).
