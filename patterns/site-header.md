# Site Header

The top of every shopping page: USP bar, logo, search, account, wishlist, trolley and department navigation. The checkout uses the `checkout` variation, which leaves out the search and navigation.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| basketCount | number | `0` | Items in the trolley, shown as a count badge. |
| isSignedIn | boolean | `false` | Shows "My account" instead of "Sign in". |
| searchValue | string | — | Current search query. |
| basketLabel | string | `Trolley` | "Trolley" (Argos) or "Basket" (AO). |
| variant | `default` \| `checkout` | `default` | `checkout` shows only the logo, "Secure checkout" and a help link. |
| hasUspBar | boolean | `true` | Shows [usp-bar.md](usp-bar.md) above the header. |
| uspItems | `UspBar.items` | — | Passed to the USP bar. |
| departments | `MainNav.departments` | — | Passed to both main nav variations. Required. |

## Variations

### Default

```emmet
a.site-header__skip[href=#main]{Skip to main content}+UspBar+header.site-header>div.site-header__bar>Button[variant=tertiary isIconOnly iconStart=menu label=Menu command=show-modal commandFor=menu]+Logo[label=tin]+SearchBar[placeholder="What are you looking for?"]+ul.site-header__actions>(li>Link[href=/stores variant=subtle iconStart=location]{Stores})+(li>Link[href=/account variant=subtle iconStart=user]{Sign in})+(li>Link[href=/wishlist variant=subtle iconStart=heart]{Wishlist})+(li>Link[href=/basket variant=subtle iconStart=basket]>span{Trolley}+Badge[variant=count label=" items"]{2})^^MainNav+MainNav[variant=drawer]
```

### Checkout

```emmet
header.site-header[data-variant=checkout]>div.site-header__bar>Logo[label=tin size=sm]+p.site-header__secure>Icon[name=lock]+span{Secure checkout}^Link[href=/help variant=subtle]{Need help?}
```

## Examples

- **Every shopping page**: `default`.
- **Basket page**: `default`, with the trolley count.
- **Checkout**: `checkout`, so shoppers aren't pulled away.

## Notes

- Order on desktop: logo, search (grows to fill), actions. On mobile: menu, logo, actions on the first row and full-width search on the second.
- Action labels are always in the markup. On small screens they can be hidden visually but stay available to screen readers.
- `MainNav` shows as a bar on desktop. `MainNav[variant=drawer]` is the mobile drawer, opened by the menu button.
- Uses [usp-bar.md](usp-bar.md), [logo.md](../components/logo.md), [search-bar.md](../components/search-bar.md), [link.md](../components/link.md), [icon.md](../components/icon.md), [badge.md](../components/badge.md), [button.md](../components/button.md) and [main-nav.md](main-nav.md).
