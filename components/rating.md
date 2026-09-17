# Rating

A star score out of five, with an optional number of reviews. It is read-only.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | number | — | Average score from 0 to 5, to one decimal place. Required. |
| count | number | — | Number of reviews. |
| href | string | — | Makes the count a link to the reviews. |
| size | `sm` \| `md` | `sm` | `md` on the product page. |
| hasValue | boolean | `false` | Shows the number, such as "4.6", before the stars. |

## Variations

### Stars and count

```emmet
div.rating>meter.rating__stars[min=0 max=5 value=4.6]{4.6 out of 5 stars}+span.rating__count{(212)}
```

### Linked to reviews

```emmet
div.rating[data-size=md data-has-value]>span.rating__value{4.6}+meter.rating__stars[min=0 max=5 value=4.6]{4.6 out of 5 stars}+a.rating__count[href=#reviews]{212 reviews}
```

## Examples

- **Product card**: stars and count.
- **Product buy box**: `size=md hasValue href=#reviews`.
- **Single review**: stars only, no `count`.

## Notes

- `meter` is announced as a value, and the text inside it is the fallback. Stars are drawn with styling.
- Hide the rating when `count` is 0.
- Tokens: `--color-rating-fill`, `--color-rating-empty`.
