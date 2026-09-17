# Password Input

A password field with a show/hide button and, when creating a password, the rules it must meet. Used for signing in, creating an account and changing a password. Put it inside [form-field.md](form-field.md) for the label.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Input `id`. Required. |
| name | string | `password` | Form field name. |
| autocomplete | `current-password` \| `new-password` | `current-password` | `new-password` when creating one, so password managers offer a strong password. |
| requirements | string[] | — | Rules listed under the field. Renders `#{id}-rules`. |
| isRequired | boolean | `false` | Renders `required`. |
| isInvalid | boolean | `false` | Renders `aria-invalid=true`. |
| describedBy | string | — | Hint or error ids. The rules id is added automatically. |
| hasToggle | boolean | `true` | Shows the Show/Hide button. |

## Variations

### Sign in

```emmet
div.password-input>Input#password[type=password name=password autocomplete=current-password isRequired]+Button[variant=tertiary size=sm label="Show password"]{Show}+p.password-input__status[aria-live=polite data-visually-hidden]
```

### New password

```emmet
div.password-input>Input#new-password[type=password name=password autocomplete=new-password isRequired describedBy=new-password-rules]+Button[variant=tertiary size=sm label="Show password"]{Show}+p.password-input__status[aria-live=polite data-visually-hidden]+ul.password-input__rules#new-password-rules>li{At least 8 characters}+li{At least one number}+li{At least one capital letter}
```

## Examples

- **Sign in**: default, with a "Forgotten your password?" link under the field.
- **Create an account**: `autocomplete=new-password` with `requirements`.
- **Save your details after ordering**: `new-password` on the order confirmation page.

## Notes

- The toggle needs JavaScript. Only render the button when the script is running. It switches the input `type` between `password` and `text`, changes its text to "Hide" and its label to "Hide password", and puts "Your password is visible" in the status.
- With JavaScript, each rule can get `data-met` as it is satisfied.
- Never block pasting.
- Uses [input.md](input.md) and [button.md](button.md).
