# News Front

The news front page: the lead story, top stories, then a block per section, with most read down the side. It should tell someone what has happened today before they click anything.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| lead | `StoryList` | — | The top stories block, with the lead story first. Required. |
| sections | `StoryList[]` | — | A block per section, such as UK, World, Business, Sport. Required. |
| mostRead | `MostRead` | — | Most read, in the sidebar. |
| newsletter | `NewsletterSignup` | — | A newsletter block between sections. |
| liveStories | `StoryCard[]` | — | Live pages, flagged with `isLive`, usually inside the lead block. |
| hasAds | boolean | `true` | Shows the [ad-slot.md](../components/ad-slot.md) positions. |

## Variations

### Default

```emmet
Masthead+main#main.page[data-page=news-front]>Heading[level=1 isVisuallyHidden]{tin news}+AdSlot[size=leaderboard]+Grid>(GridItem[spanLg=8]>StoryList[layout=lead isTitleHidden])+(GridItem[spanLg=4]>MostRead+AdSlot)^StoryList[layout=grid]+AdSlot+StoryList[layout=grid]+NewsletterSignup+StoryList[layout=grid]^SiteFooter
```

### Without a sidebar

```emmet
Masthead+main#main.page[data-page=news-front]>Heading[level=1 isVisuallyHidden]{tin news}+StoryList[layout=lead isTitleHidden]+StoryList[layout=grid]+StoryList[layout=grid]+MostRead^SiteFooter
```

## Examples

- **BBC style**: one lead story, a grid of top stories, then blocks for UK, World, Business, Sport, each linking to its section.
- **Guardian style**: a large lead block with a picture, then section blocks in a denser grid.
- **Breaking news**: an [alert.md](../components/alert.md) above the lead block, linking to the live page.

## Notes

- The page `h1` is visually hidden, because the lead headline is the visible title and it belongs to its own story.
- Every block is a named region with its own heading, which is how a screen reader user moves down the page.
- Only the lead picture loads straight away. Everything below loads lazily.
- Live stories sit in the lead block with a live badge, not in a block of their own.
- Uses [page.md](page.md), [masthead.md](masthead.md), [story-list.md](story-list.md), [story-card.md](story-card.md), [most-read.md](most-read.md), [newsletter-signup.md](newsletter-signup.md), [ad-slot.md](../components/ad-slot.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md), [heading.md](../components/heading.md) and [site-footer.md](site-footer.md).
