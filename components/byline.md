# Byline

Who wrote a story and what they do, such as "By Sam Reeves, Political correspondent". It can name more than one reporter and say where they are reporting from.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| authors | `{ name, href, role, imageSrc }[]` | — | The reporters, in credit order. Required. |
| location | string | — | Where they are reporting from, such as "Washington". |
| hasAvatar | boolean | `false` | Shows the first author's [avatar.md](avatar.md). |
| children | node | — | Extra credit line, such as "with agencies". |

## Variations

### Default

```emmet
p.byline>{By }+Link[href=/news/people/sam-reeves variant=subtle]{Sam Reeves}+span.byline__role{, Political correspondent}
```

### With avatar

```emmet
p.byline>Avatar[name="Sam Reeves" src=/img/people/sam-reeves.jpg size=sm]+span.byline__names>{By }+Link[href=/news/people/sam-reeves variant=subtle]{Sam Reeves}^span.byline__role{Political correspondent}+span.byline__location{Washington}
```

### Two authors

```emmet
p.byline>{By }+Link[href=/news/people/sam-reeves variant=subtle]{Sam Reeves}+{ and }+Link[href=/news/people/priya-shah variant=subtle]{Priya Shah}
```

### No author page

```emmet
p.byline>{By }+span.byline__names{Sam Reeves}+span.byline__role{, BBC News}
```

## Examples

- **Article header**: under the headline, with the timestamp.
- **Live post**: the reporter who filed that post, with `hasAvatar`.
- **Agency copy**: no author link, just "By PA Media".

## Notes

- Link a name only when there is an author page behind it.
- Keep the role short: a job title, not a biography.
- Uses [avatar.md](avatar.md) and [link.md](link.md).
- Tokens: `--color-text-muted`, `--font-size-200`.
