# Masthead

The top of every news page: the logo, today's date, the sections navigation, search and sign in. It is the news version of [site-header.md](site-header.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| sections | `MainNav.departments` | — | Sections, passed to [main-nav.md](main-nav.md). Required. |
| currentSection | string | — | `id` of the section the page belongs to. |
| datetime | string | — | Today, in ISO 8601. |
| dateLabel | string | — | Visible date, such as "Tuesday 22 September 2026". |
| edition | `{ label, href }[]` | — | UK, US and international editions. |
| isSignedIn | boolean | `false` | Shows "Your account" instead of "Sign in". |
| hasSearch | boolean | `true` | Shows the search bar. |
| variant | `default` \| `minimal` | `default` | `minimal` is the logo and sign in only, for a live page or a video page. |

## Variations

### Default

```emmet
a.site-header__skip[href=#main]{Skip to main content}+header.masthead>div.masthead__bar>Button[variant=tertiary isIconOnly iconStart=menu label=Menu command=show-modal commandFor=menu]+Logo[label="tin news"]+Timestamp[datetime=2026-09-22 format=absolute]{Tuesday 22 September 2026}+SearchBar[placeholder="Search news"]+ul.masthead__actions>(li>Link[href=/account variant=subtle iconStart=user]{Sign in})^^MainNav+MainNav[variant=drawer]
```

### Minimal

```emmet
header.masthead[data-variant=minimal]>div.masthead__bar>Logo[label="tin news" size=sm]+ul.masthead__actions>(li>Link[href=/account variant=subtle iconStart=user]{Sign in})
```

### With editions

```emmet
a.site-header__skip[href=#main]{Skip to main content}+header.masthead>div.masthead__bar>Logo[label="tin news"]+SearchBar[placeholder="Search news"]+ul.masthead__editions[aria-label=Edition]>(li>Link[href=/news variant=subtle isCurrent]{UK})+(li>Link[href=/news/us variant=subtle]{US})+(li>Link[href=/news/world variant=subtle]{International})^^MainNav+MainNav[variant=drawer]
```

## Examples

- **Front page**: logo, date, search, sections.
- **Article**: the same, so readers can move to another section.
- **Live page**: `minimal`, to keep the updates in view.

## Notes

- Sections are [main-nav.md](main-nav.md): a bar on desktop and a drawer on mobile, with the same content.
- The date is for readers, not for the page: keep it out of the `h1`, which belongs to the story.
- Editions are links to different front pages, not a filter on this one.
- Uses [logo.md](../components/logo.md), [search-bar.md](../components/search-bar.md), [link.md](../components/link.md), [button.md](../components/button.md), [timestamp.md](../components/timestamp.md) and [main-nav.md](main-nav.md).
