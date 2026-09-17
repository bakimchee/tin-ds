# Site Footer

The bottom of every page: newsletter sign-up, link columns, app and social links, payment methods and legal text.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| columns | `LinkList[]` | — | Three to five link columns. Required. |
| hasNewsletter | boolean | `true` | Shows the email sign-up. |
| socialLinks | `{ icon, label, href }[]` | — | Social networks. |
| paymentMethods | `{ src, alt }[]` | — | Accepted payment logos. |
| legal | string | — | Company and credit broker text. Required. |
| variant | `default` \| `checkout` | `default` | `checkout` shows only the legal text and key links. |

## Variations

### Default

```emmet
footer.site-footer>section.site-footer__newsletter[aria-labelledby=newsletter-title]>Heading#newsletter-title[level=2 size=md]{Get the best deals first}+form[action=/newsletter method=post]>FormField[id=newsletter-email label="Email address"]>InputGroup>Input#newsletter-email[type=email name=email autocomplete=email]+Button[type=submit variant=primary]{Sign up}^^^^div.site-footer__columns>LinkList[variant=inverse headingLevel=2 title=Help isCollapsible]+LinkList[variant=inverse headingLevel=2 title="Our services" isCollapsible]+LinkList[variant=inverse headingLevel=2 title="About us" isCollapsible]+LinkList[variant=inverse headingLevel=2 title="Our policies" isCollapsible]^div.site-footer__social>Heading[level=2 size=sm]{Follow us}+ul>(li>Link[href="https://facebook.com" variant=inverse iconStart=facebook isExternal]{Facebook})+(li>Link[href="https://instagram.com" variant=inverse iconStart=instagram isExternal]{Instagram})+(li>Link[href="https://youtube.com" variant=inverse iconStart=youtube isExternal]{YouTube})^^div.site-footer__apps>Link[href=/app variant=inverse]{Download our app}^div.site-footer__payments>Heading[level=2 size=sm]{Ways to pay}+ul>(li>Image[src=/img/pay/visa.svg alt=Visa width=48 height=32])+(li>Image[src=/img/pay/mastercard.svg alt=Mastercard width=48 height=32])+(li>Image[src=/img/pay/paypal.svg alt=PayPal width=48 height=32])+(li>Image[src=/img/pay/klarna.svg alt=Klarna width=48 height=32])^^div.site-footer__legal>Logo[label=tin variant=inverse size=sm]+Text[as=small size=sm]{© 2026 tin Retail Ltd. Registered in England and Wales, company number 01234567. tin Retail Ltd acts as a credit broker and is not a lender. Credit subject to status.}
```

### Checkout

```emmet
footer.site-footer[data-variant=checkout]>ul.site-footer__links>(li>Link[href=/help variant=inverse]{Help})+(li>Link[href=/privacy variant=inverse]{Privacy})+(li>Link[href=/terms variant=inverse]{Terms and conditions})^Text[as=small size=sm]{© 2026 tin Retail Ltd.}
```

## Examples

- **Help column**: Contact us, Delivery, Returns, Track my order, FAQs.
- **Our services column**: Click & Collect, Installation, Recycling, Protection plans, Gift cards.
- **About us column**: About tin, Careers, Store finder, Press.
- **Our policies column**: Privacy, Cookies, Terms and conditions, Accessibility, Modern slavery statement.

## Notes

- Sits on `--color-surface-inverse`, so links use `variant=inverse`.
- Columns collapse into accordions on small screens (`isCollapsible`).
- Uses [heading.md](../components/heading.md), [form-field.md](../components/form-field.md), [input-group.md](../components/input-group.md), [button.md](../components/button.md), [link-list.md](../components/link-list.md), [link.md](../components/link.md), [image.md](../components/image.md), [logo.md](../components/logo.md) and [text.md](../components/text.md).
