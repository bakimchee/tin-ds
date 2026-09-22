# Newsletter Signup

A block offering an email newsletter, in the middle of an article or at the end of a section page. The site footer has its own signup; this one is for a named newsletter.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Prefix for the field and heading ids. Required. |
| title | string | — | Newsletter name, such as "The Briefing". Required. |
| description | string | — | What it is and how often it arrives. |
| action | string | — | Where the form is sent. Required. |
| ctaLabel | string | `Sign up` | Button text. |
| privacyHref | string | — | Link to the privacy notice. |
| variant | `default` \| `inline` | `default` | `inline` is the narrow version inside an article. |
| isSignedUp | boolean | `false` | Shows a confirmation instead of the form. |

## Variations

### Default

```emmet
aside.newsletter-signup[aria-labelledby=briefing-title]>Heading#briefing-title[level=2 size=md]{The Briefing}+Text{The day's main stories, in your inbox every weekday morning.}+Form[action=/newsletters/briefing method=post submitLabel="Sign up"]>FormField[id=briefing-email label="Email address"]>InputGroup>Input#briefing-email[type=email name=email autocomplete=email isRequired]+Button[type=submit variant=primary]{Sign up}^^^^Text[as=small size=sm isMuted]>{We may send you information about our other newsletters. Read our }+Link[href=/privacy]{privacy notice}+{.}
```

### Inside an article

```emmet
aside.newsletter-signup[data-variant=inline aria-labelledby=briefing-inline-title]>Heading#briefing-inline-title[level=2 size=sm]{Sign up for The Briefing}+Text[size=sm]{The day's main stories, every weekday morning.}+Form[action=/newsletters/briefing method=post submitLabel="Sign up"]>FormField[id=briefing-inline-email label="Email address" isLabelHidden]>InputGroup>Input#briefing-inline-email[type=email name=email autocomplete=email isRequired placeholder="you@example.com"]+Button[type=submit variant=primary]{Sign up}
```

### Signed up

```emmet
aside.newsletter-signup[aria-labelledby=briefing-title]>Heading#briefing-title[level=2 size=md]{The Briefing}+Alert[status=success isLive]{You're signed up. The next Briefing arrives tomorrow morning.}
```

## Examples

- **Article**: `inline`, after the third or fourth paragraph.
- **Section page**: the default block at the foot, for that section's newsletter.
- **Confirmation**: `isSignedUp` after the form is submitted.

## Notes

- Say how often it arrives before asking for an address. "Every weekday morning" is the reason someone signs up.
- The label stays in the markup even when it is hidden in the inline version. A placeholder is not a label.
- One newsletter per block. A list of newsletters is its own page.
- Uses [heading.md](../components/heading.md), [text.md](../components/text.md), [form.md](form.md), [form-field.md](../components/form-field.md), [input-group.md](../components/input-group.md), [input.md](../components/input.md), [button.md](../components/button.md), [link.md](../components/link.md) and [alert.md](../components/alert.md).
