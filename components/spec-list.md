# Spec List

Product specifications as label and value pairs, in titled groups.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| groups | `{ title, items }[]` | — | Groups. `items` of `{ label, value }` render as a `dl`. `items` of plain strings render as a `ul` of features. Required. |
| headingLevel | `2`–`5` | `3` | Group title heading level. |
| variant | `table` \| `compact` | `table` | `table` puts the label and value side by side in rows. `compact` stacks the value under the label. |

## Variations

### Table

```emmet
div.spec-list>section.spec-list__group>h3.spec-list__title{Screen}+dl.spec-list__items>(div.spec-list__row>dt{Screen size}+dd{55 inches})+(div.spec-list__row>dt{Resolution}+dd{4K Ultra HD})+(div.spec-list__row>dt{HDR}+dd{HDR10+})^^section.spec-list__group>h3.spec-list__title{Dimensions}+dl.spec-list__items>(div.spec-list__row>dt{Width}+dd{122.7cm})+(div.spec-list__row>dt{Weight}+dd{15.6kg})
```

### Key features

```emmet
div.spec-list[data-variant=compact]>section.spec-list__group>h3.spec-list__title{Key features}+ul.spec-list__features>li{55 inch QLED screen}+li{4K Ultra HD resolution}+li{Smart TV with built-in apps}
```

## Examples

- **Product information**: "Specifications" accordion item.
- **Buy box summary**: "Key features" with three to five points.

## Notes

- `div` wrappers inside `dl` are valid HTML and make rows easy to style.
- Use "Yes" and "No" words, not tick icons alone.
