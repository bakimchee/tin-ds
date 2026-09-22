# Story List

A titled block of stories on a front or section page, such as "Top stories" or "Sport". It lays [story-card.md](story-card.md) items out with [grid.md](../components/grid.md) and can lead with one big story.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Prefix for the heading id, `{id}-title`, which names the section. Required. |
| title | string | — | Block heading, such as "Top stories". Required. |
| headingLevel | `2` \| `3` | `2` | Title heading level. |
| stories | `StoryCard[]` | — | The stories, most important first. Required. |
| layout | `grid` \| `list` \| `lead` | `grid` | `grid` is equal cards, `list` is one column of horizontal cards, `lead` gives the first story the top spot. |
| columns | `2` \| `3` \| `4` | `4` | Cards per row at the widest size. Responsive below that. |
| moreHref | string | — | Adds a "More" link beside the title. |
| moreLabel | string | — | Its text, such as "More UK stories". |
| isTitleHidden | boolean | `false` | Hides the title, for the first block on a front page. |

## Variations

### Grid

```emmet
section.story-list[aria-labelledby=top-stories-title]>div.story-list__header>Heading#top-stories-title[level=2 size=lg]{Top stories}+Link[href=/news/uk variant=standalone iconEnd=chevron-right]{More UK stories}^Grid[as=ul columns=1 columnsSm=2 columnsLg=4]>(GridItem[as=li]>StoryCard)*8
```

### Lead and rest

```emmet
section.story-list[data-layout=lead aria-labelledby=latest-title]>div.story-list__header>Heading#latest-title[level=2 size=lg]{Latest news}^Grid[as=ul columns=1 columnsLg=12]>(GridItem[as=li spanLg=8]>StoryCard[size=lg])+(GridItem[as=li spanLg=4]>StoryCard[layout=horizontal])*3
```

### List

```emmet
section.story-list[data-layout=list aria-labelledby=politics-title]>div.story-list__header>Heading#politics-title[level=2 size=lg]{Politics}^Grid[as=ul columns=1 gap=sm]>(GridItem[as=li]>StoryCard[layout=horizontal])*6
```

## Examples

- **Front page**: a `lead` block of top stories, then `grid` blocks per section.
- **Section page**: one `list` block under the topic header.
- **Search results**: a `list` block with [pagination.md](../components/pagination.md) under it.

## Notes

- Each block is a named region: the heading has an id and the section points at it with `aria-labelledby`. That is how readers skip between blocks.
- The whole block is one `ul`, so a screen reader announces how many stories are in it.
- Keep one `lead` block per page. Two competing lead stories read as neither being the lead.
- Uses [story-card.md](story-card.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md), [heading.md](../components/heading.md) and [link.md](../components/link.md).
