# Filter Group

One product filter, such as Brand, Price or Customer rating. It is an [accordion.md](../components/accordion.md) item holding a list of options with result counts.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | `id` of the group, such as `filter-brand`. Option ids are `{id}-{value}`, and range inputs are `{id}-min` and `{id}-max`. Required. |
| title | string | — | Filter name. Required. |
| name | string | — | Query parameter, such as `brand`. Required. |
| type | `checkbox` \| `radio` \| `range` | `checkbox` | `checkbox` for several choices, `radio` for one, `range` for minimum and maximum inputs. |
| options | `{ value, label, count, isChecked }[]` | — | Choices for `checkbox` and `radio`. |
| visibleCount | number | `5` | Options shown before "Show more". |
| isOpen | boolean | `true` | Starts expanded. |
| selectedCount | number | — | Shows "(2)" in the title when options are chosen. |

## Variations

### Checkbox

```emmet
details.filter-group.accordion__item#filter-brand[open]>summary.accordion__summary>h3.accordion__title{Brand}^Fieldset[legend=Brand isLegendHidden]>Checkbox#filter-brand-samsung[name=brand value=samsung count=42]{Samsung}+Checkbox#filter-brand-lg[name=brand value=lg count=31 isChecked]{LG}+Checkbox#filter-brand-sony[name=brand value=sony count=18]{Sony}+details.filter-group__more>summary{Show more}+Checkbox#filter-brand-hisense[name=brand value=hisense count=12]{Hisense}+Checkbox#filter-brand-tcl[name=brand value=tcl count=9]{TCL}
```

### Radio

```emmet
details.filter-group.accordion__item#filter-rating[open]>summary.accordion__summary>h3.accordion__title{Customer rating}^Fieldset[legend="Customer rating" isLegendHidden]>Radio#filter-rating-4[name=rating value=4 count=96]{4 stars and up}+Radio#filter-rating-3[name=rating value=3 count=140]{3 stars and up}
```

### Range

```emmet
details.filter-group.accordion__item#filter-price[open]>summary.accordion__summary>h3.accordion__title{Price}^Fieldset[legend=Price isLegendHidden]>div.filter-group__range>FormField[id=filter-price-min label="Min (£)"]>InputGroup[prefix=£]>Input#filter-price-min[type=number name=priceMin min=0 inputMode=numeric size=sm]^^FormField[id=filter-price-max label="Max (£)"]>InputGroup[prefix=£]>Input#filter-price-max[type=number name=priceMax min=0 inputMode=numeric size=sm]^^^Button[type=submit variant=secondary size=sm]{Go}
```

## Examples

- **Televisions**: Brand, Price, Screen size, Resolution, Customer rating, Smart platform.
- **Washing machines**: Brand, Price, Drum size, Spin speed, Energy rating.

## Notes

- The options sit in a [fieldset.md](../components/fieldset.md) with `isLegendHidden`, because the summary already shows the title.
- When the same filters appear twice on a page (sidebar and drawer), give the drawer copies a different `id`, such as `drawer-filter-brand`.
- Groups sit inside a `form[method=get]` in [filter-panel.md](filter-panel.md), so filters work as a normal form submit. With JavaScript, results can update on change.
- Options with a count of 0 are hidden or disabled.
- Uses [accordion.md](../components/accordion.md), [checkbox.md](../components/checkbox.md), [radio.md](../components/radio.md), [fieldset.md](../components/fieldset.md), [form-field.md](../components/form-field.md), [input-group.md](../components/input-group.md) and [button.md](../components/button.md).
