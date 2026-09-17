# Link List

A titled list of links. Used for footer columns, mega menu columns and help topics.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | — | List heading. |
| titleHref | string | — | Makes the heading a link, such as "All TVs". |
| headingLevel | `2`–`4` | `3` | Title heading level. |
| links | `{ label, href, iconStart }[]` | — | Links. Required. |
| variant | `default` \| `inverse` | `default` | `inverse` for dark surfaces such as the footer. |
| isCollapsible | boolean | `false` | Becomes an [accordion.md](accordion.md) item on small screens. |

## Variations

### Default

```emmet
div.link-list>h3.link-list__title{TVs}+ul.link-list__items>(li>Link[href=/tvs/55-inch variant=subtle]{55 inch TVs})+(li>Link[href=/tvs/oled variant=subtle]{OLED TVs})+(li>Link[href=/tvs/smart variant=subtle]{Smart TVs})
```

### Linked title

```emmet
div.link-list>h3.link-list__title>Link[href=/tvs variant=subtle]{TVs}^ul.link-list__items>(li>Link[href=/tvs/55-inch variant=subtle]{55 inch TVs})+(li>Link[href=/tvs/oled variant=subtle]{OLED TVs})
```

### Footer

```emmet
div.link-list[data-variant=inverse]>h2.link-list__title{Help}+ul.link-list__items>(li>Link[href=/help/delivery variant=inverse]{Delivery})+(li>Link[href=/help/returns variant=inverse]{Returns})+(li>Link[href=/track variant=inverse]{Track my order})
```

## Examples

- **Site footer**: Help, Our services, About us, Legal.
- **Mega menu column**: TVs, Audio, Headphones.
- **Social links**: a list with `iconStart` for each network.

## Notes

- When `isCollapsible`, the markup becomes `details.link-list>summary>h3.link-list__title` on small screens.
- Uses [link.md](link.md).
