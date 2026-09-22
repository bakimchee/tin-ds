# Table

Rows and columns of data, such as election results, league tables or figures quoted in a story. It scrolls sideways on small screens rather than squashing the columns.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| caption | string | — | What the table shows. Required. |
| columns | `{ label, isNumeric }[]` | — | Column headings. Required. |
| rows | `string[][]` | — | Cell values, in column order. Required. |
| rowHeaders | boolean | `false` | Makes the first cell of each row a `th`, such as a party or team name. |
| variant | `default` \| `compact` | `default` | `compact` tightens the rows for long tables. |
| isCaptionHidden | boolean | `false` | Hides the caption when a heading above already says the same thing. |

## Variations

### Default

```emmet
section.table[tabindex=0 aria-labelledby=results-caption]>table>caption.table__caption#results-caption{General election result, Leeds Central}+thead>tr>th[scope=col]{Party}+th[scope=col data-numeric]{Votes}+th[scope=col data-numeric]{Share}^^tbody>(tr>th[scope=row]{Labour}+td[data-numeric]{24,180}+td[data-numeric]{52.1%})+(tr>th[scope=row]{Conservative}+td[data-numeric]{9,455}+td[data-numeric]{20.4%})
```

### Compact

```emmet
section.table[data-variant=compact tabindex=0 aria-labelledby=table-caption]>table>caption.table__caption#table-caption{Rainfall by month, millimetres}+thead>tr>th[scope=col]{Month}+th[scope=col data-numeric]{2026}+th[scope=col data-numeric]{Average}^^tbody>tr>th[scope=row]{January}+td[data-numeric]{148}+td[data-numeric]{72}
```

## Examples

- **Election results**: party, votes, share, change.
- **Sport**: league table with position, played, points.
- **Data story**: the figures behind a chart.

## Notes

- Every table needs a `caption`. It is the table's name for screen reader users.
- `scope=col` and `scope=row` tell a screen reader which heading belongs to each cell.
- Numbers are right-aligned with `data-numeric`, so columns of figures line up.
- The wrapper is a `section` with `tabindex=0`, so it can be scrolled with a keyboard when it overflows, and `aria-labelledby` points at the caption to name it.
- Tokens: `--color-border-default`, `--color-surface-subtle` for alternate rows.
