# News Section

A section or topic page: what the subject is, then its stories, newest first, with pages of older ones.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| header | `TopicHeader` | — | Section name and description. Required. |
| featured | `StoryList` | — | The section's lead stories. |
| stories | `StoryList` | — | The rest, newest first. Required. |
| page | number | `1` | Current page. |
| pageCount | number | — | Total pages. |
| mostRead | `MostRead` | — | Most read in this section. |
| subsections | `{ label, href }[]` | — | Links to narrower sections, such as Politics under UK. |

## Variations

### Default

```emmet
Masthead+main#main.page[data-page=news-section]>Breadcrumb+TopicHeader+nav[aria-label=Subsections]>ul.page__list>(li>Link[href=/news/politics variant=subtle]{Politics})+(li>Link[href=/news/england variant=subtle]{England})^^Grid>(GridItem[spanLg=8]>StoryList[layout=lead isTitleHidden]+StoryList[layout=list]+Pagination)+(GridItem[spanLg=4]>MostRead+AdSlot)^^SiteFooter
```

### Topic page

```emmet
Masthead+main#main.page[data-page=news-section]>TopicHeader+Grid>(GridItem[spanLg=8]>StoryList[layout=list]+Pagination)+(GridItem[spanLg=4]>MostRead)^^SiteFooter
```

## Examples

- **Section**: "Politics", with subsections and a lead story.
- **Topic**: "Flooding", following a subject across sections, with a follow button.
- **Search results**: the same layout, with the query in the heading instead of a topic header.

## Notes

- The section name is the page `h1`, in the topic header.
- Stories are in date order, newest first. Pagination keeps every page on its own URL, so search engines can index them.
- A topic page and a section page are the same template: a topic just has no subsections.
- Uses [page.md](page.md), [masthead.md](masthead.md), [topic-header.md](topic-header.md), [story-list.md](story-list.md), [most-read.md](most-read.md), [pagination.md](../components/pagination.md), [breadcrumb.md](../components/breadcrumb.md), [ad-slot.md](../components/ad-slot.md), [link.md](../components/link.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md) and [site-footer.md](site-footer.md).
