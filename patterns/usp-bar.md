# USP Bar

A slim strip of three or four service promises, such as "Free next day delivery" and "30 day returns". It sits at the very top of every page and optionally again above the footer.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| items | `{ icon, label, href }[]` | — | Three or four promises. Required. |
| variant | `default` \| `inverse` | `default` | `inverse` on a brand-coloured strip. |

## Variations

### Default

```emmet
section.usp-bar[aria-label="Why shop with us"]>ul.usp-bar__items>(li.usp-bar__item>Link[href=/help/delivery variant=subtle iconStart=truck]{Free delivery over £50})+(li.usp-bar__item>Link[href=/help/collection variant=subtle iconStart=store]{Collect in 1 hour})+(li.usp-bar__item>Link[href=/help/returns variant=subtle iconStart=return]{30 day returns})+(li.usp-bar__item>Link[href=/reviews variant=subtle iconStart=star]{Rated Excellent})
```

## Examples

- **Argos style**: fast track delivery, fast track collection, returns.
- **AO style**: free next day delivery, free recycling of old appliance, Trustpilot rating.

## Notes

- On small screens only the first item shows, or the items scroll sideways.
- Uses [link.md](../components/link.md).
