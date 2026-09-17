# Cookie Banner

The cookie consent message shown on a visitor's first page view. UK law requires one. It offers accept, reject and manage options with equal weight, and doesn't block the page.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| action | string | `/cookies` | Form action. The chosen button's `value` is sent as `consent`. |
| title | string | `We use cookies` | Heading. |
| description | string | — | What cookies are used for. Required. |
| policyHref | string | `/cookies` | Link to the cookie policy. |
| isOpen | boolean | `true` | Shown until a choice is saved. |

## Variations

### Default

```emmet
section.cookie-banner[aria-labelledby=cookie-title]>Heading#cookie-title[level=2 size=sm]{We use cookies}+Text[size=sm]{We use cookies to make our site work, remember your trolley and show you relevant offers.}+Link[href=/cookies]{Read our cookie policy}+form.cookie-banner__actions[action=/cookies method=post]>Button[type=submit variant=primary name=consent value=all]{Accept all}+Button[type=submit variant=secondary name=consent value=essential]{Reject optional cookies}+Button[href=/cookies/settings variant=tertiary]{Manage settings}
```

## Examples

- **First visit**: pinned to the bottom of the viewport above the footer, on every page template.
- **Settings page**: "Manage settings" goes to a page of [checkbox.md](../components/checkbox.md) options, one for each cookie type.

## Notes

- Place it first inside `body`, before the skip link, so keyboard users reach it first.
- Accept and reject have equal visual weight, as the ICO requires.
- Remove it from the markup once a choice is saved.
- Button renders `name` and `value` as native props.
- Uses [heading.md](../components/heading.md), [text.md](../components/text.md), [link.md](../components/link.md) and [button.md](../components/button.md).
