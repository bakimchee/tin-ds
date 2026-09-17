# Form

The wrapper for any form that collects details. It holds the error summary, the fields and the actions, and sets the rules for validation. Checkout, sign in, account details and reviews all use it. Small single-purpose forms, such as search, sort and add to trolley, don't need it.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| action | string | — | Where the form is sent. Required. |
| method | `get` \| `post` | `post` | Native method. |
| errors | `{ fieldId, message }[]` | — | Shows the error summary. Each message links to its field. |
| submitLabel | string | — | Primary button text, such as "Save details". Required. |
| cancelLabel | string | — | Secondary link text, such as "Cancel". |
| cancelHref | string | — | Secondary link target. |
| isSubmitting | boolean | `false` | Sets `isLoading` on the submit button. |
| children | node | — | Form fields and fieldsets. |

## Variations

### Default

```emmet
form.form[action=/account/details method=post novalidate]>FormField[id=name label="Full name"]>Input#name[name=name autocomplete=name isRequired]^FormField[id=email label="Email address"]>Input#email[type=email name=email autocomplete=email isRequired]^div.form__actions>Button[type=submit variant=primary]{Save details}+Link[href=/account variant=standalone]{Cancel}
```

### With errors

```emmet
form.form[action=/account/details method=post novalidate]>Alert[status=danger title="There is a problem"]>ul.alert__list>(li>Link[href=#name]{Enter your full name})+(li>Link[href=#email]{Enter an email address in the correct format, like name@example.com})^^FormField[id=name label="Full name" error="Enter your full name"]>Input#name[name=name autocomplete=name isRequired isInvalid describedBy=name-error]^FormField[id=email label="Email address" error="Enter an email address in the correct format, like name@example.com"]>Input#email[type=email name=email autocomplete=email value=sam@example isRequired isInvalid describedBy=email-error]^div.form__actions>Button[type=submit variant=primary]{Save details}+Link[href=/account variant=standalone]{Cancel}
```

## Examples

- **Checkout**: [checkout-form.md](checkout-form.md).
- **Sign in**: email, [password-input.md](../components/password-input.md), "Sign in".
- **Account details**: name, email, phone, "Save details".
- **Write a review**: rating, title, [character-count.md](../components/character-count.md), "Submit review".

## Notes

- `novalidate` turns off the browser's own error bubbles. Fields are checked when the form is submitted, never while someone is typing.
- When there are errors:
  - Show the summary first and move focus to it.
  - Start the page `title` with "Error: ".
  - Show each message on its field with `error`, using the same words as the summary.
- Summary links go to the field `id`. For a fieldset they go to its first control, and for a date input to the first invalid part.
- Keep what people typed when the form comes back, except passwords.
- Mark optional fields with "(optional)" in the label. Don't use asterisks.
- One primary button. Other actions are links.
- Uses [alert.md](../components/alert.md), [form-field.md](../components/form-field.md), [fieldset.md](../components/fieldset.md), [button.md](../components/button.md) and [link.md](../components/link.md).
