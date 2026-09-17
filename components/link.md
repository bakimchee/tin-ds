# Link

Navigates to another page or part of a page. Use it for navigation and [button.md](button.md) for actions. A Link can look like a text link or wrap other content, such as a product image.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| href | string | — | Destination. Required. |
| variant | `inline` \| `standalone` \| `subtle` \| `inverse` | `inline` | `inline` sits in a sentence. `standalone` stands on its own line, often with an icon. `subtle` looks like text until hovered, used in menus. `inverse` is for dark surfaces. |
| iconStart | string | — | [icon.md](icon.md) name before the text. |
| iconEnd | string | — | Icon name after the text. |
| isExternal | boolean | `false` | Opens a new tab and adds `rel=noopener`. |
| isCurrent | boolean | `false` | Marks the current page. Renders `aria-current=page`. |
| children | string \| node | — | Link text or wrapped content. |

## Variations

### Inline

```emmet
a.link[href=/help/delivery]{delivery information}
```

### Standalone with icon

```emmet
a.link[href=/stores data-variant=standalone]>Icon[name=location]+span{Find a store}
```

### View all

```emmet
a.link[href=/tvs data-variant=standalone]>span{View all}+Icon[name=chevron-right]
```

### Subtle

```emmet
a.link[href=/laptops data-variant=subtle]{Laptops}
```

### Current page

```emmet
a.link[href=/tvs data-variant=subtle aria-current=page]{Televisions}
```

## Examples

- **In copy**: "Read our returns policy".
- **Section header**: "View all" with `iconEnd=chevron-right`.
- **Menus and footer lists**: `subtle`.
- **Footer on a dark background**: `inverse`.

## Notes

- Link text must make sense on its own. Avoid "click here".
- Don't style a Link as a button. Use `Button` with `href` instead.
- Tokens: `--color-text-link`, `--color-text-inverse`.
