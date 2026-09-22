# Avatar

A small round picture of a person, shown beside their name in a byline, a comment or on an author page. When there is no picture it shows their initials instead.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| name | string | — | The person's name. Sets the initials, and the `alt` when the avatar stands on its own. Required. |
| src | string | — | Picture URL. Without it, the initials show. |
| size | `sm` \| `md` \| `lg` | `md` | 24px, 40px or 64px. |
| isDecorative | boolean | `true` | The name is usually right next to the avatar, so the picture is decorative and `alt` is empty. |

## Variations

### Picture

```emmet
img.avatar[src=/img/people/sam-reeves.jpg alt="" width=40 height=40]
```

### Initials

```emmet
span.avatar[data-size=sm aria-hidden=true]{SR}
```

### On its own

```emmet
img.avatar[src=/img/people/sam-reeves.jpg alt="Sam Reeves" width=64 height=64 data-size=lg]
```

## Examples

- **Byline**: `sm`, next to the reporter's name.
- **Comment**: `sm`, next to the commenter's name.
- **Author page**: `lg`, above the name and biography.

## Notes

- When the name is visible next to it, the avatar is decorative: `alt=""` on a picture, `aria-hidden=true` on initials. Otherwise `alt` is the person's name.
- Initials are the first letter of the first and last name, at most two.
- Tokens: `--radius-round`, `--color-surface-subtle`, `--color-text-muted`.
