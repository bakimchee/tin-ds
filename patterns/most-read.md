# Most Read

A numbered list of the stories people are reading now. It sits in the sidebar of an article or at the foot of a front page.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Prefix for the heading id, `{id}-title`. Required. |
| title | string | `Most read` | Block heading. |
| stories | `{ headline, href }[]` | — | Up to ten stories, in order. Required. |
| headingLevel | `2` \| `3` | `2` | Title heading level. |
| isNumbered | boolean | `true` | Shows the position number. |

## Variations

### Default

```emmet
section.most-read[aria-labelledby=most-read-title]>Heading#most-read-title[level=2 size=md]{Most read}+ol.most-read__list>(li.most-read__item>Link[href=/news/articles/c2x81ydlk4no variant=subtle]{Flood defences overwhelmed as river hits record level})+(li.most-read__item>Link[href=/news/articles/cq7v4x2mlz1o variant=subtle]{Minister promises review of flood defences})+(li.most-read__item>Link[href=/news/articles/cp8w1n4dvk2o variant=subtle]{Rail services suspended across the north})
```

### Without numbers

```emmet
section.most-read[data-numbered=false aria-labelledby=most-watched-title]>Heading#most-watched-title[level=2 size=md]{Most watched}+ol.most-read__list>(li.most-read__item>Link[href=/news/videos/c4k9p2ldn8ro variant=subtle]{Watch: the moment the barrier gave way})+(li.most-read__item>Link[href=/news/videos/cn3r8w1qvp5o variant=subtle]{Inside the emergency control room})
```

## Examples

- **Article sidebar**: ten stories, numbered.
- **Front page foot**: five stories, beside "Most watched".

## Notes

- It is an `ol`, so the order means something. The numbers come from styling, not from typed text.
- Headlines only. No pictures, no summaries: this block is scanned, not read.
- The list changes often, so don't rely on it being the same on the next page view.
- Uses [heading.md](../components/heading.md) and [link.md](../components/link.md).
- Tokens: `--color-border-default` between items, `--font-heading-weight` for the numbers.
