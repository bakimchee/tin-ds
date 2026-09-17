# Added To Basket Dialog

Confirms that a product went into the trolley. It shows the item and the trolley total, offers "Continue shopping" or "Go to trolley", and suggests accessories.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| item | `BasketItem` | — | The product just added. Required. |
| basketCount | number | — | Items now in the trolley. |
| basketTotal | number | — | New trolley subtotal. |
| recommendations | `ProductCard[]` | — | Up to four accessories. |

## Variations

### Default

```emmet
dialog.dialog.added-to-basket-dialog#added-to-trolley[aria-labelledby=added-title data-size=lg]>div.dialog__header>h2.dialog__title#added-title{Added to trolley}+Button[variant=tertiary isIconOnly iconStart=close label=Close command=close commandFor=added-to-trolley]^div.dialog__content>Alert[status=success isLive]{1 item added to your trolley}+BasketItem[variant=compact]+p.added-to-basket-dialog__total>span{Trolley subtotal (2 items) }+Price[amount=428]^Carousel#added-recs[title="Customers also bought" headingLevel=3]>li.carousel__item*4>ProductCard[hasAddToBasket=false]^^^div.dialog__footer>Button[variant=secondary command=close commandFor=added-to-trolley]{Continue shopping}+Button[href=/basket variant=primary]{Go to trolley}
```

## Examples

- **Argos style**: opens after "Add to trolley" on a product card or product page, with accessories such as wall brackets and HDMI cables.

## Notes

- Opened with `showModal()` after the add-to-trolley request succeeds. Without JavaScript, the form goes to the basket page instead.
- Focus goes to the dialog heading.
- The carousel title must differ from other carousels on the page, because each one is a named region.
- It is a [dialog.md](../components/dialog.md) `modal` with `size=lg`, written out to show the content layout.
- Uses [alert.md](../components/alert.md), [basket-item.md](basket-item.md), [price.md](../components/price.md), [carousel.md](../components/carousel.md), [product-card.md](product-card.md) and [button.md](../components/button.md).
