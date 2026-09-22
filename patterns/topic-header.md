# Topic Header

The top of a section or topic page: what the subject is, a line about it, and a way to follow it.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | — | Section or topic name, the page `h1`. Required. |
| description | string | — | One line about the subject. |
| followHref | string | — | Adds a follow button, which posts to this URL. |
| isFollowing | boolean | `false` | The reader already follows it. The button says "Following". |
| relatedTopics | `{ label, href }[]` | — | Nearby subjects, as [chip.md](../components/chip.md) links. |
| imageSrc | string | — | Banner picture, for a big section such as Sport. |

## Variations

### Default

```emmet
header.topic-header>Heading[level=1 size=xl]{Flooding}+Text[size=lg isMuted]{Coverage of floods across the UK, from rivers and rainfall to the defences built to hold them back.}+form.topic-header__follow[action=/news/topics/flooding/follow method=post]>Button[type=submit variant=secondary iconStart=plus]{Follow}
```

### Following

```emmet
header.topic-header>Heading[level=1 size=xl]{Flooding}+form.topic-header__follow[action=/news/topics/flooding/unfollow method=post]>Button[type=submit variant=secondary iconStart=check]{Following}
```

### With related topics

```emmet
header.topic-header>Heading[level=1 size=xl]{Flooding}+Text[size=lg isMuted]{Coverage of floods across the UK.}+ul.topic-header__topics>(li>Chip[href=/news/topics/environment-agency]{Environment Agency})+(li>Chip[href=/news/topics/climate]{Climate})+(li>Chip[href=/news/england/leeds]{Leeds})
```

## Examples

- **Section page**: "Politics", with no description.
- **Topic page**: "Flooding", with a description and related topics.
- **Followed topic**: the button reads "Following" and unfollows when pressed.

## Notes

- Follow is a form post, so it works signed in without JavaScript. Signed out, it goes to sign-in first.
- The button's text changes with the state. Don't rely on colour alone to show that someone follows a topic.
- Uses [heading.md](../components/heading.md), [text.md](../components/text.md), [button.md](../components/button.md) and [chip.md](../components/chip.md).
