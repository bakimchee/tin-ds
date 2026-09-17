# Product Buy Box

The purchase panel on a product page: title, rating, price, offers, delivery or collection, add-ons, quantity and "Add to trolley". It sits beside the gallery on desktop and under it on mobile.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| productId | string | — | Sent with the add-to-trolley form. Required. |
| title | string | — | Product name, the page `h1`. Required. |
| catalogueNumber | string | — | Shown as "Cat. No. {catalogueNumber}". |
| ratingValue | number | — | Average rating. |
| ratingCount | number | — | Review count, links to `#reviews`. |
| price | number | — | Current price. Required. |
| priceWas | number | — | Previous price. |
| offers | string[] | — | Promo badges, such as "Save £50". |
| financeText | string | — | Such as "Or £29.08 a month for 12 months". |
| energyGrade | `A`–`G` | — | Shows an [energy-rating.md](../components/energy-rating.md). |
| keyFeatures | string[] | — | Three to five points. |
| fulfilmentOptions | `OptionCard[]` | — | Delivery and collection choices. |
| addOns | `OptionCard[]` | — | Protection, installation and recycling. |
| addOnsTitle | string | `Protect your purchase` | Legend for the add-ons, such as "Add services". |
| ctaLabel | string | `Add to trolley` | Submit button text, such as "Add to basket". |
| maxQuantity | number | `10` | Quantity limit. |
| isInWishlist | boolean | `false` | Wishlist button state. |
| isOutOfStock | boolean | `false` | Disables add to trolley and shows "Out of stock". |

## Variations

### Default

```emmet
section.product-buy-box[aria-labelledby=product-title]>Heading#product-title[level=1 size=lg]{Samsung QE55Q60D 55 inch QLED 4K Smart TV}+Text[size=sm isMuted]{Cat. No. 881/2345}+Rating[value=4.6 count=212 size=md hasValue href=#reviews]+div.product-buy-box__price>Price[amount=349 amountWas=399 size=lg]+Badge[variant=promo]{Save £50}+EnergyRating[grade=F href=/docs/881-2345-label.pdf size=md]^Text[size=sm]{Or £29.08 a month for 12 months}+SpecList[variant=compact headingLevel=2]+form.product-buy-box__form[action=/basket/add method=post]>input[type=hidden name=productId value=8812345]+Fieldset[legend="How would you like to get it?"]>OptionCard[id=fulfil-delivery type=radio name=fulfilment value=delivery icon=truck title=Delivery description="Get it tomorrow" price=3.95 isChecked]+OptionCard[id=fulfil-collection type=radio name=fulfilment value=collection icon=store title="Click & Collect" description="Check stock in your local store" price=0]^Fieldset[legend="Protect your purchase"]>OptionCard[id=protect-none type=radio name=protection value=none title="No cover" isChecked]+OptionCard[id=protect-3y type=radio name=protection value=3y title="3 year protection plan" description="Covers breakdowns and accidental damage" price=79]^QuantitySelector[id=quantity max=10]+Button[type=submit variant=primary size=lg isFullWidth iconStart=basket]{Add to trolley}^Button[variant=secondary isFullWidth iconStart=heart]{Add to wishlist}
```

### Out of stock

```emmet
section.product-buy-box[aria-labelledby=product-title data-out-of-stock]>Heading#product-title[level=1 size=lg]{Samsung QE55Q60D 55 inch QLED 4K Smart TV}+Rating[value=4.6 count=212 size=md hasValue href=#reviews]+Price[amount=349 size=lg]+Availability[status=outOfStock]{Out of stock for delivery and collection}+Button[variant=primary size=lg isFullWidth isDisabled]{Add to trolley}+Button[variant=secondary isFullWidth iconStart=heart]{Add to wishlist}
```

## Examples

- **Argos style**: Delivery or Click & Collect, then a protection plan. When Click & Collect is chosen it expands to a postcode stock check, as in the "With extra content" variation of [option-card.md](../components/option-card.md).
- **AO style**: delivery date, then add-ons for installation, removal of the old appliance and recycling (`OptionCard[type=checkbox]`).

## Notes

- The whole purchase is one form, so it works without JavaScript. With JavaScript, submitting opens [added-to-basket-dialog.md](added-to-basket-dialog.md).
- Wishlist sits outside the form, so it isn't submitted with the purchase.
- Uses [heading.md](../components/heading.md), [text.md](../components/text.md), [rating.md](../components/rating.md), [price.md](../components/price.md), [badge.md](../components/badge.md), [energy-rating.md](../components/energy-rating.md), [spec-list.md](../components/spec-list.md), [fieldset.md](../components/fieldset.md), [option-card.md](../components/option-card.md), [quantity-selector.md](../components/quantity-selector.md), [availability.md](../components/availability.md) and [button.md](../components/button.md).
