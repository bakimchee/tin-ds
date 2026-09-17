# Review

A single customer review: star rating, title, author, date, text and verified-purchase status.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| rating | number | — | Star rating from 1 to 5. Required. |
| title | string | — | Review headline. |
| author | string | — | Display name. Required. |
| date | string | — | ISO date, shown as "12 March 2026". Required. |
| children | string | — | Review text. Required. |
| isVerified | boolean | `false` | Shows the "Verified purchase" badge. |
| helpfulCount | number | — | "12 people found this helpful". |
| headingLevel | `3`–`5` | `3` | Title heading level. |

## Variations

### Default

```emmet
article.review>Rating[value=5]+h3.review__title{Brilliant picture quality}+p.review__meta>span.review__author{Sam}+time[datetime=2026-03-12]{12 March 2026}^Badge[status=success]{Verified purchase}+Text{Easy to set up and the picture is sharp. Sound is fine for a small room.}+Text[size=sm isMuted]{12 people found this helpful}
```

## Examples

- **Product page**: a list of reviews under [rating-summary.md](rating-summary.md), with [pagination.md](pagination.md) `compact`.

## Notes

- A list of reviews is `ul>li*n>Review`.
- Uses [rating.md](rating.md), [badge.md](badge.md) and [text.md](text.md).
