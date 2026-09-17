# Product Card

A product summary in a grid or carousel: image, name, rating, price, offer and a quick add-to-trolley. The title links to the product page.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| href | string | — | Product page URL. Required. |
| title | string | — | Product name. Required. |
| imageSrc | string | — | Product image. Required. |
| price | number | — | Current price. Required. |
| priceWas | number | — | Previous price. |
| pricePrefix | string | — | Such as "From" when there are options. |
| ratingValue | number | — | Average rating. |
| ratingCount | number | — | Number of reviews. Hides the rating when 0. |
| badges | `{ label, variant, status }[]` | — | Offers and flags, see [badge.md](../components/badge.md). |
| energyGrade | `A`–`G` | — | Shows [energy-rating.md](../components/energy-rating.md). |
| energyHref | string | — | Energy label link. |
| features | string[] | — | Up to three key features, shown in `list` layout. |
| availability | `{ status, method, label }[]` | — | Delivery and collection lines, see [availability.md](../components/availability.md). |
| layout | `grid` \| `list` | `grid` | `list` places the image beside the details. |
| headingLevel | `2`–`6` | `3` | Title heading level. |
| hasAddToBasket | boolean | `true` | Shows the add-to-trolley form. |
| hasWishlist | boolean | `true` | Shows the wishlist heart. |
| hasCompare | boolean | `false` | Shows a "Compare" checkbox. |
| isInWishlist | boolean | `false` | Filled heart. The button renders `aria-pressed=true`. |
| productId | string | — | Sent with add to trolley, wishlist and compare. Required. |
| ctaLabel | string | `Add to trolley` | Add button text, such as "Add to basket". |
| onAddToBasket | function | — | Called when the add button is pressed. |

## Variations

### Grid

```emmet
article.product-card>div.product-card__media>Image[src=/img/p/8812345.jpg alt="" ratio=square]+Button[variant=tertiary isIconOnly iconStart=heart label="Add Samsung 55 inch QLED TV to wishlist"]^div.product-card__badges>Badge[variant=promo]{Save £50}^h3.product-card__title>a.product-card__link[href=/product/8812345]{Samsung QE55Q60D 55 inch QLED 4K Smart TV}^Rating[value=4.6 count=212]+Price[amount=349 amountWas=399 size=sm]+form.product-card__add[action=/basket/add method=post]>input[type=hidden name=productId value=8812345]+Button[type=submit variant=primary isFullWidth]{Add to trolley}
```

### Appliance with energy rating and compare

```emmet
article.product-card>div.product-card__media>Image[src=/img/p/wm-123.jpg alt="" ratio=square]^h3.product-card__title>a.product-card__link[href=/product/wm-123]{Bosch Series 4 9kg Washing Machine}^Rating[value=4.8 count=1034]+div.product-card__price-row>Price[amount=429 size=sm]+EnergyRating[grade=A href=/docs/wm-123-label.pdf]^Availability[method=delivery]{Free next day delivery}+form.product-card__add[action=/basket/add method=post]>input[type=hidden name=productId value=wm-123]+Button[type=submit variant=primary isFullWidth]{Add to basket}^Checkbox#compare-wm-123[name=compare value=wm-123]{Compare}
```

### List

```emmet
article.product-card[data-layout=list]>div.product-card__media>Image[src=/img/p/8812345.jpg alt="" ratio=square]^div.product-card__body>h3.product-card__title>a.product-card__link[href=/product/8812345]{Samsung QE55Q60D 55 inch QLED 4K Smart TV}^Rating[value=4.6 count=212]+ul.product-card__features>li{55 inch QLED screen}+li{4K Ultra HD}+li{Smart TV with apps}^Availability[method=delivery]{Delivery available}+Availability[method=collection]{Check stock in your local store}^div.product-card__actions>Price[amount=349 amountWas=399]+form.product-card__add[action=/basket/add method=post]>input[type=hidden name=productId value=8812345]+Button[type=submit variant=primary isFullWidth]{Add to trolley}
```

## Examples

- **Product grid**: `grid` layout, three columns on desktop and two on mobile.
- **Search results with view toggle**: `list` layout.
- **Carousel on home and product pages**: `grid` with `hasAddToBasket=false` to keep it light.
- **Appliance listings (AO style)**: `hasCompare` and `energyGrade`.

## Notes

- Only the title is a link. The image is part of the card's click area through styling, so screen readers don't hear the link twice.
- Add to trolley is a real form post. With JavaScript it can open [added-to-basket-dialog.md](added-to-basket-dialog.md) instead of reloading.
- Wishlist and compare labels include the product name.
- Uses [image.md](../components/image.md), [button.md](../components/button.md), [badge.md](../components/badge.md), [rating.md](../components/rating.md), [price.md](../components/price.md), [energy-rating.md](../components/energy-rating.md), [checkbox.md](../components/checkbox.md) and [availability.md](../components/availability.md).
