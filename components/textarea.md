# Textarea

A multi-line text box for longer answers, such as delivery instructions or a review. Give it a label with [form-field.md](form-field.md), or use [character-count.md](character-count.md) when there is a length limit.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Connects the textarea to its label. Required. |
| name | string | — | Form field name. |
| rows | number | `4` | Visible lines. Match it to the expected answer length. |
| value | string | — | Current text. |
| autocomplete | string | — | Native autofill hint. Usually `off`. |
| maxLength | number | — | Renders `maxlength`. Leave it out inside a character count, which warns instead of cutting text off. |
| isRequired | boolean | `false` | Renders `required`. |
| isInvalid | boolean | `false` | Renders `aria-invalid=true`. |
| isDisabled | boolean | `false` | Renders `disabled`. |
| describedBy | string | — | `id`s of hint, error or count messages. Renders `aria-describedby`. |
| onChange | function | — | Called when the text changes. |

## Variations

### Default

```emmet
textarea.textarea#instructions[name=instructions rows=3]
```

### Invalid

```emmet
textarea.textarea#review-text[name=reviewText rows=6 aria-invalid=true aria-describedby="review-text-hint review-text-error"]
```

## Examples

- **Delivery instructions**: `rows=3` at checkout.
- **Review**: `rows=6` in the write-a-review form.
- **Contact us**: `rows=8` for the message.

## Notes

- Resizes vertically only, so it can't break the layout.
- Don't use placeholder text as instructions. Use the form field `hint`.
- Tokens: same as [input.md](input.md).
