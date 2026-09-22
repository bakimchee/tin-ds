# Live Story

A story that is still happening: the live feed of updates, with the background and the related coverage beside it.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| header | `ArticleHeader` | — | Headline with a live badge and the last update time. Required. |
| live | `LiveBlog` | — | The updates. Required. |
| summary | `Callout` | — | Key points, pinned at the top. |
| stream | `MediaPlayer` | — | Live video, above the updates. |
| related | `RelatedStories` | — | Background and earlier reporting. |
| mostRead | `MostRead` | — | Sidebar block. |

## Variations

### Default

```emmet
Masthead[variant=minimal]+main#main.page[data-page=live-story]>ArticleHeader[isLive]+Grid>(GridItem[spanLg=8]>LiveBlog)+(GridItem[as=aside spanLg=4]>Callout[variant=summary]+RelatedStories+MostRead)^^SiteFooter
```

### With a live stream

```emmet
Masthead[variant=minimal]+main#main.page[data-page=live-story]>ArticleHeader[isLive]+Figure[width=wide]>MediaPlayer[isLive]^^Grid>(GridItem[spanLg=8]>LiveBlog)+(GridItem[as=aside spanLg=4]>RelatedStories+MostRead)^^SiteFooter
```

### Coverage ended

```emmet
Masthead+main#main.page[data-page=live-story]>ArticleHeader+Alert[status=info]>Text{This live coverage has ended.}+Link[href=/news/articles/c2x81ydlk4no]{Read our full report}^^Grid>(GridItem[spanLg=8]>LiveBlog[isEnded])+(GridItem[as=aside spanLg=4]>RelatedStories)^^SiteFooter
```

## Examples

- **Emergency**: key points in the sidebar, updates every few minutes.
- **Election night**: a live stream at the top, results tables inside posts.
- **After the event**: `isEnded`, with the live feed kept as a record.

## Notes

- The masthead is `minimal`, so the updates stay in view on a phone.
- New posts wait behind a button. Nothing moves under the reader on its own.
- When coverage ends, keep the page and link to the written-up story. The URL has been shared.
- Uses [page.md](page.md), [masthead.md](masthead.md), [article-header.md](article-header.md), [live-blog.md](live-blog.md), [related-stories.md](related-stories.md), [most-read.md](most-read.md), [callout.md](../components/callout.md), [figure.md](../components/figure.md), [media-player.md](../components/media-player.md), [alert.md](../components/alert.md), [text.md](../components/text.md), [link.md](../components/link.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md) and [site-footer.md](site-footer.md).
