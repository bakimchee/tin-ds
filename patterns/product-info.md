# Product Info

The detail below the fold on a product page: description, specifications, reviews, and delivery and returns, as accordion sections that can be linked to.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| description | node | — | Marketing copy, as `Text` paragraphs. Required. |
| specifications | `SpecList` | — | Specification groups. |
| ratingSummary | `RatingSummary` | — | Overall rating. |
| reviews | `Review[]` | — | First page of reviews. |
| reviewPageCount | number | — | Review pages for pagination. |
| deliveryText | node | — | Delivery and returns copy. |

## Variations

### Default

```emmet
section.product-info[aria-label="Product information"]>div.accordion>(details.accordion__item#description[open]>summary.accordion__summary>h2.accordion__title{Description}^div.accordion__content>Text{Samsung's 55 inch QLED TV gives you over a billion shades of colour.}+Text{Smart features let you stream your favourite shows.})+(details.accordion__item#specifications>summary.accordion__summary>h2.accordion__title{Specifications}^div.accordion__content>SpecList)+(details.accordion__item#reviews>summary.accordion__summary>h2.accordion__title{Reviews (212)}^div.accordion__content>RatingSummary+ul.product-info__reviews>(li>Review)*3^Pagination[variant=compact])+(details.accordion__item#delivery>summary.accordion__summary>h2.accordion__title{Delivery & returns}^div.accordion__content>Text{Free delivery on orders over £50.}+Link[href=/help/returns]{Read our returns policy})
```

## Examples

- **Product page**: under the gallery and buy box, full width.
- **"212 reviews" link in the buy box**: goes to `#reviews`. With JavaScript it opens that item.

## Notes

- This pattern uses [accordion.md](../components/accordion.md) with `headingLevel=2`, written out because the sections hold different components.
- Uses [text.md](../components/text.md), [spec-list.md](../components/spec-list.md), [rating-summary.md](../components/rating-summary.md), [review.md](../components/review.md), [pagination.md](../components/pagination.md) and [link.md](../components/link.md).
