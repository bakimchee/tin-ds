# Option Card

A selectable card built around a [radio.md](radio.md) or [checkbox.md](checkbox.md), with a title, a description and a price. Used when each choice needs detail, such as delivery methods, protection plans and installation.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Input `id`. Required. |
| name | string | — | Input name. Required. |
| value | string | — | Input value. Required. |
| type | `radio` \| `checkbox` | `radio` | `radio` for one choice, `checkbox` for add-ons. |
| title | string | — | Option name. Required. |
| description | string | — | Details, such as "Get it tomorrow". |
| price | number | — | Cost. `0` shows "Free". |
| icon | string | — | [icon.md](icon.md) name, such as `truck` or `store`. |
| badge | string | — | [badge.md](badge.md) text, such as "Most popular". |
| isChecked | boolean | `false` | Renders `checked`. |
| isDisabled | boolean | `false` | Renders `disabled`. Say why in `description`. |
| children | node | — | Extra content shown when checked, such as a postcode field or time slots. |

## Variations

### Radio

```emmet
label.option-card[for=fulfil-delivery]>input#fulfil-delivery[type=radio name=fulfilment value=delivery checked]+Icon[name=truck]+span.option-card__body>span.option-card__title{Delivery}+span.option-card__description{Get it tomorrow, 7am to 7pm}^Price[amount=3.95 size=sm]
```

### Checkbox add-on

```emmet
label.option-card[for=addon-install]>input#addon-install[type=checkbox name=addons value=install]+span.option-card__body>span.option-card__title{Installation}+span.option-card__description{We connect it and test it's working.}^Price[amount=30 size=sm]+Badge[status=info]{Most popular}
```

### With extra content

```emmet
div.option-card[data-checked]>label.option-card__choice[for=fulfil-collect]>input#fulfil-collect[type=radio name=fulfilment value=collection checked]+Icon[name=store]+span.option-card__body>span.option-card__title{Click & Collect}+span.option-card__description{Free, ready in 1 hour at selected stores}^Price[amount=0 size=sm]^div.option-card__extra>FormField[id=collect-postcode label="Enter your postcode"]>InputGroup>Input#collect-postcode[name=postcode autocomplete=postal-code]+Button[type=submit variant=secondary]{Check stores}
```

## Examples

- **Buy box and checkout**: a group of `radio` cards for Delivery or Click & Collect.
- **Buy box add-ons (AO style)**: `checkbox` cards for installation, removal of the old appliance and recycling.
- **Protection plan (Argos style)**: `radio` cards for "No cover", "2 years £59" and "3 years £79".

## Notes

- Group cards in a [fieldset.md](fieldset.md), so the question is read out.
- The whole card is the label, so every part is clickable.
- When there are `children`, the card becomes a `div` with a `label.option-card__choice` inside, because a label can't contain other form fields.
- Uses [price.md](price.md), [form-field.md](form-field.md), [input-group.md](input-group.md) and [button.md](button.md).
