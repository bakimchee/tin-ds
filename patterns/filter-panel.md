# Filter Panel

All filters for a product listing. It shows applied filters as removable chips, then a form of [filter-group.md](filter-group.md) items. It is a sidebar on desktop and a [dialog.md](../components/dialog.md) drawer on mobile.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| action | string | — | Listing URL the form submits to with `method=get`. Required. |
| groups | `FilterGroup[]` | — | Filters, most used first. Required. |
| appliedFilters | `{ label, removeHref }[]` | — | Active filters, shown as chips. |
| clearHref | string | — | Listing URL with no filters. |
| resultCount | number | — | Used in "Show 128 results". |
| variant | `sidebar` \| `drawer` | `sidebar` | `drawer` wraps the panel in a dialog with a sticky results button. |

## Variations

### Sidebar

```emmet
aside.filter-panel[aria-labelledby=filter-title]>div.filter-panel__header>Heading#filter-title[level=2 size=md]{Filter by}+Button[href=/tvs variant=tertiary size=sm]{Clear all}^h3.filter-panel__applied-title{Applied filters}+ul.filter-panel__applied>(li>Chip[variant=removable href="/tvs?size=55"]{LG})+(li>Chip[variant=removable href="/tvs?brand=lg"]{55 inch})^form.filter-panel__form[action=/tvs method=get]>FilterGroup#filter-brand[title=Brand name=brand]+FilterGroup#filter-price[title=Price name=price type=range]+FilterGroup#filter-size[title="Screen size" name=size]+FilterGroup#filter-rating[title="Customer rating" name=rating type=radio]+Button[type=submit variant=primary isFullWidth]{Apply filters}
```

### Drawer

```emmet
Dialog#filters[variant=drawer side=start title=Filter]>form.filter-panel[data-variant=drawer action=/tvs method=get]>h3.filter-panel__applied-title{Applied filters}+ul.filter-panel__applied>li>Chip[variant=removable href="/tvs?size=55"]{LG}^^FilterGroup#drawer-filter-brand[title=Brand name=brand isOpen=false]+FilterGroup#drawer-filter-price[title=Price name=price type=range isOpen=false]+FilterGroup#drawer-filter-size[title="Screen size" name=size isOpen=false]+Button[type=submit variant=primary isFullWidth]{Show 128 results}
```

## Examples

- **Televisions listing**: Brand, Price, Screen size, Resolution, Customer rating.
- **Mobile**: the listing toolbar's "Filter" button opens the `drawer`.

## Notes

- Each chip's `href` is the current URL without that filter.
- The "Apply filters" button is needed without JavaScript. With JavaScript, results can update on change and the button can be hidden in the sidebar.
- In the drawer, groups start closed to keep the list short.
- The sidebar and drawer are both in the page, so drawer groups use `drawer-` ids to keep every `id` unique.
- The applied filters heading is hidden when there are no applied filters.
- Uses [heading.md](../components/heading.md), [button.md](../components/button.md), [chip.md](../components/chip.md), [filter-group.md](filter-group.md) and [dialog.md](../components/dialog.md).
