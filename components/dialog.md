# Dialog

A panel over the page that holds focus until it is closed. `modal` sits in the centre for confirmations. `drawer` slides in from the side for navigation and filters. Built on native `dialog`, and opened by a [button.md](button.md) with `command=show-modal`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Opening buttons target this with `commandFor`. Required. |
| title | string | — | Heading, also used as the accessible name. Required. |
| variant | `modal` \| `drawer` | `modal` | Position and animation. |
| side | `start` \| `end` | `start` | Drawer edge. |
| size | `sm` \| `md` \| `lg` | `md` | Maximum width. |
| isOpen | boolean | `false` | Renders `open`. Only for dialogs that load already open. |
| footer | node | — | Actions pinned to the bottom, such as "Show 128 results". |
| children | node | — | Content. |
| onClose | function | — | Called when closed. |

## Variations

### Modal

```emmet
dialog.dialog#added-to-trolley[aria-labelledby=added-to-trolley-title]>div.dialog__header>h2.dialog__title#added-to-trolley-title{Added to trolley}+Button[variant=tertiary isIconOnly iconStart=close label=Close command=close commandFor=added-to-trolley]^div.dialog__content>Text{Content}^div.dialog__footer>Button[variant=secondary command=close commandFor=added-to-trolley]{Continue shopping}+Button[href=/basket variant=primary]{Go to trolley}
```

### Drawer

```emmet
dialog.dialog#filters[data-variant=drawer data-side=start aria-labelledby=filters-title]>div.dialog__header>h2.dialog__title#filters-title{Filter}+Button[variant=tertiary isIconOnly iconStart=close label=Close command=close commandFor=filters]^div.dialog__content>Text{Content}^div.dialog__footer>Button[variant=primary isFullWidth command=close commandFor=filters]{Show 128 results}
```

### Trigger

```emmet
Button[variant=secondary iconStart=filter command=show-modal commandFor=filters]{Filter}
```

## Examples

- **Mobile menu**: `drawer side=start` holding [main-nav.md](../patterns/main-nav.md).
- **Mobile filters**: `drawer side=start` holding [filter-panel.md](../patterns/filter-panel.md).
- **Added to trolley**: `modal`.
- **Energy label**: `modal size=lg` showing the label image.

## Notes

- `command=show-modal` and `command=close` are native invoker commands. No script is needed.
- Escape and the close button both close it. Focus goes back to the button that opened it.
- The page behind is inert and dimmed with `--color-surface-overlay`.
- Tokens: `--dialog-shadow`, `--color-surface-default`.
