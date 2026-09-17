# Date Input

A date typed into separate day, month and year boxes. Use it for dates people already know, such as a date of birth on a finance application. To choose a delivery day, use [option-card.md](option-card.md) with the available days.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Fieldset `id`. Part ids are `{id}-day`, `{id}-month` and `{id}-year`. Required. |
| name | string | — | Part names are `{name}Day`, `{name}Month` and `{name}Year`. Required. |
| legend | string | — | The question. Required. |
| hint | string | — | Example format, such as "For example, 27 3 1990". |
| error | string | — | Error for the date. |
| value | `{ day, month, year }` | — | Current values. |
| invalidParts | (`day` \| `month` \| `year`)[] | — | Parts marked `isInvalid`. All parts when `error` is set and this is left out. |
| isBirthDate | boolean | `false` | Adds `bday-day`, `bday-month` and `bday-year` autocomplete. |

## Variations

### Date of birth

```emmet
Fieldset#dob[legend="What is your date of birth?" hint="For example, 27 3 1990"]>div.date-input>(div.date-input__item>label.date-input__label[for=dob-day]{Day}+Input#dob-day[name=dobDay inputMode=numeric autocomplete=bday-day])+(div.date-input__item>label.date-input__label[for=dob-month]{Month}+Input#dob-month[name=dobMonth inputMode=numeric autocomplete=bday-month])+(div.date-input__item.date-input__item--year>label.date-input__label[for=dob-year]{Year}+Input#dob-year[name=dobYear inputMode=numeric autocomplete=bday-year])
```

### With error

```emmet
Fieldset#dob[legend="What is your date of birth?" error="Date of birth must include a year"]>div.date-input>(div.date-input__item>label.date-input__label[for=dob-day]{Day}+Input#dob-day[name=dobDay inputMode=numeric autocomplete=bday-day value=27])+(div.date-input__item>label.date-input__label[for=dob-month]{Month}+Input#dob-month[name=dobMonth inputMode=numeric autocomplete=bday-month value=3])+(div.date-input__item.date-input__item--year>label.date-input__label[for=dob-year]{Year}+Input#dob-year[name=dobYear inputMode=numeric autocomplete=bday-year isInvalid])
```

## Examples

- **Finance application**: date of birth, with `isBirthDate`.
- **Age-restricted items**: confirm the buyer is 18 or over at checkout.

## Notes

- Inputs use the default `type=text` with `inputMode=numeric`, not `type=number`, so "03" keeps its zero and the value can't change on scroll.
- The year box is wider (`.date-input__item--year`).
- The error names the part that is wrong. The error summary links to the first invalid part.
- Don't use a calendar picker for a date people already know.
- Uses [fieldset.md](fieldset.md) and [input.md](input.md).
