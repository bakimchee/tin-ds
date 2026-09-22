# Quote

Someone's words, set apart from the story. `pull` lifts a line out of the article to catch the eye. `block` is a longer quotation that stands on its own, such as a statement.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `pull` \| `block` | `pull` | `pull` is large display text. `block` is a quotation with a marker down the side. |
| citeName | string | — | Who said it. |
| citeRole | string | — | Their job or title, such as "Prime Minister". |
| cite | string | — | URL of the source, for the native `cite` attribute. |
| children | string | — | The words, without quote marks typed in. |

## Variations

### Pull quote

```emmet
blockquote.quote>p{We have never seen water rise this quickly}+footer.quote__cite>span.quote__name{Dani Okafor}+span.quote__role{Environment Agency}
```

### Block quote

```emmet
blockquote.quote[data-variant=block]>p{The government will fund every household affected, and we will review the defences along this stretch of river before the winter.}+footer.quote__cite>span.quote__name{Rachel Adeyemi}+span.quote__role{Environment Secretary}
```

### Without attribution

```emmet
blockquote.quote>p{The water came through the door in seconds}
```

## Examples

- **Pull quote**: one striking line, repeated from the article body.
- **Statement**: a full response from a company or department, as `block`.
- **Interview**: `block` for each long answer.

## Notes

- Quote marks are added with styling, not typed into the text.
- A pull quote repeats words already in the story, so screen reader users hear them twice. Keep them short.
- Tokens: `--font-size-500`, `--font-heading-weight`, `--color-brand-primary` for the marker.
