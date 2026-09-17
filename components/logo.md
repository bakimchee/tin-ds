# Logo

The brand mark, linking to the home page.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| href | string | `/` | Link target. |
| variant | `default` \| `inverse` | `default` | `inverse` for dark or brand surfaces. |
| size | `sm` \| `md` | `md` | `sm` for mobile and the checkout header. |
| label | string | — | Brand name, used as the image `alt`. Required. |

## Variations

### Default

```emmet
a.logo[href=/]>img[src=/img/logo.svg alt="tin home" width=120 height=40]
```

### Inverse

```emmet
a.logo[href=/ data-variant=inverse]>img[src=/img/logo-inverse.svg alt="tin home" width=120 height=40]
```

## Examples

- **Site header**: default.
- **Site footer**: `inverse`.
- **Checkout header**: `size=sm`.

## Notes

- `alt` is the brand name plus "home", because the logo is a link.
