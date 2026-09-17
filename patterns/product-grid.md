# Product Grid

A list of [product-card.md](product-card.md) items laid out with [grid.md](../components/grid.md), followed by [pagination.md](../components/pagination.md). Used for category listings, search results and the wishlist.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| products | `ProductCard[]` | — | Products on this page. Required. |
| view | `grid` \| `list` | `grid` | Passed to each card's `layout`. `list` shows one card per row. |
| page | number | `1` | Current page. |
| pageCount | number | — | Total pages. |
| hrefTemplate | string | — | Pagination URL template. |
| promoSlot | `{ position, card }` | — | A [card.md](../components/card.md) `promo` placed at a grid position, such as after the fourth product. It covers two columns. |

## Variations

### Grid

```emmet
section.product-grid[aria-labelledby=products-title]>Heading#products-title[level=2 isVisuallyHidden]{Products}+Grid[as=ul columns=2 columnsMd=3 columnsXl=4]>(GridItem[as=li]>ProductCard)*4+(GridItem[as=li span=2]>Card[variant=promo])+(GridItem[as=li]>ProductCard)*7^Pagination[page=1 pageCount=11]
```

### List

```emmet
section.product-grid[aria-labelledby=products-title data-view=list]>Heading#products-title[level=2 isVisuallyHidden]{Products}+Grid[as=ul columns=1]>(GridItem[as=li]>ProductCard[layout=list])*12^Pagination[page=1 pageCount=11]
```

## Examples

- **Category listing**: 30 products per page. 2 per row on mobile, 3 from `md` and 4 from `xl`.
- **Search results**: the same, under "Results for 'tv'".
- **No results**: replace the grid with [alert.md](../components/alert.md) `info` "No products match your filters", a "Clear all filters" button and popular categories.

## Notes

- The whole list uses `ul`, so screen readers announce "list, 12 items".
- A visually hidden `h2` "Products" puts the product card `h3`s in the right place in the outline.
- Uses [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md), [product-card.md](product-card.md), [card.md](../components/card.md) and [pagination.md](../components/pagination.md).
