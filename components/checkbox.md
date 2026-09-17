# Checkbox

A box with its own label, for turning one option on or off, or picking several from a list.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Connects the box to its label. Required. |
| name | string | — | Form field name. |
| value | string | — | Value sent when checked. |
| isChecked | boolean | `false` | Renders `checked`. |
| isDisabled | boolean | `false` | Renders `disabled`. |
| count | number | — | Number of matching results, shown after the label. |
| onChange | function | — | Called when toggled. |
| children | string | — | Label text. |

## Variations

### Default

```emmet
label.checkbox[for=brand-samsung]>input#brand-samsung[type=checkbox name=brand value=samsung]+span.checkbox__label{Samsung}
```

### With count

```emmet
label.checkbox[for=brand-lg]>input#brand-lg[type=checkbox name=brand value=lg checked]+span.checkbox__label{LG}+span.checkbox__count{(42)}
```

## Examples

- **Filter options**: brand, price range, screen size, each with `count`.
- **Compare**: "Compare" on an AO-style product card.
- **Marketing consent**: "Email me offers" at checkout.

## Notes

- The whole label row is the click target.
- Put a group of checkboxes in a [fieldset.md](fieldset.md). A single checkbox, such as marketing consent, doesn't need one.
- For a setting that saves straight away, use [switch.md](switch.md).
- Tokens: `--color-border-strong`, `--color-action-primary-background` when checked.
