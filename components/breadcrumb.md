# Breadcrumb

Shows where the page sits in the category tree, with links back up each level.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| items | `{ label, href }[]` | — | Path from Home to the current page. The last item is the current page. Required. |
| isCollapsed | boolean | `false` | On small screens, shows only a back link to the parent. |

## Variations

### Default

```emmet
nav.breadcrumb[aria-label=Breadcrumb]>ol.breadcrumb__list>(li.breadcrumb__item>Link[href=/ variant=subtle]{Home})+(li.breadcrumb__item>Link[href=/technology variant=subtle]{Technology})+(li.breadcrumb__item>Link[href=/technology/tvs variant=subtle isCurrent]{Televisions})
```

### Collapsed

```emmet
nav.breadcrumb[aria-label=Breadcrumb data-collapsed]>Link[href=/technology variant=standalone iconStart=chevron-left]{Back to Technology}
```

## Examples

- **Product listing**: Home › Technology › Televisions.
- **Product page**: Home › Technology › Televisions › 55 inch TVs.

## Notes

- Separators are added with styling, not typed into the markup.
- Uses [link.md](link.md).
