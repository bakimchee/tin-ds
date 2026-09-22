# Related Stories

Links to more of the same story or subject, under an article or beside it. "More on this story" carries the story forward; "Related topics" sends the reader to a subject.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Prefix for the heading id, `{id}-title`. Required. |
| title | string | `More on this story` | Block heading. |
| headingLevel | `2` \| `3` | `2` | Title heading level. |
| stories | `StoryCard[]` | — | Related stories. Required. |
| layout | `list` \| `grid` | `list` | `list` is text cards in one column, `grid` shows pictures. |
| topics | `{ label, href }[]` | — | Topic [chip.md](../components/chip.md) links under the stories. |

## Variations

### More on this story

```emmet
section.related-stories[aria-labelledby=more-title]>Heading#more-title[level=2 size=md]{More on this story}+Grid[as=ul columns=1 gap=sm]>(GridItem[as=li]>StoryCard[layout=text])*4
```

### With pictures

```emmet
section.related-stories[data-layout=grid aria-labelledby=related-title]>Heading#related-title[level=2 size=md]{Related stories}+Grid[as=ul columns=1 columnsSm=2 columnsLg=4]>(GridItem[as=li]>StoryCard)*4
```

### Related topics

```emmet
section.related-stories[aria-labelledby=topics-title]>Heading#topics-title[level=2 size=md]{Related topics}+ul.related-stories__topics>(li>Chip[href=/news/topics/flooding]{Flooding})+(li>Chip[href=/news/topics/environment-agency]{Environment Agency})+(li>Chip[href=/news/england/leeds]{Leeds})
```

## Examples

- **Under an article**: "More on this story" as a text list, then "Related topics".
- **Sidebar**: "Related stories" with pictures, on a wide screen.

## Notes

- Four stories is plenty. A longer list is a section page, and it belongs behind a link.
- Topic chips are links, not filters, so they use `href` and never `aria-pressed`.
- Uses [story-card.md](story-card.md), [heading.md](../components/heading.md), [chip.md](../components/chip.md), [grid.md](../components/grid.md) and [grid-item.md](../components/grid-item.md).
