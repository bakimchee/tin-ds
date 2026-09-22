# Article Header

The top of a story: section, headline, standfirst, who wrote it, when it was published and the share links, followed by the lead picture.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| headline | string | — | The headline, the page `h1`. Required. |
| standfirst | string | — | One or two sentences under the headline, saying what the story is. |
| kicker | string | — | Section or topic above the headline. |
| kickerHref | string | — | Section page. |
| byline | `Byline` | — | Who wrote it. |
| datetime | string | — | When it was published, in ISO 8601. Required. |
| timeLabel | string | — | Visible date, such as "22 September 2026". |
| updatedDatetime | string | — | When it was last changed. |
| updatedLabel | string | — | Visible update text, such as "Updated 18 minutes ago". |
| readingTime | string | — | Such as "4 min read". |
| share | `ShareBar` | — | Share links. |
| hero | `Figure` | — | The lead picture or video. |
| isLive | boolean | `false` | Marks a live story with a [badge.md](../components/badge.md). |

## Variations

### Default

```emmet
header.article-header>span.article-header__kicker>Link[href=/news/england variant=subtle]{England}^Heading[level=1 size=xl]{Flood defences overwhelmed as river hits record level}+Text[size=lg]{Hundreds of homes were evacuated overnight as the river passed its 1947 peak}+div.article-header__meta>Byline[hasAvatar]+Timestamp[datetime=2026-09-22T06:30:00Z format=absolute]{Published 22 September 2026}+Timestamp[datetime=2026-09-22T09:15:00Z]{Updated 18 minutes ago}^ShareBar+Figure[isHero]
```

### Live story

```emmet
header.article-header[data-live]>div.article-header__flags>Badge[status=danger]{Live}+span.article-header__kicker>Link[href=/news/politics variant=subtle]{Politics}^Heading[level=1 size=xl]{MPs debate emergency flood funding}+div.article-header__meta>Timestamp[datetime=2026-09-22T09:15:00Z isLive]{Updated 4 minutes ago}^ShareBar
```

### Long read

```emmet
header.article-header>Heading[level=1 size=xl]{The town that moved uphill}+Text[size=lg]{Thirty years ago the river took their homes. Then they rebuilt somewhere else entirely.}+div.article-header__meta>Byline[hasAvatar]+Timestamp[datetime=2026-09-20T05:00:00Z format=absolute]{Published 20 September 2026}+span.article-header__reading-time{12 min read}^ShareBar+Figure[isHero]
```

## Examples

- **News story**: kicker, headline, standfirst, byline, published and updated times.
- **Live page**: live badge, headline, and the time of the last post.
- **Feature**: reading time, and a full-width lead picture.

## Notes

- One `h1` per page, and it is the headline. The kicker is a link above it, not part of it.
- Show "Updated" only when the story really changed after publication.
- The standfirst is not the first paragraph repeated. It says why the story matters.
- Uses [heading.md](../components/heading.md), [text.md](../components/text.md), [link.md](../components/link.md), [byline.md](../components/byline.md), [timestamp.md](../components/timestamp.md), [badge.md](../components/badge.md), [share-bar.md](../components/share-bar.md) and [figure.md](../components/figure.md).
