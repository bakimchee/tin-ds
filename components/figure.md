# Figure

A picture, video or chart with a caption and a credit. Used for the main image of a story and for anything placed inside the article body.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| caption | string | — | What the reader is looking at. |
| credit | string | — | Who owns it, such as "Getty Images". |
| width | `inline` \| `wide` \| `full` | `inline` | `inline` matches the text column, `wide` reaches past it, `full` runs edge to edge. |
| isHero | boolean | `false` | The lead picture at the top of a story. |
| children | node | — | One [image.md](image.md), [media-player.md](media-player.md) or [table.md](table.md). |

## Variations

### Picture with caption

```emmet
figure.figure>Image[src=/img/news/flood-2026.jpg alt="Flooded high street with cars in deep water" ratio=wide fit=cover]+figcaption.figure__caption>span.figure__text{Shops on the high street were under a metre of water}+span.figure__credit{Getty Images}
```

### Hero picture

```emmet
figure.figure[data-width=full]>Image[src=/img/news/flood-2026.jpg alt="Flooded high street with cars in deep water" ratio=wide fit=cover isEager]+figcaption.figure__caption>span.figure__text{Shops on the high street were under a metre of water}+span.figure__credit{Getty Images}
```

### Video

```emmet
figure.figure[data-width=wide]>MediaPlayer[src=/video/flood-report.mp4 title="Flood defences overwhelmed" posterSrc=/img/news/flood-poster.jpg duration="2:14"]+figcaption.figure__caption>span.figure__text{Our correspondent reports from the high street}
```

### Credit only

```emmet
figure.figure>Image[src=/img/news/minister.jpg alt="The minister speaking at a lectern" ratio=landscape fit=cover]+figcaption.figure__caption>span.figure__credit{PA Media}
```

## Examples

- **Lead picture**: `full` under the headline, with `isHero` so it loads first.
- **In the article body**: `inline`, between paragraphs.
- **Chart**: a [table.md](table.md) or image of a chart, with the source as the credit.

## Notes

- `alt` describes what is in the picture. The caption adds what the picture doesn't show, so don't repeat it.
- A picture with no caption and no credit doesn't need a figure. Use [image.md](image.md) on its own.
- Uses [image.md](image.md), [media-player.md](media-player.md) and [table.md](table.md).
- Tokens: `--color-text-muted`, `--font-size-200`, `--space-2`.
