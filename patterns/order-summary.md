# Order Summary

The totals panel for the basket and checkout: subtotal, delivery, discounts, total, a promo code field and the next step.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | `Order summary` | Heading, such as "Your order" at checkout. |
| itemCount | number | — | Items in the basket. Shown in the subtotal label. |
| subtotal | number | — | Items total. Required. |
| delivery | number | — | Delivery cost. `0` shows "Free". Leave it out to show "Calculated at checkout". |
| discount | number | — | Promo saving, shown as a negative amount. |
| total | number | — | Amount to pay. Required. |
| ctaLabel | string | — | Next step, such as "Continue to checkout". |
| ctaHref | string | — | Next step URL. |
| hasPromoCode | boolean | `false` | Shows the promo code form. |
| items | node | — | `BasketItem[variant=compact]` list. Used at checkout. |
| paymentNote | string | — | Such as "Pay in 3 with Klarna". |

## Variations

### Basket

```emmet
aside.order-summary[aria-labelledby=summary-title]>Heading#summary-title[level=2 size=md]{Order summary}+dl.order-summary__lines>(div.order-summary__row>dt{Subtotal (2 items)}+dd>Price[amount=428 size=sm])+(div.order-summary__row>dt{Delivery}+dd>Price[amount=0 size=sm])+(div.order-summary__row.order-summary__row--total>dt{Total}+dd>Price[amount=428 size=lg])^details.order-summary__promo>summary{Add a promo code}+form[action=/basket/promo method=post]>FormField[id=promo label="Promo code"]>InputGroup>Input#promo[name=promo autocomplete=off]+Button[type=submit variant=secondary]{Apply}^^^^Button[href=/checkout variant=primary size=lg isFullWidth]{Continue to checkout}+Text[size=sm isMuted]{Or pay in 3 interest-free payments with Klarna}
```

### Checkout

```emmet
aside.order-summary[aria-labelledby=summary-title]>Heading#summary-title[level=2 size=md]{Your order}+ul.order-summary__items>li>BasketItem[variant=compact]^^dl.order-summary__lines>(div.order-summary__row>dt{Subtotal}+dd>Price[amount=428 size=sm])+(div.order-summary__row>dt{Delivery}+dd>Price[amount=3.95 size=sm])+(div.order-summary__row>dt{Discount}+dd{−£20.00})+(div.order-summary__row.order-summary__row--total>dt{Total}+dd>Price[amount=411.95 size=lg])
```

## Examples

- **Basket page**: sidebar on desktop, below the items on mobile.
- **Checkout**: sidebar with compact items and no call to action.

## Notes

- The total row is a modifier: `.order-summary__row--total`.
- Uses [heading.md](../components/heading.md), [price.md](../components/price.md), [form-field.md](../components/form-field.md), [input-group.md](../components/input-group.md), [button.md](../components/button.md), [text.md](../components/text.md) and [basket-item.md](basket-item.md).
