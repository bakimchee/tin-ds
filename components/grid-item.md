# Grid Item

One cell of a [grid.md](grid.md). At each breakpoint it sets how many columns it covers, which column it starts in, its order and whether it shows.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| as | `div` \| `li` \| `section` \| `aside` | `div` | HTML element. Use `li` inside `Grid[as=ul]`. |
| span | `1`–`12` | Full row, or `1` when the grid sets `columns` | Columns covered. Responsive. |
| start | `1`–`12` \| `auto` | `auto` | Column the item starts in, for offsets. `auto` removes an offset set at a smaller breakpoint. Responsive. |
| order | `1`–`12` \| `first` \| `last` \| `none` | `none` | Visual position among its siblings. Responsive. |
| hideBelow | `sm` \| `md` \| `lg` \| `xl` \| `2xl` | — | Hidden on anything narrower than this breakpoint. |
| hideFrom | `sm` \| `md` \| `lg` \| `xl` \| `2xl` | — | Hidden from this breakpoint up. |
| children | node | — | Content. |

## Variations

### Responsive span

```emmet
div.grid__item[data-span=12 data-span-md=6 data-span-lg=4]
```

### Offset

```emmet
div.grid__item[data-span=12 data-span-md=8 data-start-md=3 data-span-lg=6 data-start-lg=4]
```

### Reordered

```emmet
div.grid__item[data-span=12 data-span-lg=5 data-order=first data-order-lg=none]
```

### Desktop only

```emmet
aside.grid__item[data-span-lg=3 data-hide-below=lg]
```

### Mobile only

```emmet
div.grid__item[data-hide-from=lg]
```

### List item

```emmet
li.grid__item
```

## Examples

- **Filter sidebar**: `as=aside spanLg=3 hideBelow=lg`. The drawer takes over below `lg`.
- **Centred form**, such as sign in: `spanMd=8 startMd=3 spanLg=6 startLg=4`.
- **Promo tile in a product grid**: `span=2`, covering two product slots.
- **Order summary**: `spanLg=4`. It comes after the items in the HTML, so it drops below them on mobile.

## Notes

- `order` only moves items visually. Keyboard and screen reader order still follow the HTML, so write the HTML in a sensible order and use `order` sparingly.
- `hideBelow` and `hideFrom` use `display: none`, which hides the content from everyone. Only hide content that is available another way at that size.
- Use both to show an item in a range: `hideBelow=sm hideFrom=lg` shows it from `sm` up to `lg`.
- Breakpoints follow the parent grid's `query`.
