# Banner

A large promotional block with a background image, a headline and a call to action. Used for the home page hero, campaign slots and the strip across the top of a category.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | — | Headline. Required. |
| description | string | — | Supporting line. |
| eyebrow | string | — | Small label above the title, such as "Black Friday". |
| imageSrc | string | — | Background image. |
| imageAlt | string | `""` | Empty when the image is decorative. |
| ctaLabel | string | — | Button text. |
| ctaHref | string | — | Button target. |
| variant | `hero` \| `strip` | `hero` | `hero` is large with an image. `strip` is a slim single line with no image: `title` renders as bold `Text` and the call to action as a standalone `Link`. |
| align | `start` \| `center` | `start` | Text alignment. |
| headingLevel | `1`–`3` | `2` | Title heading level. |
| isEager | boolean | `false` | Loads the image straight away. Use it for the first banner on the page. |

## Variations

### Hero

```emmet
section.banner[data-variant=hero]>Image[src=/img/hero-sale.jpg alt="" ratio=wide fit=cover isEager]+div.banner__body>p.banner__eyebrow{Summer Sale}+Heading[level=2 size=xl]{Up to half price on big brands}+Text[size=lg]{Thousands of deals across tech, home and toys.}+Button[href=/sale variant=primary size=lg]{Shop the sale}
```

### Strip

```emmet
section.banner[data-variant=strip data-align=center]>Text[isBold]{Free delivery on orders over £50}+Link[href=/help/delivery variant=standalone]{Find out more}
```

## Examples

- **Home page hero**: `hero` inside [carousel.md](carousel.md), with the first slide `isEager`.
- **Category page promotion**: `strip` above the product grid.
- **Finance offer**: `hero` with `align=center` and "0% interest for 12 months".

## Notes

- Text in the image must also be in `title` or `description`. Don't bake words into the image.
- Uses [image.md](image.md), [heading.md](heading.md), [text.md](text.md), [button.md](button.md) and [link.md](link.md).
- Tokens: `--color-surface-brand`, `--color-text-inverse`.
