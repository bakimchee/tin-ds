# Share Bar

Links for sharing a story: the main networks, email, and a copy-link button. Each one is a real link, so it works without JavaScript.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| url | string | — | The page being shared. Required. |
| title | string | — | The headline, passed to the network. Required. |
| networks | (`facebook` \| `x` \| `whatsapp` \| `email`)[] | — | Which networks to show, in order. Required. |
| hasCopyLink | boolean | `true` | Shows the copy-link button. |
| label | string | `Share this story` | Group name, read by screen readers. |
| layout | `inline` \| `stacked` | `inline` | `stacked` is the column beside a long article. |

## Variations

### Default

```emmet
div.share-bar[role=group aria-label="Share this story"]>span.share-bar__label[aria-hidden=true]{Share}+Link[href="https://www.facebook.com/sharer/sharer.php?u=https://example.com/news/flood" variant=subtle iconStart=facebook isExternal]>span[data-visually-hidden]{Share on Facebook}^Link[href="https://x.com/intent/post?url=https://example.com/news/flood" variant=subtle iconStart=x isExternal]>span[data-visually-hidden]{Share on X}^Link[href="mailto:?subject=Flood%20defences%20overwhelmed" variant=subtle iconStart=mail]>span[data-visually-hidden]{Share by email}^Button[variant=tertiary size=sm iconStart=link label="Copy link to this story"]{Copy link}
```

### Stacked

```emmet
div.share-bar[data-layout=stacked role=group aria-label="Share this story"]>Link[href="https://www.facebook.com/sharer/sharer.php?u=https://example.com/news/flood" variant=subtle iconStart=facebook isExternal]>span[data-visually-hidden]{Share on Facebook}^Link[href="https://api.whatsapp.com/send?text=https://example.com/news/flood" variant=subtle iconStart=whatsapp isExternal]>span[data-visually-hidden]{Share on WhatsApp}
```

## Examples

- **Article header**: `inline`, under the byline.
- **Long read**: `stacked`, in the margin beside the text.
- **Live post**: a copy-link button on its own, for linking to that post.

## Notes

- Every icon needs a name: the text inside each link is visually hidden, not an `aria-label`, so it is translated with the page.
- Copy link needs JavaScript. Without it, show the URL in a read-only [input.md](input.md) instead.
- Share links open in a new tab with `isExternal`.
- Uses [link.md](link.md), [button.md](button.md) and [icon.md](icon.md).
- Tokens: `--color-text-muted`, `--radius-round`.
