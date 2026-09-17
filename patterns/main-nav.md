# Main Nav

The department navigation. On desktop it is a row of departments, each opening a mega menu of link columns and a promo card. On mobile the same content sits in a [dialog.md](../components/dialog.md) drawer.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| departments | `{ id, label, href, columns: LinkList[], promo: Card }[]` | — | Top-level departments. Required. |
| currentDepartment | string | — | `id` of the department for the current page. |
| variant | `bar` \| `drawer` | `bar` | `bar` for desktop, `drawer` for the mobile menu. |

## Variations

### Bar

```emmet
nav.main-nav[aria-label=Departments]>ul.main-nav__departments>(li.main-nav__department>button.main-nav__trigger[type=button popovertarget=menu-technology aria-expanded=false]{Technology}+div.main-nav__panel#menu-technology[popover]>div.main-nav__columns>LinkList[title=TVs titleHref=/tvs]+LinkList[title=Laptops titleHref=/laptops]+LinkList[title=Headphones titleHref=/headphones]^Card[variant=promo href=/technology/offers title="Tech deals"]+Link[href=/technology variant=standalone iconEnd=chevron-right]{Shop all Technology})+(li.main-nav__department>button.main-nav__trigger[type=button popovertarget=menu-home aria-expanded=false]{Home & Garden}+div.main-nav__panel#menu-home[popover]>div.main-nav__columns>LinkList[title=Furniture titleHref=/furniture]+LinkList[title=Kitchen titleHref=/kitchen]^Link[href=/home-and-garden variant=standalone iconEnd=chevron-right]{Shop all Home & Garden})+(li.main-nav__department>Link[href=/offers variant=subtle]{Offers})
```

### Drawer

```emmet
Dialog#menu[variant=drawer side=start title=Menu]>nav.main-nav[aria-label="All departments" data-variant=drawer]>ul.main-nav__departments>(li.main-nav__department>details>summary{Technology}+LinkList[title=TVs titleHref=/tvs isCollapsible]+LinkList[title=Laptops titleHref=/laptops isCollapsible]+Link[href=/technology variant=standalone]{Shop all Technology})+(li.main-nav__department>details>summary{Home & Garden}+LinkList[title=Furniture titleHref=/furniture isCollapsible]+Link[href=/home-and-garden variant=standalone]{Shop all Home & Garden})+(li.main-nav__department>Link[href=/offers variant=subtle]{Offers})^^Link[href=/account variant=standalone iconStart=user]{Sign in or register}+Link[href=/stores variant=standalone iconStart=location]{Find a store}
```

## Examples

- **Argos style departments**: Technology, Home & Garden, Toys, Sports & Leisure, Health & Beauty, Clothing, Baby, Gifts, Offers.
- **AO style departments**: Laundry, Dishwashers, Fridges & Freezers, Cooking, TV & Audio, Computing, Small Appliances, Deals.

## Notes

- Mega menu panels use the native `popover` attribute, so they open and close without JavaScript. Script only keeps `aria-expanded` in sync.
- Each department trigger is a button. The department landing page is linked with "Shop all" inside the panel.
- A direct link, such as "Offers", has no panel.
- The drawer's `nav` is labelled "All departments", so the two navigation landmarks have different names.
- Uses [link-list.md](../components/link-list.md), [card.md](../components/card.md), [link.md](../components/link.md) and [dialog.md](../components/dialog.md).
