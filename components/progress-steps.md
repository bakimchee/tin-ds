# Progress Steps

Shows the checkout stages and which one the shopper is on. Finished steps link back.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| steps | `{ label, href }[]` | — | Steps in order. Required. |
| current | number | `1` | Current step, starting at 1. |

## Variations

### Default

```emmet
nav.progress-steps[aria-label="Checkout progress"]>ol.progress-steps__list>(li.progress-steps__step[data-state=complete]>Link[href=/checkout/details variant=subtle]>Icon[name=check]+span{Your details})+(li.progress-steps__step[data-state=current aria-current=step]>span{Delivery})+(li.progress-steps__step[data-state=upcoming]>span{Payment})
```

## Examples

- **Checkout**: Your details › Delivery › Payment.

## Notes

- `data-state` is `complete`, `current` or `upcoming`, worked out from `current`.
- Uses [link.md](link.md) and [icon.md](icon.md).
