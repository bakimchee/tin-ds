# Product Gallery

The product page images: a large image that scrolls sideways, with thumbnails that jump to each image. It works without JavaScript by linking to image ids.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| images | `{ src, alt }[]` | — | Product images in order. The first is the main shot. Required. |
| productTitle | string | — | Used in the image and thumbnail labels. Required. |
| hasThumbnails | boolean | `true` | Shows the thumbnail row. It is hidden on small screens, where swiping is used. |
| videoHref | string | — | Adds a "Watch video" link. |

## Variations

### Default

```emmet
div.product-gallery>ul.product-gallery__slides[tabindex=0 aria-label="Product images, scrollable"]>(li.product-gallery__slide#image-1>Image[src=/img/p/8812345-1.jpg alt="Samsung QE55Q60D front view" width=800 height=800 isEager])+(li.product-gallery__slide#image-2>Image[src=/img/p/8812345-2.jpg alt="Samsung QE55Q60D side view" width=800 height=800])+(li.product-gallery__slide#image-3>Image[src=/img/p/8812345-3.jpg alt="Samsung QE55Q60D rear ports" width=800 height=800])^ul.product-gallery__thumbnails>(li>a.product-gallery__thumbnail[href=#image-1 aria-label="View image 1 of 3"]>Image[src=/img/p/8812345-1-thumb.jpg alt="" width=80 height=80])+(li>a.product-gallery__thumbnail[href=#image-2 aria-label="View image 2 of 3"]>Image[src=/img/p/8812345-2-thumb.jpg alt="" width=80 height=80])+(li>a.product-gallery__thumbnail[href=#image-3 aria-label="View image 3 of 3"]>Image[src=/img/p/8812345-3-thumb.jpg alt="" width=80 height=80])
```

### With video

```emmet
div.product-gallery>ul.product-gallery__slides[tabindex=0 aria-label="Product images, scrollable"]>li.product-gallery__slide#image-1>Image[src=/img/p/8812345-1.jpg alt="Samsung QE55Q60D front view" width=800 height=800 isEager]^^Link[href=/video/8812345 variant=standalone iconStart=arrow-right]{Watch video}
```

## Examples

- **Product page**: top left on desktop, above the buy box on mobile.

## Notes

- Every main image has an `alt` that describes the view. Thumbnails use `alt=""` because the link has a label.
- Uses [image.md](image.md) and [link.md](link.md).
