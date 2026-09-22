# Callout

A boxed aside inside a story: a summary of the main points, background on a subject, or analysis from a correspondent. It sits in the flow of the article but reads as separate from it.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | — | Heading, such as "At a glance" or "Analysis". |
| headingLevel | `2`–`4` | `2` | Title heading level. |
| variant | `default` \| `summary` \| `analysis` | `default` | `summary` is the key points box. `analysis` credits a correspondent. |
| author | `{ name, role, href, imageSrc }` | — | Shown as a [byline.md](byline.md) when `variant=analysis`. |
| children | node | — | The content: `Text`, a list, or `Link`s. |

## Variations

### Key points

```emmet
aside.callout[data-variant=summary aria-labelledby=at-a-glance]>Heading#at-a-glance[level=2 size=sm]{At a glance}+ul.callout__list>li{More than 400 homes have been evacuated}+li{Three flood barriers were overtopped overnight}+li{The river is expected to peak on Tuesday}
```

### Analysis

```emmet
aside.callout[data-variant=analysis aria-labelledby=analysis-title]>Heading#analysis-title[level=2 size=sm]{Analysis}+Byline[hasAvatar]+Text{The defences were built for a one-in-a-hundred-year flood. This is the third in a decade.}
```

### Background

```emmet
aside.callout[aria-labelledby=background-title]>Heading#background-title[level=2 size=sm]{How the defences work}+Text{The barriers hold back the tide for six hours either side of high water.}+Link[href=/news/explainers/flood-defences variant=standalone]{Read our explainer}
```

## Examples

- **At a glance**: three to five points at the top of a long story.
- **Analysis**: a correspondent's take, part way through.
- **More on this story**: a short list of links, as the default variant.

## Notes

- The box needs a heading, and `aria-labelledby` points at it, so it is announced as a named region.
- Keep key points to one line each. They are a summary, not a second article.
- Uses [heading.md](heading.md), [text.md](text.md), [byline.md](byline.md) and [link.md](link.md).
- Tokens: `--color-surface-subtle`, `--card-radius`, `--color-brand-primary` for the `analysis` rule.
