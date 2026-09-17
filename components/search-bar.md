# Search Bar

The site-wide product search: a search input and a submit button inside a `form[role=search]`. It is the most-used control in the header.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| action | string | `/search` | Form action. The query is sent as `?q=`. |
| label | string | `Search` | Accessible label for the input. |
| placeholder | string | — | Prompt, such as "What are you looking for?". |
| value | string | — | Current query, shown on the results page. |
| size | `md` \| `lg` | `lg` | `md` in the compact mobile header. |
| onSubmit | function | — | Called with the query. |

## Variations

### Default

```emmet
form.search-bar[role=search action=/search method=get]>label.search-bar__label[for=q data-visually-hidden]{Search}+Input#q[type=search name=q placeholder="What are you looking for?" autocomplete=off]+Button[type=submit variant=primary isIconOnly iconStart=search label=Search]
```

## Examples

- **Site header**: always visible, full width on mobile.
- **Search results page**: `value` set to the current query.

## Notes

- The label is visually hidden but always present. The placeholder is not the label.
- Search suggestions are a later addition. The form works without them.
- Uses [input.md](input.md) and [button.md](button.md).
