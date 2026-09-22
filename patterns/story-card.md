# Story Card

A story in a list or a grid: picture, section, headline, a line of summary and when it was published. The headline is the link. It is the news equivalent of [product-card.md](product-card.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| href | string | — | The story page. Required. |
| headline | string | — | The headline. Required. |
| headingLevel | `2`–`4` | `3` | Headline heading level. |
| imageSrc | string | — | Picture. Leave it out for a text-only card. |
| imageAlt | string | `""` | Empty when the headline already describes the picture. |
| summary | string | — | One line under the headline. Left out in dense lists. |
| kicker | string | — | Section or topic above the headline, such as "England". |
| kickerHref | string | — | Section page. |
| datetime | string | — | ISO date for the [timestamp.md](../components/timestamp.md). |
| timeLabel | string | — | Visible time, such as "3 hours ago". |
| mediaType | `video` \| `audio` \| `gallery` | — | Flags that the story is a clip or a picture set. |
| duration | string | — | Clip length, such as "2:14". |
| isLive | boolean | `false` | Shows a live [badge.md](../components/badge.md). |
| layout | `stacked` \| `horizontal` \| `text` | `stacked` | `stacked` puts the picture on top, `horizontal` beside, `text` has no picture. |
| size | `md` \| `lg` | `md` | `lg` is the lead story of a block. |
| byline | `Byline` | — | Named reporter, on a lead story. |

## Variations

### Stacked

```emmet
article.story-card>div.story-card__media>Image[src=/img/news/flood.jpg alt="" ratio=landscape fit=cover]^div.story-card__body>span.story-card__kicker>Link[href=/news/england variant=subtle]{England}^h3.story-card__title>a.story-card__link[href=/news/articles/c2x81ydlk4no]{Flood defences overwhelmed as river hits record level}^Text[size=sm isMuted]{Hundreds of homes were evacuated overnight}+Timestamp[datetime=2026-09-22T06:30:00Z]{3 hours ago}
```

### Lead story

```emmet
article.story-card[data-size=lg]>div.story-card__media>Image[src=/img/news/flood.jpg alt="" ratio=wide fit=cover isEager]^div.story-card__body>span.story-card__kicker>Link[href=/news/england variant=subtle]{England}^h2.story-card__title>a.story-card__link[href=/news/articles/c2x81ydlk4no]{Flood defences overwhelmed as river hits record level}^Text{Hundreds of homes were evacuated overnight as the river passed its 1947 peak}+Byline+Timestamp[datetime=2026-09-22T06:30:00Z]{3 hours ago}
```

### Live

```emmet
article.story-card[data-live]>div.story-card__media>Image[src=/img/news/commons.jpg alt="" ratio=landscape fit=cover]+Badge[status=danger]{Live}^div.story-card__body>h3.story-card__title>a.story-card__link[href=/news/live/c9rl2m3v8xyt]{MPs debate emergency flood funding}^Timestamp[datetime=2026-09-22T09:15:00Z isLive]{Updated 4 minutes ago}
```

### Video

```emmet
article.story-card[data-media-type=video]>div.story-card__media>Image[src=/img/news/flood-poster.jpg alt="" ratio=landscape fit=cover]+span.story-card__duration>Icon[name=play]+span{2:14}^div.story-card__body>h3.story-card__title>a.story-card__link[href=/news/videos/c4k9p2ldn8ro]{Watch: the moment the barrier gave way}
```

### Horizontal

```emmet
article.story-card[data-layout=horizontal]>div.story-card__media>Image[src=/img/news/minister.jpg alt="" ratio=square fit=cover]^div.story-card__body>h3.story-card__title>a.story-card__link[href=/news/articles/cq7v4x2mlz1o]{Minister promises review of flood defences}^Timestamp[datetime=2026-09-22T07:45:00Z]{2 hours ago}
```

### Text only

```emmet
article.story-card[data-layout=text]>div.story-card__body>h3.story-card__title>a.story-card__link[href=/news/articles/cp8w1n4dvk2o]{Rail services suspended across the north}^Timestamp[datetime=2026-09-22T05:10:00Z]{5 hours ago}
```

## Examples

- **Front page**: one `lg` lead with `md` cards around it, see [story-list.md](story-list.md).
- **Section page**: `horizontal` cards in one column.
- **Most watched**: `video` cards with durations.
- **Related stories**: `text` cards, see [related-stories.md](related-stories.md).

## Notes

- Only the headline is a link. Styling stretches its click area over the whole card, so screen readers hear one link, not three.
- The picture is decorative when the headline says the same thing, which is nearly always: keep `imageAlt` empty.
- Don't put a summary on every card. In a dense block the headlines do the work.
- A live card's timestamp is the last update, not the start.
- Uses [image.md](../components/image.md), [heading.md](../components/heading.md), [link.md](../components/link.md), [text.md](../components/text.md), [timestamp.md](../components/timestamp.md), [byline.md](../components/byline.md), [badge.md](../components/badge.md) and [icon.md](../components/icon.md).
- Tokens: `--card-radius`, `--color-border-default`, `--color-status-danger-background` for the live badge.
