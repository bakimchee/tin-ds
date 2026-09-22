# Article Body

The story itself: paragraphs, subheadings, pictures, quotes, lists and boxes, in one readable column. Everything an editor can put in a story is defined here.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children | node | — | The story content, in order. Required. |
| width | `text` \| `wide` | `text` | `text` holds the reading column. `wide` lets a picture or table reach past it. |
| hasDropCap | boolean | `false` | Large first letter, for features. |

## Variations

### Default

```emmet
div.article-body>Text{The river passed its 1947 peak just after midnight, overtopping barriers that were finished only last year.}+Text{More than 400 homes were evacuated, and rest centres opened in two schools.}+Figure+Heading[level=2 size=md]{What went wrong}+Text{The defences were designed for a one-in-a-hundred-year flood.}+Quote+Text{The Environment Agency said it would review the design standard.}+Callout[variant=summary]+ul.article-body__list>li{Three barriers were overtopped}+li{Two rest centres opened overnight}+li{Rail services are suspended until Wednesday}
```

### With a video and a table

```emmet
div.article-body>Text{Rainfall over the weekend was the heaviest since records began in 1878.}+Figure[width=wide]>MediaPlayer^^Heading[level=2 size=md]{Rainfall by month}+Figure[width=wide]>Table
```

### Feature

```emmet
div.article-body[data-drop-cap]>Text{The first thing they moved was the war memorial.}+Text{Everything else, the council decided, could follow in the spring.}+Figure[width=full]
```

## Examples

- **News story**: paragraphs, one or two subheadings, a picture and a quote.
- **Explainer**: a key points [callout.md](../components/callout.md) first, then subheadings for each question.
- **Data story**: [table.md](../components/table.md) and charts inside wide figures.

## Notes

- The reading column is about 60 to 75 characters wide. Pictures and tables can be wider; text never is.
- Subheadings are `h2`, in the order they appear. They are how a screen reader user skims a long story.
- Links inside the text are the default [link.md](../components/link.md), underlined, so they are visible in the middle of a sentence.
- Anything embedded from elsewhere sits in a [figure.md](../components/figure.md), so it gets a caption and a reserved space.
- Uses [text.md](../components/text.md), [heading.md](../components/heading.md), [link.md](../components/link.md), [figure.md](../components/figure.md), [quote.md](../components/quote.md), [callout.md](../components/callout.md), [media-player.md](../components/media-player.md) and [table.md](../components/table.md).
