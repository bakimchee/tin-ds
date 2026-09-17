# Product Detail

A single product page: gallery and buy box at the top, then product information and recommendations.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| breadcrumb | `Breadcrumb` | — | Category path. Required. |
| gallery | `ProductGallery` | — | Images. Required. |
| buyBox | `ProductBuyBox` | — | Title, price and purchase form. Required. |
| info | `ProductInfo` | — | Description, specifications and reviews. Required. |
| alsoViewed | `ProductCard[]` | — | "Customers also viewed" rail. |
| accessories | `ProductCard[]` | — | "You might also need" rail. |

## Variations

### Default

```emmet
SiteHeader+main#main.page[data-page=product-detail]>Breadcrumb+Grid>GridItem[spanLg=7]>ProductGallery^GridItem[spanLg=5]>ProductBuyBox^^ProductInfo+Carousel#also-need[title="You might also need"]>li.carousel__item*6>ProductCard^^Carousel#also-viewed[title="Customers also viewed"]>li.carousel__item*8>ProductCard^^^AddedToBasketDialog+SiteFooter
```

## Examples

- **Argos style TV**: catalogue number, "Save £50", Delivery or Click & Collect, protection plan, reviews.
- **AO style washing machine**: energy rating, key features, installation and recycling add-ons, specifications table.

## Notes

- Gallery (`spanLg=7`) and buy box (`spanLg=5`) sit side by side from `lg`, and stack below it.
- Mark up the product with schema.org `Product` data (name, price, rating) for search engines.
- Uses [page.md](page.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md), [site-header.md](site-header.md), [breadcrumb.md](../components/breadcrumb.md), [product-gallery.md](../components/product-gallery.md), [product-buy-box.md](product-buy-box.md), [product-info.md](product-info.md), [carousel.md](../components/carousel.md), [product-card.md](product-card.md), [added-to-basket-dialog.md](added-to-basket-dialog.md) and [site-footer.md](site-footer.md).
