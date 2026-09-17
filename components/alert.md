# Alert

A message box that stands out from the page. Use it to confirm an action, warn about a problem or share important information.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| status | `info` \| `success` \| `warning` \| `danger` | `info` | Colour, icon and role. |
| title | string | — | Short bold summary. |
| children | string \| node | — | Message. May include `Link`. |
| isDismissible | boolean | `false` | Shows a close button. |
| isLive | boolean | `false` | Announces the message when it appears. Renders `role=status`, or `role=alert` for `danger`. |

## Variations

### Info

```emmet
div.alert[data-status=info]>Icon[name=info]+div.alert__body>p.alert__title{Order by 6pm for next day delivery}
```

### Success

```emmet
div.alert[data-status=success role=status]>Icon[name=check]+div.alert__body>p.alert__title{Added to trolley}+Text{Samsung QE55Q60D 55 inch QLED 4K Smart TV}
```

### Error summary

```emmet
div.alert[data-status=danger role=alert tabindex=-1]>Icon[name=warning]+div.alert__body>p.alert__title{There is a problem}+ul.alert__list>(li>Link[href=#postcode]{Enter a valid UK postcode})+(li>Link[href=#email]{Enter your email address})
```

### Dismissible

```emmet
div.alert[data-status=warning]>Icon[name=warning]+div.alert__body>Text{Some items in your trolley have changed price.}^Button[variant=tertiary isIconOnly iconStart=close label="Dismiss message"]
```

## Examples

- **Basket**: `warning` when stock or price changes.
- **Checkout**: `danger` error summary at the top of the form, with links to each field.
- **Added to trolley**: `success` inside [added-to-basket-dialog.md](../patterns/added-to-basket-dialog.md).
- **Product page**: `info` for "This item is only available for collection".

## Notes

- Move focus to an error summary when it appears. [form.md](../patterns/form.md) sets the rules for error summaries.
- Uses [icon.md](icon.md), [text.md](text.md), [link.md](link.md) and [button.md](button.md).
- Tokens: `--color-status-{status}-background`, `--color-status-{status}-text`.
