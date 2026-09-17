# Carousel

A titled row of items that scrolls sideways, such as product rails and hero slides. It is a normal list that scrolls with snap points. Arrow buttons are an optional extra.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Prefix for the heading id, `{id}-title`, which labels the section. Required. |
| title | string | — | Section heading. Required. |
| headingLevel | `2`–`4` | `2` | Title heading level. |
| viewAllHref | string | — | Adds a "View all" link beside the title. |
| variant | `products` \| `slides` | `products` | `products` shows several items at once. `slides` shows one full-width item at a time. |
| hasControls | boolean | `false` | Shows previous and next buttons. Needs JavaScript. |
| isTitleHidden | boolean | `false` | Sets `isVisuallyHidden` on the heading. Used for the hero. |
| children | node | — | One `li` per item. |

## Variations

### Products

```emmet
section.carousel[aria-labelledby=trending-title]>div.carousel__header>Heading#trending-title[level=2 size=lg]{Trending this week}+Link[href=/trending variant=standalone iconEnd=chevron-right]{View all}^ul.carousel__track[tabindex=0 aria-label="Trending this week, scrollable"]>li.carousel__item*8>ProductCard
```

### Slides

```emmet
section.carousel[data-variant=slides aria-labelledby=hero-title]>div.carousel__header>Heading#hero-title[level=2 isVisuallyHidden]{Featured offers}^ul.carousel__track[tabindex=0 aria-label="Featured offers, scrollable"]>li.carousel__item*3>Banner
```

### With controls

```emmet
section.carousel[aria-labelledby=recent-title data-has-controls]>div.carousel__header>Heading#recent-title[level=2 size=lg]{Recently viewed}+div.carousel__controls>Button[variant=secondary size=sm isIconOnly iconStart=chevron-left label="Previous items"]+Button[variant=secondary size=sm isIconOnly iconStart=chevron-right label="Next items"]^^ul.carousel__track[tabindex=0 aria-label="Recently viewed, scrollable"]>li.carousel__item*6>ProductCard
```

## Examples

- **Home hero**: `slides` with [banner.md](banner.md) items.
- **Home rails**: "Trending this week", "Top deals".
- **Product page**: "Customers also viewed", "You might also need".
- **Basket**: "Don't forget" accessories.

## Notes

- `tabindex=0` on the track lets keyboard users scroll it. The track's `aria-label` repeats the title and adds ", scrollable".
- Never auto-play.
- Uses [heading.md](heading.md), [link.md](link.md), [button.md](button.md), and [product-card.md](../patterns/product-card.md) or [banner.md](banner.md) as items.
