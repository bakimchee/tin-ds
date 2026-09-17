# Listing Toolbar

The bar above a product grid: result count, sort order, grid or list view, and the mobile filter button.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| resultCount | number | — | Total products. Required. |
| sort | string | `relevance` | Selected sort value. |
| sortOptions | `{ value, label }[]` | — | Sort choices, see [select.md](../components/select.md). |
| view | `grid` \| `list` | `grid` | Current layout. |
| quickFilters | `{ label, href, isSelected }[]` | — | Toggle chips, such as "In stock" or "On offer". |
| action | string | — | Listing URL for the sort form. Required. |

## Variations

### Default

```emmet
div.listing-toolbar>p.listing-toolbar__count[role=status]{128 products}+Button[variant=secondary iconStart=filter command=show-modal commandFor=filters]{Filter}+form.listing-toolbar__sort[action=/tvs method=get]>FormField[id=sort label="Sort by" layout=inline]>Select#sort[name=sort]^Button[type=submit variant=secondary size=sm]{Sort}^div.listing-toolbar__view[role=group aria-label=View]>Chip[href="/tvs?view=grid" isSelected]>Icon[name=grid]+span{Grid}^Chip[href="/tvs?view=list"]>Icon[name=list]+span{List}^^div.listing-toolbar__quick-filters[role=group aria-label="Quick filters"]>Chip[href="/tvs?stock=in"]{In stock}+Chip[href="/tvs?offer=true"]{On offer}+Chip[href="/tvs?delivery=next-day"]{Next day delivery}
```

## Examples

- **Product listing and search results**: above the grid, under the page heading.

## Notes

- The count is `role=status`, so updates are announced when filters change.
- The Filter button is only shown on small screens, where the filter panel is a drawer.
- The Sort button is needed without JavaScript. With JavaScript the form submits on change and the button is hidden.
- Uses [button.md](../components/button.md), [form-field.md](../components/form-field.md), [select.md](../components/select.md), [chip.md](../components/chip.md) and [icon.md](../components/icon.md).
