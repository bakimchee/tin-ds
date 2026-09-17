# Rating Summary

The overall review score for a product: the average, the total number of reviews and how many reviews gave each star rating.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | number | — | Average rating. Required. |
| count | number | — | Total reviews. Required. |
| breakdown | `{ stars, count }[]` | — | Number of reviews for 5 down to 1 stars. |
| recommendPercent | number | — | "92% would recommend". |
| writeReviewHref | string | — | Adds a "Write a review" button. |

## Variations

### Default

```emmet
div.rating-summary>p.rating-summary__value{4.6}+Rating[value=4.6 count=212]+Text[size=sm]{92% of customers would recommend this product}+ul.rating-summary__breakdown>(li.rating-summary__bar>span{5 stars}+meter[min=0 max=212 value=160]{160}+span{160})+(li.rating-summary__bar>span{4 stars}+meter[min=0 max=212 value=32]{32}+span{32})+(li.rating-summary__bar>span{3 stars}+meter[min=0 max=212 value=10]{10}+span{10})+(li.rating-summary__bar>span{2 stars}+meter[min=0 max=212 value=4]{4}+span{4})+(li.rating-summary__bar>span{1 star}+meter[min=0 max=212 value=6]{6}+span{6})^Button[href=/product/8812345/review variant=secondary]{Write a review}
```

## Examples

- **Product page reviews**: at the top of the Reviews section, above the [review.md](review.md) list.

## Notes

- Each bar can link to the reviews filtered by that star rating.
- Uses [rating.md](rating.md), [text.md](text.md) and [button.md](button.md).
