# Basket

The trolley page: every item with quantity and remove controls, an order summary with the checkout button, and accessory suggestions.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| items | `BasketItem[]` | — | Lines in the basket. |
| summary | `OrderSummary` | — | Totals and the checkout button. Required. |
| alerts | `Alert[]` | — | Price or stock changes. |
| recommendations | `ProductCard[]` | — | "Don't forget" rail. |

## Variations

### With items

```emmet
SiteHeader+main#main.page[data-page=basket]>Heading[level=1 size=xl]{Your trolley (2 items)}+Alert[status=warning]{The price of 1 item has changed since you added it.}+Grid>GridItem[spanLg=8]>section[aria-label="Trolley items"]>ul.page__list>(li>BasketItem[headingLevel=2])*2^Link[href=/ variant=standalone iconStart=chevron-left]{Continue shopping}^^GridItem[spanLg=4]>OrderSummary[hasPromoCode]^^Carousel#dont-forget[title="Don't forget"]>li.carousel__item*6>ProductCard^^^SiteFooter
```

### Empty

```emmet
SiteHeader+main#main.page[data-page=basket]>Heading[level=1 size=xl]{Your trolley is empty}+Text{Find something you'll love in our latest offers.}+Button[href=/offers variant=primary]{Shop offers}+Carousel#trending[title="Trending this week"]>li.carousel__item*8>ProductCard^^^SiteFooter
```

## Examples

- **Argos style**: "Your trolley", with delivery and collection items grouped, and "Continue to checkout".
- **AO style**: "Your basket", with installation add-ons listed under each item.

## Notes

- Items (`spanLg=8`) and summary (`spanLg=4`) sit side by side from `lg`. Below that the summary follows the items.
- Use `SiteHeader[basketLabel=Basket]` and "Your basket" for AO-style wording.
- Uses [page.md](page.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md), [site-header.md](site-header.md), [heading.md](../components/heading.md), [alert.md](../components/alert.md), [basket-item.md](basket-item.md), [link.md](../components/link.md), [order-summary.md](order-summary.md), [carousel.md](../components/carousel.md), [product-card.md](product-card.md), [text.md](../components/text.md), [button.md](../components/button.md) and [site-footer.md](site-footer.md).
