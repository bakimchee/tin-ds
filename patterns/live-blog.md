# Live Blog

A running story: the latest updates first, each with the time it was posted. Used for elections, emergencies, matches and anything still happening.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Prefix for the heading id, `{id}-title`. Required. |
| title | string | `Live updates` | Block heading. |
| posts | `{ id, datetime, timeLabel, title, children, byline, isPinned }[]` | — | Updates, newest first. Required. |
| summary | `Callout` | — | Key points, pinned above the posts. |
| updatedDatetime | string | — | When the last post landed, in ISO 8601. |
| updatedLabel | string | — | Visible text, such as "Updated 4 minutes ago". |
| isEnded | boolean | `false` | Coverage has finished. Swaps the live badge for "Coverage ended". |
| newPostCount | number | — | Posts added since the page loaded. Shows the "New posts" button. |
| olderHref | string | — | Page of earlier posts. |

## Variations

### Default

```emmet
section.live-blog[aria-labelledby=live-title]>div.live-blog__status>Badge[status=danger]{Live}+Heading#live-title[level=2 size=lg]{Live updates}+Timestamp[datetime=2026-09-22T09:15:00Z isLive]{Updated 4 minutes ago}^Callout[variant=summary]+Button[variant=secondary size=sm iconStart=chevron-up]{3 new posts}+ol.live-blog__posts>(li.live-blog__post#post-0915>div.live-blog__meta>Timestamp[datetime=2026-09-22T09:15:00Z]{09:15}+Byline^Heading[level=3 size=sm]{Barrier breached at Kirkstall}+Text{Water is now flowing into the retail park, our correspondent reports.}+ShareBar)+(li.live-blog__post#post-0852>div.live-blog__meta>Timestamp[datetime=2026-09-22T08:52:00Z]{08:52}^Heading[level=3 size=sm]{Rest centres open in two schools}+Text{The council says 400 people have arrived overnight.})^Link[href="/news/live/c9rl2m3v8xyt?page=2" variant=standalone iconEnd=chevron-right]{Earlier updates}
```

### Pinned post

```emmet
section.live-blog[aria-labelledby=live-title]>div.live-blog__status>Badge[status=danger]{Live}+Heading#live-title[level=2 size=lg]{Live updates}^ol.live-blog__posts>(li.live-blog__post[data-pinned]#post-0800>div.live-blog__meta>Badge[status=info]{Pinned}+Timestamp[datetime=2026-09-22T08:00:00Z]{08:00}^Heading[level=3 size=sm]{What we know so far}+Text{The river peaked at 5.2m overnight, the highest since records began.})+(li.live-blog__post#post-0915>div.live-blog__meta>Timestamp[datetime=2026-09-22T09:15:00Z]{09:15}^Heading[level=3 size=sm]{Barrier breached at Kirkstall}+Text{Water is now flowing into the retail park.})
```

### Coverage ended

```emmet
section.live-blog[data-ended aria-labelledby=live-title]>div.live-blog__status>Badge{Coverage ended}+Heading#live-title[level=2 size=lg]{Live updates}+Timestamp[datetime=2026-09-22T18:00:00Z format=absolute]{Ended 22 September 2026, 18:00}^Alert[status=info]{This live page has closed. Read our full report.}
```

## Examples

- **Emergency**: key points pinned at the top, posts every few minutes.
- **Election night**: results as they come in, with a [table.md](../components/table.md) in a post.
- **After the event**: `isEnded`, with a link to the written-up story.

## Notes

- Posts are an `ol`, newest first, and each one has an id so it can be linked to on its own.
- New posts arrive behind a button, not automatically. Content that moves under the reader is unusable, especially with a screen reader.
- The "Updated" timestamp is `isLive`, so it is announced politely when it changes.
- Each post's heading is an `h3` under the block's `h2`, so the page outline stays in order.
- Without JavaScript the page still works: the button is a link back to the page, which reloads with the new posts.
- Uses [heading.md](../components/heading.md), [text.md](../components/text.md), [timestamp.md](../components/timestamp.md), [byline.md](../components/byline.md), [badge.md](../components/badge.md), [button.md](../components/button.md), [link.md](../components/link.md), [callout.md](../components/callout.md), [alert.md](../components/alert.md) and [share-bar.md](../components/share-bar.md).
