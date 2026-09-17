# Switch

An on/off control that takes effect straight away, such as marketing preferences in an account. It is a checkbox with `role=switch`. In a form that is saved with a button, use [checkbox.md](checkbox.md) instead.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Connects the switch to its label. Required. |
| name | string | — | Form field name. |
| value | string | `on` | Value sent when on. |
| isChecked | boolean | `false` | On. Renders `checked`. |
| isDisabled | boolean | `false` | Renders `disabled`. |
| describedBy | string | — | `id` of a hint. Renders `aria-describedby`. |
| onChange | function | — | Called when switched. Saves the change. |
| children | string | — | Label, naming what is switched on. |

## Variations

### Off

```emmet
label.switch[for=email-offers]>span.switch__label{Email me offers and news}+input#email-offers[type=checkbox role=switch name=emailOffers value=on]
```

### On

```emmet
label.switch[for=sms-updates]>span.switch__label{Text me delivery updates}+input#sms-updates[type=checkbox role=switch name=smsUpdates value=on checked]
```

## Examples

- **Account contact preferences**: email offers, text messages, post.
- **Cookie settings**: analytics and marketing cookies, each saved when switched.

## Notes

- The label names the setting, never "On" or "Off". `role=switch` announces the state.
- It needs JavaScript to save straight away. Without it, put the switches in a [form.md](../patterns/form.md) with a "Save preferences" button.
- Label first, switch second, on one row.
- Tokens: `--radius-round`, `--color-border-strong` when off, `--color-action-primary-background` when on.
