# Accordion

A stack of sections that open and close. Built on native `details` and `summary`, so it works without JavaScript.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| items | `{ id, title, children, isOpen }[]` | — | Sections. Required. |
| name | string | — | Shared `name` on each `details`. Opening one closes the others. |
| headingLevel | `2`–`6` | `3` | Heading level wrapped around each title. |
| hasDivider | boolean | `true` | Line between sections. |

## Variations

### Default

```emmet
div.accordion>(details.accordion__item#description[open]>summary.accordion__summary>h2.accordion__title{Description}^div.accordion__content>Text{Enjoy brighter colour with Quantum Dot technology.})+(details.accordion__item#specifications>summary.accordion__summary>h2.accordion__title{Specifications}^div.accordion__content>SpecList)
```

### One open at a time

```emmet
div.accordion>(details.accordion__item[name=faq]>summary.accordion__summary>h3.accordion__title{How long does delivery take?}^div.accordion__content>Text{Most orders arrive the next day.})+(details.accordion__item[name=faq]>summary.accordion__summary>h3.accordion__title{Can I return an item?}^div.accordion__content>Text{Yes, within 30 days.})
```

## Examples

- **Product information**: Description, Specifications, Reviews, Delivery & returns.
- **Filter groups**: each group in [filter-group.md](../patterns/filter-group.md) is one accordion item.
- **Footer on mobile**: link columns collapse.

## Notes

- The chevron is added with styling and turns when `[open]`.
- Give items an `id` so links such as `#reviews` can point at them.
- Contains any content. See [spec-list.md](spec-list.md) and [text.md](text.md).
