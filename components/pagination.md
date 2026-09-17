# Pagination

Moves between pages of results. Every page has its own URL, so it works without JavaScript and can be indexed by search engines.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| page | number | `1` | Current page. |
| pageCount | number | — | Total pages. Required. |
| hrefTemplate | string | — | URL with `{page}` in it, such as `/tvs?page={page}`. Required. |
| variant | `numbered` \| `compact` | `numbered` | `compact` shows "Page 2 of 12" between previous and next. |

## Variations

### Numbered

```emmet
nav.pagination[aria-label=Pagination]>ul.pagination__list>(li>Link[href="/tvs?page=1" variant=standalone iconStart=chevron-left]{Previous})+(li>Link[href="/tvs?page=1"]{1})+(li>Link[href="/tvs?page=2" isCurrent]{2})+(li>Link[href="/tvs?page=3"]{3})+(li.pagination__gap{…})+(li>Link[href="/tvs?page=12"]{12})+(li>Link[href="/tvs?page=3" variant=standalone iconEnd=chevron-right]{Next})
```

### Compact

```emmet
nav.pagination[aria-label=Pagination data-variant=compact]>Link[href="/tvs?page=1" variant=standalone iconStart=chevron-left]{Previous}+p.pagination__status{Page 2 of 12}+Link[href="/tvs?page=3" variant=standalone iconEnd=chevron-right]{Next}
```

## Examples

- **Product listing, desktop**: `numbered`, showing the first, last and neighbouring pages.
- **Product listing, mobile**: `compact`.
- **Reviews**: `compact`.

## Notes

- Leave out "Previous" on page 1 and "Next" on the last page.
- The current page link uses `isCurrent`, which renders `aria-current=page`.
- Uses [link.md](link.md).
