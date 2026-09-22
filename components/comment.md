# Comment

One reader comment: who wrote it, when, what they said, and the actions on it. Replies nest one level under the comment they answer.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Comment id, used by permalinks and by the reply form. Required. |
| author | `{ name, href, imageSrc }` | — | Who wrote it. Required. |
| datetime | string | — | When it was posted, in ISO 8601. Required. |
| children | string | — | The comment text. Required. |
| recommendCount | number | — | How many readers recommended it. |
| replyCount | number | — | Replies to this comment. |
| isStaff | boolean | `false` | Marks a comment from the newsroom. |
| isRecommended | boolean | `false` | The reader has already recommended it. Renders `aria-pressed=true`. |
| isReply | boolean | `false` | Nested under the comment it answers. |
| isRemoved | boolean | `false` | Text replaced by "This comment was removed by a moderator". |

## Variations

### Default

```emmet
article.comment#comment-4821>div.comment__head>Avatar[name="Jan Kowalski" size=sm]+span.comment__author{Jan Kowalski}+Timestamp[datetime=2026-09-22T08:12:00Z]{2 hours ago}^Text{The defences were only finished last year. Worth asking what they were designed for.}+div.comment__actions>Button[variant=tertiary size=sm iconStart=heart label="Recommend this comment"]{24}+Button[variant=tertiary size=sm]{Reply}
```

### From the newsroom

```emmet
article.comment#comment-4822[data-staff]>div.comment__head>Avatar[name="Sam Reeves" src=/img/people/sam-reeves.jpg size=sm]+span.comment__author{Sam Reeves}+Badge[status=info]{BBC News}+Timestamp[datetime=2026-09-22T08:40:00Z]{1 hour ago}^Text{We have asked the Environment Agency about the design standard and will add their answer here.}
```

### Reply

```emmet
article.comment#comment-4823[data-reply]>div.comment__head>Avatar[name="Ade Balogun" size=sm]+span.comment__author{Ade Balogun}+Timestamp[datetime=2026-09-22T08:55:00Z]{55 minutes ago}^Text{They were built to a one-in-a-hundred-year standard, it says so in the story.}
```

### Removed

```emmet
article.comment#comment-4824[data-removed]>Text[isMuted]{This comment was removed by a moderator}
```

## Examples

- **Comment thread**: a list of comments under an article, see [comment-thread.md](../patterns/comment-thread.md).
- **Newsroom reply**: a journalist answering a question, with `isStaff`.

## Notes

- A removed comment stays in place, so the replies under it still make sense.
- Recommend is a toggle button with `aria-pressed`, and the count sits inside the button.
- Report and moderation actions belong in a menu, not on the comment itself.
- Uses [avatar.md](avatar.md), [timestamp.md](timestamp.md), [text.md](text.md), [badge.md](badge.md) and [button.md](button.md).
- Tokens: `--color-border-default`, `--color-surface-subtle` for a staff comment.
