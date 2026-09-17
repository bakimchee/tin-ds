# Fieldset

Groups related controls under one question, with a legend, an optional hint and an error for the whole group. It is the group version of [form-field.md](form-field.md). Use it for radio and checkbox groups, option cards, date parts and checkout steps.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | `id` of the fieldset. The hint and error ids come from it. Required when `hint` or `error` is set. |
| legend | string | — | The question or group name. Required. |
| headingLevel | `1`–`4` | — | Wraps the legend text in a [heading.md](heading.md), for a fieldset that starts a section. |
| hint | string | — | Help text for the group. Renders a [field-message.md](field-message.md) `#{id}-hint`. |
| error | string | — | Error for the group. Renders a field message `#{id}-error` with `status=danger`. |
| isLegendHidden | boolean | `false` | Adds `data-visually-hidden` to the legend, for groups whose title is already visible. |
| layout | `stacked` \| `inline` | `stacked` | `inline` puts short options in a row, such as Yes and No. |
| children | node | — | The controls. |

## Variations

### Radio group with hint

```emmet
fieldset.fieldset#contact[aria-describedby=contact-hint]>legend.fieldset__legend{How should we send delivery updates?}+FieldMessage#contact-hint{We'll only contact you about this order.}+Radio#contact-email[name=contact value=email isChecked]{Email}+Radio#contact-sms[name=contact value=sms]{Text message}
```

### Checkbox group with error

```emmet
fieldset.fieldset#services[aria-describedby=services-error]>legend.fieldset__legend{Which services do you need?}+FieldMessage#services-error[status=danger]{Select at least one service}+Checkbox#services-install[name=services value=install]{Installation}+Checkbox#services-recycle[name=services value=recycle]{Recycle my old appliance}
```

### Inline

```emmet
fieldset.fieldset#gift[data-layout=inline]>legend.fieldset__legend{Is this order a gift?}+Radio#gift-yes[name=gift value=yes]{Yes}+Radio#gift-no[name=gift value=no isChecked]{No}
```

### Section heading

```emmet
fieldset.fieldset#step-details>legend.fieldset__legend>Heading[level=2 size=md]{1. Your details}^FormField[id=name label="Full name"]>Input#name[name=name autocomplete=name isRequired]^FormField[id=email label="Email address"]>Input#email[type=email name=email autocomplete=email isRequired]
```

## Examples

- **Delivery or collection**: [option-card.md](option-card.md) choices in the product buy box.
- **Filters**: each [filter-group.md](../patterns/filter-group.md) with `isLegendHidden`.
- **Date of birth**: the day, month and year in [date-input.md](date-input.md).
- **Checkout steps**: `headingLevel=2` in [checkout-form.md](../patterns/checkout-form.md).

## Notes

- Order of parts: legend, hint, error, controls. This is the same order as a form field.
- `aria-describedby` goes on the `fieldset`, pointing at the hint and error.
- One question per fieldset. Nest one only for extra fields revealed by a choice.
- Uses [field-message.md](field-message.md), [heading.md](heading.md), [radio.md](radio.md), [checkbox.md](checkbox.md) and [form-field.md](form-field.md).
