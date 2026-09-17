# Basket Item

One line in the trolley: product image, name, price, quantity, fulfilment and a remove button.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| lineId | string | — | Basket line id, sent when updating. Required. |
| href | string | — | Product page. Required. |
| title | string | — | Product name. Required. |
| imageSrc | string | — | Product image. Required. |
| price | number | — | Line total. Required. |
| priceWas | number | — | Previous line total. |
| catalogueNumber | string | — | Shown as "Cat. No. {catalogueNumber}". |
| unitPrice | number | — | Price per item, shown when quantity is more than 1. |
| quantity | number | `1` | Current quantity. |
| maxQuantity | number | `10` | Quantity limit. |
| availability | `{ status, method, label }` | — | Delivery or collection line, see [availability.md](../components/availability.md). |
| addOns | `{ title, price }[]` | — | Chosen services, such as installation or protection. |
| headingLevel | `2`–`4` | `3` | Title heading level. |
| variant | `default` \| `compact` | `default` | `compact` hides the quantity controls, for summaries and dialogs. |
| onQuantityChange | function | — | Called with the new quantity. |
| onRemove | function | — | Called when removed. |

## Variations

### Default

```emmet
article.basket-item>div.basket-item__media>Image[src=/img/p/8812345.jpg alt="" width=120 height=120]^div.basket-item__body>h3.basket-item__title>Link[href=/product/8812345 variant=subtle]{Samsung QE55Q60D 55 inch QLED 4K Smart TV}^Text[size=sm isMuted]{Cat. No. 881/2345}+Availability[method=delivery]{Delivery available}+ul.basket-item__add-ons>li{3 year protection plan £79.00}^^div.basket-item__actions>form.basket-item__update[action=/basket/update method=post]>input[type=hidden name=lineId value=line-1]+QuantitySelector[id=qty-line-1 value=1 max=10]+Button[type=submit variant=tertiary size=sm]{Update}^form.basket-item__remove[action=/basket/remove method=post]>input[type=hidden name=lineId value=line-1]+Button[type=submit variant=tertiary size=sm iconStart=trash label="Remove Samsung QE55Q60D from trolley"]{Remove}^Price[amount=428 amountWas=478]
```

### Compact

```emmet
article.basket-item[data-variant=compact]>div.basket-item__media>Image[src=/img/p/8812345.jpg alt="" width=80 height=80]^div.basket-item__body>h3.basket-item__title{Samsung QE55Q60D 55 inch QLED 4K Smart TV}+Text[size=sm]{Quantity: 1}+Price[amount=349 size=sm]
```

## Examples

- **Basket page**: `default`, one per line in a `ul`.
- **Added to trolley dialog**: `compact`.
- **Checkout order summary**: `compact` in the sidebar.

## Notes

- Quantity and remove are forms, so they work without JavaScript. With JavaScript, quantity changes update on change and the Update button is hidden.
- The remove button's `label` includes the product name.
- Uses [image.md](../components/image.md), [link.md](../components/link.md), [text.md](../components/text.md), [price.md](../components/price.md), [button.md](../components/button.md), [availability.md](../components/availability.md) and [quantity-selector.md](../components/quantity-selector.md).
