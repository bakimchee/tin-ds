# Timestamp

When a story was published or last updated. It is a `time` element, so the exact moment stays in the markup even when the visible text is relative, such as "3 hours ago".

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| datetime | string | — | The moment in ISO 8601, such as `2026-09-22T06:30:00Z`. Renders `datetime`. Required. |
| prefix | string | — | Label before the time, such as "Published" or "Updated". |
| format | `relative` \| `absolute` | `relative` | `relative` reads "3 hours ago", `absolute` reads "22 September 2026". |
| isLive | boolean | `false` | Updates while the page is open, on a live story. Renders `aria-live=polite`. |
| children | string | — | The visible text. |

## Variations

### Relative

```emmet
time.timestamp[datetime=2026-09-22T06:30:00Z]{3 hours ago}
```

### Published

```emmet
time.timestamp[datetime=2026-09-22T06:30:00Z data-format=absolute]>span.timestamp__prefix{Published }+span{22 September 2026}
```

### Updated

```emmet
time.timestamp[datetime=2026-09-22T09:15:00Z]>span.timestamp__prefix{Updated }+span{18 minutes ago}
```

### Live post

```emmet
time.timestamp[datetime=2026-09-22T09:15:00Z aria-live=polite]{09:15}
```

## Examples

- **Story card**: relative, with no prefix.
- **Article header**: "Published 22 September 2026", with "Updated 18 minutes ago" beside it when the story has changed.
- **Live post**: the time of day, because readers follow the order of posts.

## Notes

- Relative text is worked out when the page is built, so it needs refreshing on a long-lived page. The `datetime` value is always exact.
- Switch to an absolute date after a week: "3 hours ago" stops being useful.
- Use one timestamp per story card. Two dates on a card is noise.
- Tokens: `--color-text-muted`, `--font-size-100`.
