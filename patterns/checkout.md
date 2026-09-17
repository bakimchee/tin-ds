# Checkout

A focused page for paying. The header and footer are simplified and navigation is removed, so the only way forward is the form.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| steps | `ProgressSteps` | — | Checkout progress. Required. |
| form | `CheckoutForm` | — | Details, delivery and payment. Required. |
| summary | `OrderSummary` | — | Compact items and totals. Required. |

## Variations

### Default

```emmet
SiteHeader[variant=checkout]+main#main.page[data-page=checkout]>Heading[level=1 size=xl]{Checkout}+ProgressSteps[current=1]+Grid>GridItem[spanLg=8]>CheckoutForm^GridItem[spanLg=4]>OrderSummary^^^SiteFooter[variant=checkout]
```

### Order confirmation

```emmet
SiteHeader[variant=checkout]+main#main.page[data-page=confirmation]>Heading[level=1 size=xl]{Thank you, your order is confirmed}+Alert[status=success isLive]{Order number 123-456-789. We've sent a confirmation to sam@example.com.}+Grid>GridItem[spanLg=8]>section[aria-labelledby=next-title]>Heading#next-title[level=2 size=md]{What happens next}+Text{We'll text you a one-hour delivery window on the morning of delivery.}+Button[href=/account/orders variant=secondary]{Track your order}^^GridItem[spanLg=4]>OrderSummary^^^SiteFooter[variant=checkout]
```

## Examples

- **Guest checkout**: every step open in one form.
- **Confirmation**: after payment, with order number and next steps.

## Notes

- No search, navigation or promo content on these pages.
- Content `spanLg=8` and order summary `spanLg=4` from `lg`. Below that the summary follows the form.
- Uses [page.md](page.md), [grid.md](../components/grid.md), [grid-item.md](../components/grid-item.md), [site-header.md](site-header.md), [heading.md](../components/heading.md), [progress-steps.md](../components/progress-steps.md), [checkout-form.md](checkout-form.md), [order-summary.md](order-summary.md), [alert.md](../components/alert.md), [text.md](../components/text.md), [button.md](../components/button.md) and [site-footer.md](site-footer.md).
