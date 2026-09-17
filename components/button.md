# Button

Starts an action: add to trolley, apply filters, continue to checkout. With `href` it renders an `a` that looks like a button, for calls to action that go to another page. Use [link.md](link.md) for plain navigation.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `primary` \| `secondary` \| `tertiary` | `primary` | `primary` is the main action. Use one per area. `secondary` has an outline. `tertiary` looks like text. |
| size | `sm` \| `md` \| `lg` | `md` | Height from `--control-height-*`. |
| type | `button` \| `submit` \| `reset` | `button` | Native type. Ignored when `href` is set. |
| href | string | — | Renders `a.button` instead of `button.button`. |
| iconStart | string | — | [icon.md](icon.md) name before the label. |
| iconEnd | string | — | Icon name after the label. |
| label | string | — | Accessible name, rendered as `aria-label`. Required when `isIconOnly`. With visible text, it must start with that text, such as "Remove Samsung TV from trolley" for "Remove". |
| isIconOnly | boolean | `false` | Shows only the icon. `label` becomes `aria-label`. |
| isFullWidth | boolean | `false` | Fills its container. |
| isDisabled | boolean | `false` | Renders `disabled`. |
| isLoading | boolean | `false` | Renders `aria-busy=true` and blocks repeat clicks. |
| command | string | — | Native invoker command, such as `show-modal` or `close`. |
| commandFor | string | — | `id` of the element the command controls. |
| onClick | function | — | Called on activation. |
| children | string | — | Visible label. |

## Variations

### Primary

```emmet
button.button[type=button data-variant=primary]{Add to trolley}
```

### Secondary

```emmet
button.button[type=button data-variant=secondary]{Continue shopping}
```

### Tertiary

```emmet
button.button[type=button data-variant=tertiary]{Clear all}
```

### With icon

```emmet
button.button[type=submit data-variant=primary]>Icon[name=basket]+span{Add to trolley}
```

### Icon only

```emmet
button.button[type=button data-variant=tertiary data-icon-only aria-label="Add to wishlist"]>Icon[name=heart]
```

### As a link

```emmet
a.button[href=/checkout data-variant=primary data-full-width]{Continue to checkout}
```

### Opens a dialog

```emmet
button.button[type=button data-variant=secondary command=show-modal commandfor=filters]>Icon[name=filter]+span{Filter}
```

## Examples

- **Product card**: `primary isFullWidth` "Add to trolley".
- **Basket summary**: `primary size=lg isFullWidth href=/checkout` "Continue to checkout".
- **Filters**: `tertiary` "Clear all".
- **Wishlist**: `tertiary isIconOnly iconStart=heart label="Add to wishlist"`.
- **Dialog close**: `tertiary isIconOnly iconStart=close label=Close command=close commandFor={dialogId}`.

## Notes

- Keep labels to a verb plus a noun: "Add to trolley", not "Click to add".
- `command` and `commandFor` open and close [dialog.md](dialog.md) without JavaScript.
- Tokens: `--color-action-{variant}-background`, `--color-action-{variant}-text`, `--color-action-disabled-*`, `--control-height-{size}`, `--control-radius`.
