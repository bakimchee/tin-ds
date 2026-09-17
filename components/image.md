# Image

A picture at a fixed aspect ratio, so the layout doesn't jump while it loads. Used for product shots, category tiles, banners and brand logos.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| src | string | — | Image URL. Required. |
| alt | string | — | Text alternative. Use `""` when nearby text already describes the image. |
| ratio | `square` \| `portrait` \| `landscape` \| `wide` | `square` | 1:1, 3:4, 4:3 or 16:9. |
| fit | `contain` \| `cover` | `contain` | `contain` shows the whole product. `cover` fills the frame for lifestyle photos. |
| width | number | — | Intrinsic width in px. |
| height | number | — | Intrinsic height in px. |
| isEager | boolean | `false` | Loads straight away. Use for the first image a visitor sees. Otherwise `loading=lazy`. |

## Variations

### Product

```emmet
img.image[src=/img/tv.jpg alt="Samsung 55 inch QLED TV" width=400 height=400 loading=lazy]
```

### Banner

```emmet
img.image[src=/img/sale.jpg alt="" width=1600 height=900 data-ratio=wide data-fit=cover loading=eager]
```

## Examples

- **Product card and gallery**: `square contain`.
- **Hero banner**: `wide cover isEager`.
- **Category tile**: `square cover`.

## Notes

- Always set `width` and `height` so space is reserved before loading.
- Its styling needs `max-width: 100%` and `height: auto`, so an image never overflows a narrow grid item.
- Product images sit on a white background (`--color-surface-default`).
