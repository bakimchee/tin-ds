# Ad Slot

Space for an advert, labelled so readers can tell it apart from the news. The space is reserved before the advert loads, so the page doesn't jump.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | `mpu` \| `leaderboard` \| `mobile` | `mpu` | 300×250, 728×90 or 320×50. The slot keeps that ratio. |
| label | string | `Advertisement` | The wording above the slot. |
| isSticky | boolean | `false` | Sticks in the sidebar while the article scrolls. |

## Variations

### Default

```emmet
aside.ad-slot[aria-label=Advertisement]>span.ad-slot__label[aria-hidden=true]{Advertisement}+div.ad-slot__frame
```

### Leaderboard

```emmet
aside.ad-slot[data-size=leaderboard aria-label=Advertisement]>span.ad-slot__label[aria-hidden=true]{Advertisement}+div.ad-slot__frame
```

### Sticky sidebar

```emmet
aside.ad-slot[data-sticky aria-label=Advertisement]>span.ad-slot__label[aria-hidden=true]{Advertisement}+div.ad-slot__frame
```

## Examples

- **Front page**: a `leaderboard` under the masthead, an `mpu` between story blocks.
- **Article**: an `mpu` in the sidebar, `isSticky`.
- **Mobile**: `mobile` between blocks, never more than one per screen.

## Notes

- The label must be visible. "Advertisement" in full, not "Ad" or "Sponsored", which means something else.
- Reserve the space with the slot's ratio, so the story doesn't move when the advert arrives.
- Keep adverts out of the article body flow on a live story, where content updates.
- Tokens: `--color-surface-subtle`, `--color-text-muted`, `--font-size-100`.
