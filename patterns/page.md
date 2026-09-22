# Page

The shared page shell used by every page template: stylesheets, cookie banner, header, a `main` holding the content, and the footer. Page templates fill it in, and lay out columns inside `main` with [grid.md](../components/grid.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| pageType | string | — | Template name, such as `home` or `basket`. Renders `data-page`. Required. |
| title | string | — | Document `title`, written as "Page name \| tin". Required. |
| children | node | — | Page content. |

## Variations

### Document

```emmet
html[lang=en-GB]>head>meta[charset=utf-8]+meta[name=viewport content="width=device-width, initial-scale=1"]+title{Televisions | tin}+link[rel=stylesheet href=/tokens.css]+link[rel=stylesheet href=/breakpoints.css]+link[rel=stylesheet href=/grid.css]^body>CookieBanner+SiteHeader+main#main.page[data-page=product-listing]>section.page__section+section.page__section^SiteFooter
```

### Section with grid

```emmet
section.page__section[aria-labelledby=section-title]>Heading#section-title[level=2 size=lg]{Shop by category}+Grid[as=ul columns=3 columnsLg=6]>GridItem[as=li]*6
```

## Examples

- **Home**: stacked `.page__section` blocks with tile grids, see [home.md](home.md).
- **Product listing**: filters `spanLg=3` and products `spanLg=9`, see [product-listing.md](product-listing.md).
- **Basket and checkout**: content `spanLg=8` and order summary `spanLg=4`, see [basket.md](basket.md) and [checkout.md](checkout.md).
- **Product detail**: gallery `spanLg=7` and buy box `spanLg=5`, see [product-detail.md](product-detail.md).

## Notes

- Parts: `.page__intro` (heading and intro text), `.page__section` (a titled block), `.page__list` (a plain stacked list). Columns always use `Grid`.
- `.page` is centred at `--layout-max-width` with `--layout-gutter` on each side. Sections are spaced by `--layout-section-gap`.
- `id=main` is the target of the header's skip link.
- The header is [site-header.md](site-header.md) on shop pages and [masthead.md](masthead.md) on news pages. Both sit above `main` and both carry the skip link.
- [cookie-banner.md](cookie-banner.md) comes first in `body` until the visitor makes a choice.
- Stylesheets load in order: tokens, breakpoints, grid.
