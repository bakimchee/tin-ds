# Card

A linked tile with an image, a title and optional supporting text. Used for categories, promotions, brands and help topics. The whole card is clickable. For products use [product-card.md](../patterns/product-card.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| href | string | — | Destination for the whole card. Required. |
| title | string | — | Card title. Required. |
| description | string | — | Supporting text. |
| imageSrc | string | — | Image URL. |
| imageAlt | string | `""` | Usually empty, because the title describes the card. |
| imageRatio | `square` \| `landscape` \| `wide` | `square` | Passed to [image.md](image.md). |
| ctaLabel | string | — | Call-to-action text at the bottom, such as "Shop now". |
| variant | `default` \| `category` \| `promo` | `default` | `category` shows a centred image and short title. `promo` puts the text over the image on a brand surface. |
| headingLevel | `2`–`6` | `3` | Title heading level. |

## Variations

### Category

```emmet
article.card[data-variant=category]>Image[src=/img/cat-tvs.jpg alt="" ratio=square fit=cover width=300 height=300]+h3.card__title>a.card__link[href=/tvs]{TVs}
```

### Promo

```emmet
article.card[data-variant=promo]>Image[src=/img/promo-laptops.jpg alt="" ratio=landscape fit=cover width=400 height=300]+div.card__body>h3.card__title>a.card__link[href=/laptops/offers]{Up to £200 off laptops}^Text{Selected models. Ends Sunday.}+span.card__cta[aria-hidden=true]{Shop now}
```

### Default

```emmet
article.card>Image[src=/img/help-delivery.jpg alt="" ratio=landscape width=400 height=300]+div.card__body>h3.card__title>a.card__link[href=/help/delivery]{Delivery information}^Text[isMuted]{Delivery times, costs and tracking.}
```

## Examples

- **Shop by category**: a grid of `category` cards on the home page.
- **Offers**: `promo` cards under the hero.
- **Brand tiles**: `category` with a logo image and the brand name as the title.

## Notes

- One link per card, on the title. Styling stretches its click area over the whole card.
- `ctaLabel` is visual only (`aria-hidden`), because the title link already names the destination.
- Uses [image.md](image.md) and [text.md](text.md).
- Tokens: `--card-radius`, `--card-shadow`, `--color-surface-brand` for `promo`.
