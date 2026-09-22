# Article

A news story: header, the story itself, then what to read next. The reading column stays narrow whatever the screen size.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| header | `ArticleHeader` | — | Headline, standfirst, byline and lead picture. Required. |
| body | `ArticleBody` | — | The story. Required. |
| related | `RelatedStories` | — | More on this story, and related topics. |
| comments | `CommentThread` | — | Reader comments, when they are open. |
| mostRead | `MostRead` | — | Sidebar block. |
| newsletter | `NewsletterSignup` | — | Inline signup part way down the story. |
| breadcrumb | `Breadcrumb` | — | Section path above the headline. |

## Variations

### Default

```emmet
Masthead+main#main.page[data-page=article]>Breadcrumb+Grid>(GridItem[spanLg=8]>ArticleHeader+ArticleBody+RelatedStories+CommentThread)+(GridItem[spanLg=4]>AdSlot[isSticky]+MostRead)^^SiteFooter
```

### Full width lead picture

```emmet
Masthead+main#main.page[data-page=article]>ArticleHeader+Grid>(GridItem[spanLg=8]>ArticleBody+NewsletterSignup[variant=inline]+RelatedStories)+(GridItem[spanLg=4]>MostRead)^^SiteFooter
```

### Video story

```emmet
Masthead+main#main.page[data-page=article]>Breadcrumb+Grid>(GridItem[spanLg=8]>ArticleHeader+Figure[width=wide]>MediaPlayer^^ArticleBody+RelatedStories)+(GridItem[spanLg=4]>MostRead)^^SiteFooter
```

## Examples

- **News story**: header, four to ten paragraphs, a picture, related stories.
- **Long read**: no sidebar, a wider lead picture and a stacked share bar in the margin.
- **Video story**: the player under the header, with a transcript link.

## Notes

- One `h1` per page, in the article header. Subheadings in the body are `h2`, and blocks such as "Comments" are `h2` as well.
- The story sits in `spanLg=8` so the text column stays readable. The sidebar is `spanLg=4` and drops below the story on a phone.
- Adverts and most read come after the story in the markup, so a screen reader user reaches the story first.
- Uses [page.md](page.md), [masthead.md](masthead.md), [article-header.md](article-header.md), [article-body.md](article-body.md), [related-stories.md](related-stories.md), [comment-thread.md](comment-thread.md), [most-read.md](most-read.md), [newsletter-signup.md](newsletter-signup.md), [figure.md](../components/figure.md), [media-player.md](../components/media-player.md), [ad-slot.md](../components/ad-slot.md), [breadcrumb.md](../components/breadcrumb.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md) and [site-footer.md](site-footer.md).
