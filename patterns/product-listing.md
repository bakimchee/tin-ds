# Product Listing

A category or search results page: breadcrumb, title, filters, toolbar and the product grid. The same template serves "Televisions" and "Results for 'tv'".

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | — | Category name or "Results for '{query}'". Required. |
| description | string | — | Short category intro. |
| breadcrumb | `Breadcrumb` | — | Category path. Leave out on search. |
| subcategories | `Card[]` | — | Tiles for narrowing down, such as "OLED TVs". |
| filters | `FilterPanel` | — | Filters. Required. |
| toolbar | `ListingToolbar` | — | Count and sort. Required. |
| grid | `ProductGrid` | — | Products and pagination. Required. |
| promo | `Banner` | — | A `strip` banner above the grid. |

## Variations

### Category

```emmet
SiteHeader+main#main.page[data-page=product-listing]>Breadcrumb+div.page__intro>Heading[level=1 size=xl]{Televisions}+Text[isMuted]{Smart TVs, OLED and QLED from the biggest brands.}^nav[aria-label="Shop by type"]>Grid[as=ul columns=3 columnsLg=6]>(GridItem[as=li]>Card[variant=category headingLevel=2])*6^^Grid>GridItem[spanLg=3 hideBelow=lg]>FilterPanel^GridItem[spanLg=9]>Banner[variant=strip]+ListingToolbar+ProductGrid^^FilterPanel[variant=drawer]^SiteFooter
```

### Search results

```emmet
SiteHeader[searchValue=tv]+main#main.page[data-page=search]>div.page__intro>Heading[level=1 size=xl]{Results for "tv"}^Grid>GridItem[spanLg=3 hideBelow=lg]>FilterPanel^GridItem[spanLg=9]>ListingToolbar+ProductGrid^^FilterPanel[variant=drawer]^SiteFooter
```

## Examples

- **Argos style**: "Televisions" with 128 products, Brand and Price filters, and "Add to trolley" on each card.
- **AO style**: "Washing machines" with energy ratings, compare checkboxes and "Free next day delivery" on each card.

## Notes

- The filter sidebar covers 3 columns from `lg` and is hidden below it (`hideBelow=lg`). There, the toolbar's Filter button opens the drawer.
- The drawer sits outside the grid, because a dialog takes no space in the layout.
- Subcategory cards use `headingLevel=2`, because they come straight after the `h1`.
- Filters, sort and page number are all in the URL, so every state can be shared and bookmarked.
- Uses [page.md](page.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md), [site-header.md](site-header.md), [breadcrumb.md](../components/breadcrumb.md), [heading.md](../components/heading.md), [text.md](../components/text.md), [card.md](../components/card.md), [filter-panel.md](filter-panel.md), [banner.md](../components/banner.md), [listing-toolbar.md](listing-toolbar.md), [product-grid.md](product-grid.md) and [site-footer.md](site-footer.md).
