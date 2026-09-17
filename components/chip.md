# Chip

A small pill-shaped button. It either toggles a quick filter on and off or removes a filter that is already applied.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `toggle` \| `removable` | `toggle` | `toggle` renders `aria-pressed`. `removable` shows a close icon. |
| isSelected | boolean | `false` | Selected state for `toggle`. Renders `aria-pressed=true` on a button, or `aria-current=true` on a link. |
| href | string | — | Renders `a.chip`. Use this when the chip reloads the page with a new URL. |
| onRemove | function | — | Called when a `removable` chip is pressed. |
| children | string \| node | — | Label, optionally with an [icon.md](icon.md) before it. |

## Variations

### Toggle

```emmet
button.chip[type=button aria-pressed=false]{Next day delivery}
```

### Toggle selected

```emmet
button.chip[type=button aria-pressed=true]{Next day delivery}
```

### Toggle link

```emmet
a.chip[href="/tvs?view=grid" aria-current=true]>Icon[name=grid]+span{Grid}
```

### Removable

```emmet
a.chip[href=/tvs data-variant=removable aria-label="Remove filter: Samsung"]>span{Samsung}+Icon[name=close]
```

## Examples

- **Quick filters above the grid**: `toggle` "In stock", "On offer", "4 stars and up".
- **Applied filters**: `removable` for each active filter, with a "Clear all" button beside them.

## Notes

- The accessible name of a removable chip starts with "Remove filter:".
- Tokens: `--radius-round`, `--color-border-default`, `--color-surface-inverse` when selected.
