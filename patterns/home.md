# Home

The shop's front page: hero offers, shop by category, deals, product rails and brands. It should get shoppers into a department or a deal in one click.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| heroSlides | `Banner[]` | — | One to five hero offers. Required. |
| categories | `Card[]` | — | 8 to 12 category tiles. Required. |
| promos | `Card[]` | — | Two to four offer tiles. |
| rails | `{ title, viewAllHref, products: ProductCard[] }[]` | — | Product carousels, such as "Trending" and "Top deals". |
| brands | `Card[]` | — | Brand tiles. |
| infoBanner | `Banner` | — | A `strip` for delivery or finance messaging. |

## Variations

### Default

```emmet
SiteHeader+main#main.page[data-page=home]>Heading[level=1 isVisuallyHidden]{tin: tech, home, toys and more}+Carousel#hero[variant=slides title="Featured offers" isTitleHidden]>li.carousel__item*3>Banner[variant=hero headingLevel=3]^^section.page__section[aria-labelledby=categories-title]>Heading#categories-title[level=2 size=lg]{Shop by category}+Grid[as=ul columns=3 columnsMd=4 columnsLg=6]>(GridItem[as=li]>Card[variant=category])*12^^section.page__section[aria-labelledby=deals-title]>Heading#deals-title[level=2 size=lg]{Today's top deals}+Grid[as=ul columns=1 columnsSm=2 columnsLg=4]>(GridItem[as=li]>Card[variant=promo])*4^^Carousel#trending[title="Trending this week" viewAllHref=/trending]>li.carousel__item*8>ProductCard^^Banner[variant=strip]+Carousel#top-deals[title="Top deals on tech" viewAllHref=/technology/offers]>li.carousel__item*8>ProductCard^^section.page__section[aria-labelledby=brands-title]>Heading#brands-title[level=2 size=lg]{Shop by brand}+Grid[as=ul columns=3 columnsLg=6]>(GridItem[as=li]>Card[variant=category])*6^^^SiteFooter
```

## Examples

- **Argos style**: hero sale banner, 12 department tiles, deal tiles, "Trending", brand tiles.
- **AO style**: hero appliance event, category tiles (Laundry, Fridges, Cooking), USP strip, "Top deals", brands.

## Notes

- The page `h1` is visually hidden, because the hero banners carry the visible headlines.
- Hero banners use `headingLevel=3`, because they sit under the carousel's `h2`.
- Only the first hero image loads straight away (`isEager`). Everything else loads lazily.
- Tiles: categories 3 per row, 4 from `md`, 6 from `lg`. Deals 1 per row, 2 from `sm`, 4 from `lg`.
- Uses [page.md](page.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md), [site-header.md](site-header.md), [carousel.md](../components/carousel.md), [banner.md](../components/banner.md), [heading.md](../components/heading.md), [card.md](../components/card.md), [product-card.md](product-card.md) and [site-footer.md](site-footer.md).
