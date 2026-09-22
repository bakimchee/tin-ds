# Comment Thread

Reader comments under an article: how many there are, how they are sorted, the comments themselves, and the box for adding one.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Prefix for the heading id, `{id}-title`. Required. |
| count | number | — | Total comments. Required. |
| comments | `Comment[]` | — | This page of comments. Required. |
| sortOptions | `{ value, label }[]` | — | Such as Newest, Oldest, Most recommended. |
| action | string | — | Where a new comment is posted. Required. |
| page | number | `1` | Current page. |
| pageCount | number | — | Comment pages. |
| isOpen | boolean | `true` | Comments are open. When `false`, the form is replaced by a closed message. |
| isSignedIn | boolean | `false` | Shows the comment box rather than a sign-in prompt. |
| maxLength | number | `1000` | Character limit for a comment. |

## Variations

### Default

```emmet
section.comment-thread[aria-labelledby=comments-title]>div.comment-thread__header>Heading#comments-title[level=2 size=lg]{Comments (248)}+form.comment-thread__sort[action=/news/articles/c2x81ydlk4no method=get]>FormField[id=comment-sort label="Sort by" layout=inline]>Select#comment-sort[name=sort]^Button[type=submit variant=secondary size=sm]{Sort}^^Form[action=/comments method=post submitLabel="Post comment"]>CharacterCount[id=comment-text name=text label="Add a comment" maxLength=1000 rows=4]^^ol.comment-thread__list>(li>Comment)+(li>Comment[isReply])+(li>Comment)^Pagination[variant=compact]
```

### Signed out

```emmet
section.comment-thread[aria-labelledby=comments-title]>Heading#comments-title[level=2 size=lg]{Comments (248)}+Alert[status=info]>Text{Sign in to join the conversation.}+Button[href="/account/sign-in?next=/news/articles/c2x81ydlk4no" variant=secondary]{Sign in}^^ol.comment-thread__list>(li>Comment)*3
```

### Closed

```emmet
section.comment-thread[data-closed aria-labelledby=comments-title]>Heading#comments-title[level=2 size=lg]{Comments (248)}+Alert[status=info]{Comments on this story are closed.}+ol.comment-thread__list>(li>Comment)*3
```

## Examples

- **Open story**: sort control, comment box, then the comments.
- **Signed out**: a sign-in prompt where the box would be.
- **Closed**: comments stay readable after the thread closes.

## Notes

- Comments are an `ol`: the order is the sort order, and it matters.
- A reply is nested in the list item of the comment it answers, one level only. Deeper nesting is unreadable on a phone.
- The heading includes the count, so a screen reader user knows the size of the thread before entering it.
- Sorting is a real form submit, so it works without JavaScript.
- House rules and reporting belong next to the box, before someone writes.
- Uses [comment.md](../components/comment.md), [heading.md](../components/heading.md), [form.md](form.md), [character-count.md](../components/character-count.md), [form-field.md](../components/form-field.md), [select.md](../components/select.md), [button.md](../components/button.md), [alert.md](../components/alert.md), [text.md](../components/text.md) and [pagination.md](../components/pagination.md).
