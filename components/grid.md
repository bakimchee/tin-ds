# Grid

Lays out components in columns that change at each breakpoint. By default a grid has 12 columns, and each [grid-item.md](grid-item.md) says how many it covers. Set `columns` instead to fit a number of equal items on each row, such as products. Needs `tokens.css` and `grid.css`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| as | `div` \| `ul` \| `ol` | `div` | HTML element. Use `ul` for lists of products or cards, with `GridItem[as=li]`. |
| columns | `1`–`6` \| `12` | `12` | Items per row. Each item covers one column unless it sets `span`. When only a breakpoint version is set, such as `columnsMd`, smaller sizes get one item per row. Responsive. |
| gap | `none` \| `sm` \| `md` \| `lg` | `md` | Space between rows and columns. |
| query | `screen` \| `container` | `screen` | What the breakpoints measure. `container` measures the grid's parent element instead of the screen. |
| children | node | — | `GridItem` elements only. |

## Variations

### Twelve columns

```emmet
div.grid>GridItem[span=12 spanMd=6 spanLg=4]*3
```

### Items per row

```emmet
ul.grid[data-columns=2 data-columns-md=3 data-columns-xl=4]>GridItem[as=li]*8
```

### Sidebar and content

```emmet
div.grid>GridItem[as=aside spanLg=3 hideBelow=lg]+GridItem[spanLg=9]
```

### Container query

```emmet
div.grid[data-query=container data-columns=2 data-columns-md=3]>GridItem*6
```

### Small gap

```emmet
div.grid[data-gap=sm data-columns=2]>GridItem*4
```

## Examples

- **Product grid**: `as=ul columns=2 columnsMd=3 columnsXl=4`.
- **Category tiles**: `as=ul columns=3 columnsLg=6`.
- **Listing page**: filters `spanLg=3`, products `spanLg=9`.
- **Product page**: gallery `spanLg=7`, buy box `spanLg=5`.
- **Basket and checkout**: items or form `spanLg=8`, order summary `spanLg=4`.
- **Grid inside a column**: `query=container`, so it responds to the column's width, not the screen.

## Notes

- Mobile first. A value applies from its breakpoint up, until a larger breakpoint changes it: `span=12 spanMd=6` is full width below `md` and half width from `md`.
- Breakpoints are `xs` 0, `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px and `2xl` 1536px, from `breakpoints.css`.
- `query=container` makes the parent element a size container. The parent must get its width from the layout, such as a block element or a grid item, not from its content.
- Nest a Grid inside a `GridItem`, never on the same element.
- An item can't cover more columns than the grid has.
- Column gaps shrink on narrow grids so 12 columns never overflow.
- Tokens: `--grid-gap-sm`, `--grid-gap-md`, `--grid-gap-lg`.
- Uses [grid-item.md](grid-item.md).
