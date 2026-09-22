// News components and patterns, each mirroring the Emmet in its .md file.
import { x, at, slot, tx, Icon, Heading, Text, Link, Button, Badge, Image, Logo, Input, Select, Chip, Grid, GridItem } from './foundations.mjs';
import { FormField, InputGroup, SearchBar, Pagination, Alert, CharacterCount, Form } from './components.mjs';
import { MainNav } from './patterns.mjs';

const def = (v, d) => (v === d ? undefined : v);
const initials = name => name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();

/* ---------- Components ---------- */

export const Avatar = ({ name, src, size }) => {
  const px = { sm: 24, md: 40, lg: 64 }[size || 'md'];
  return src
    ? x(`img.avatar${at({ src, alt: true, width: px, height: px, 'data-size': def(size, 'md') })}`)
    : x(`span.avatar${at({ 'data-size': def(size, 'md'), 'aria-hidden': 'true' })}${tx(initials(name))}`);
};

export const Timestamp = ({ datetime, prefix, format, isLive }, children) => {
  const attrs = at({ datetime, 'data-format': def(format, 'relative'), 'aria-live': isLive && 'polite' });
  return prefix
    ? x(`time.timestamp${attrs}>span.timestamp__prefix${tx(prefix + ' ')}+span${tx(children)}`)
    : x(`time.timestamp${attrs}${tx(children)}`);
};

export const Byline = ({ authors, location, hasAvatar }) => {
  const names = authors.flatMap((a, i) => [
    i ? x(`{${i === authors.length - 1 ? ' and ' : ', '}}`) : '',
    a.href ? Link({ href: a.href, variant: 'subtle' }, a.name) : x(`span${tx(a.name)}`),
  ]);
  const role = authors[0].role ? x(`span.byline__role${tx(authors[0].role)}`) : '';
  const place = location ? x(`span.byline__location${tx(location)}`) : '';
  if (!hasAvatar) return x(`p.byline>{By }+span.byline__names>${slot(0)}^${slot(1)}+${slot(2)}`, names, role, place);
  return x(`p.byline>${slot(0)}+span.byline__names>{By }+${slot(1)}^${slot(2)}+${slot(3)}`,
    Avatar({ name: authors[0].name, src: authors[0].imageSrc, size: 'sm' }), names, role, place);
};

export const Figure = ({ caption, credit, width, isHero }, content) => {
  const cap = caption || credit
    ? x(`figcaption.figure__caption>${slot(0)}+${slot(1)}`,
      caption ? x(`span.figure__text${tx(caption)}`) : '', credit ? x(`span.figure__credit${tx(credit)}`) : '')
    : '';
  return x(`figure.figure${at({ 'data-width': def(width, 'inline'), 'data-hero': isHero })}>${slot(0)}+${slot(1)}`, content, cap);
};

export const Quote = ({ variant, citeName, citeRole }, children) => {
  const cite = citeName
    ? x(`footer.quote__cite>span.quote__name${tx(citeName)}+${slot(0)}`, citeRole ? x(`span.quote__role${tx(citeRole)}`) : '')
    : '';
  return x(`blockquote.quote${at({ 'data-variant': def(variant, 'pull') })}>p${tx(children)}+${slot(0)}`, cite);
};

export const Callout = ({ id, title, headingLevel = 2, variant, author, points }, children) => {
  const list = points ? x(`ul.callout__list>${slot(0)}`, points.map(p => x(`li${tx(p)}`))) : '';
  return x(`aside.callout${at({ 'data-variant': def(variant, 'default'), 'aria-labelledby': `${id}-title` })}>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}`,
    Heading({ id: `${id}-title`, level: headingLevel, size: 'sm' }, title),
    author ? Byline({ authors: [author], hasAvatar: true }) : '',
    list, children || '');
};

export const MediaPlayer = ({ src, type = 'video', title, posterSrc, duration, captionsSrc, transcriptHref, isLive }) => {
  const meta = [
    isLive ? Badge({ status: 'danger' }, 'Live') : duration ? Icon({ name: 'play' }) : '',
    duration ? x(`span${tx(duration)}`) : isLive ? x(`span${tx('Watch live coverage')}`) : '',
    transcriptHref ? Link({ href: transcriptHref, variant: 'subtle' }, 'Read transcript') : '',
  ].join('');
  const media = type === 'audio'
    ? x(`audio.media-player__audio${at({ controls: true, preload: 'metadata', 'aria-label': title })}>source${at({ src, type: 'audio/mpeg' })}`)
    : x(`video.media-player__video${at({ controls: true, preload: 'metadata', poster: posterSrc, 'aria-label': title })}>source${at({ src, type: 'video/mp4' })}+${slot(0)}`,
      captionsSrc ? x(`track${at({ kind: 'captions', src: captionsSrc, srclang: 'en', label: 'English', default: true })}`) : '');
  return x(`div.media-player${at({ 'data-type': def(type, 'video'), 'data-live': isLive })}>${slot(0)}+${slot(1)}`,
    media, meta ? x(`p.media-player__meta>${slot(0)}`, meta) : '').replace('</track>', '').replace('</source>', '');
};

export const Table = ({ id, caption, columns, rows, rowHeaders, variant, isCaptionHidden }) =>
  x(`section.table${at({ 'data-variant': def(variant, 'default'), tabindex: '0', 'aria-labelledby': `${id}-caption` })}>table>caption.table__caption${at({ id: `${id}-caption`, 'data-visually-hidden': isCaptionHidden })}${tx(caption)}+thead>tr>${slot(0)}^^tbody>${slot(1)}`,
    columns.map(c => x(`th${at({ scope: 'col', 'data-numeric': c.isNumeric })}${tx(c.label)}`)),
    rows.map(r => x(`tr>${slot(0)}`, r.map((cell, i) => (i === 0 && rowHeaders
      ? x(`th[scope=row]${tx(cell)}`)
      : x(`td${at({ 'data-numeric': columns[i].isNumeric })}${tx(cell)}`))))));

export const Comment = ({ id, author, datetime, timeLabel, recommendCount, isStaff, isReply, isRemoved }, children) => {
  if (isRemoved) return x(`article.comment${at({ id, 'data-removed': true })}>${slot(0)}`, Text({ isMuted: true }, 'This comment was removed by a moderator'));
  const head = x(`div.comment__head>${slot(0)}+span.comment__author${tx(author.name)}+${slot(1)}+${slot(2)}`,
    Avatar({ name: author.name, src: author.imageSrc, size: 'sm' }),
    isStaff ? Badge({ status: 'info' }, 'tin news') : '',
    Timestamp({ datetime }, timeLabel));
  return x(`article.comment${at({ id, 'data-staff': isStaff, 'data-reply': isReply })}>${slot(0)}+${slot(1)}+${slot(2)}`,
    head, Text({}, children),
    x(`div.comment__actions>${slot(0)}+${slot(1)}`,
      Button({ variant: 'tertiary', size: 'sm', iconStart: 'heart', label: `Recommend this comment by ${author.name}` }, String(recommendCount ?? 0)),
      Button({ variant: 'tertiary', size: 'sm', iconStart: 'comment', label: `Reply to ${author.name}` }, 'Reply')));
};

export const ShareBar = ({ url, title, networks = ['facebook', 'x', 'whatsapp', 'mail'], hasCopyLink = true, layout }) => {
  const targets = {
    facebook: { icon: 'facebook', label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    x: { icon: 'x', label: 'Share on X', href: `https://x.com/intent/post?url=${encodeURIComponent(url)}` },
    whatsapp: { icon: 'whatsapp', label: 'Share on WhatsApp', href: `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}` },
    mail: { icon: 'mail', label: 'Share by email', href: `mailto:?subject=${encodeURIComponent(title)}` },
  };
  return x(`div.share-bar${at({ 'data-layout': def(layout, 'inline'), role: 'group', 'aria-label': 'Share this story' })}>span.share-bar__label[aria-hidden=true]{Share}+${slot(0)}+${slot(1)}`,
    networks.map(n => x(`a.link${at({ href: targets[n].href, 'data-variant': 'subtle', target: '_blank', rel: 'noopener' })}>${slot(0)}+span[data-visually-hidden]${tx(targets[n].label)}`, Icon({ name: targets[n].icon }))),
    hasCopyLink ? Button({ variant: 'tertiary', size: 'sm', iconStart: 'link', label: 'Copy link to this story' }, 'Copy link') : '');
};

export const AdSlot = ({ size, label = 'Advertisement', isSticky }) =>
  x(`div.ad-slot${at({ 'data-size': def(size, 'mpu'), 'data-sticky': isSticky })}>span.ad-slot__label${tx(label)}+div.ad-slot__frame`);

/* ---------- Patterns ---------- */

export const StoryCard = ({ href, headline, headingLevel = 3, imageSrc, imageAlt = '', summary, kicker, kickerHref, datetime, timeLabel, mediaType, duration, isLive, layout, size, byline }) => {
  const big = size === 'lg';
  const media = imageSrc && layout !== 'text'
    ? x(`div.story-card__media>${slot(0)}+${slot(1)}`,
      Image({ src: imageSrc, alt: imageAlt, ratio: big ? 'wide' : layout === 'horizontal' ? 'square' : 'landscape', fit: 'cover', width: big ? 800 : 400, height: big ? 450 : layout === 'horizontal' ? 400 : 300, isEager: big }),
      isLive ? Badge({ status: 'danger' }, 'Live')
        : mediaType ? x(`span.story-card__duration>${slot(0)}+span${tx(duration || (mediaType === 'gallery' ? 'Gallery' : 'Watch'))}`, Icon({ name: mediaType === 'gallery' ? 'grid' : 'play' })) : '')
    : '';
  const body = x(`div.story-card__body>${slot(0)}+h${headingLevel}.story-card__title>a.story-card__link${at({ href })}${tx(headline)}^${slot(1)}+${slot(2)}+${slot(3)}`,
    kicker ? x(`span.story-card__kicker>${slot(0)}`, Link({ href: kickerHref, variant: 'subtle' }, kicker)) : '',
    summary ? Text({ size: big ? 'md' : 'sm', isMuted: !big }, summary) : '',
    byline ? Byline({ authors: byline }) : '',
    datetime ? Timestamp({ datetime, isLive }, timeLabel) : '');
  return x(`article.story-card${at({ 'data-layout': def(layout, 'stacked'), 'data-size': def(size, 'md'), 'data-live': isLive, 'data-media-type': mediaType })}>${slot(0)}+${slot(1)}`, media, body);
};

export const StoryList = ({ id, title, headingLevel = 2, stories, layout, columns = 4, moreHref, moreLabel, isTitleHidden }) => {
  const header = x(`div.story-list__header>${slot(0)}+${slot(1)}`,
    Heading({ id: `${id}-title`, level: headingLevel, size: 'lg', isVisuallyHidden: isTitleHidden }, title),
    moreHref ? Link({ href: moreHref, variant: 'standalone', iconEnd: 'chevron-right' }, moreLabel || `More ${title.toLowerCase()}`) : '');
  let grid;
  if (layout === 'lead') {
    const [lead, ...rest] = stories;
    grid = Grid({ as: 'ul', columns: 1, columnsLg: 12 }, [
      GridItem({ as: 'li', spanLg: 8 }, StoryCard({ ...lead, size: 'lg', headingLevel: 3 })),
      ...rest.map(s => GridItem({ as: 'li', spanLg: 4 }, StoryCard({ ...s, layout: 'horizontal' }))),
    ]);
  } else if (layout === 'list') {
    grid = Grid({ as: 'ul', columns: 1, gap: 'sm' }, stories.map(s => GridItem({ as: 'li' }, StoryCard({ ...s, layout: 'horizontal' }))));
  } else {
    grid = Grid({ as: 'ul', columns: 1, columnsSm: 2, columnsLg: columns }, stories.map(s => GridItem({ as: 'li' }, StoryCard(s))));
  }
  return x(`section.story-list${at({ 'data-layout': def(layout, 'grid'), 'aria-labelledby': `${id}-title` })}>${slot(0)}+${slot(1)}`, header, grid);
};

export const MostRead = ({ id, title = 'Most read', stories, headingLevel = 2, isNumbered = true }) =>
  x(`section.most-read${at({ 'data-numbered': isNumbered ? undefined : 'false', 'aria-labelledby': `${id}-title` })}>${slot(0)}+ol.most-read__list>${slot(1)}`,
    Heading({ id: `${id}-title`, level: headingLevel, size: 'md' }, title),
    stories.map(s => x(`li.most-read__item>${slot(0)}`, Link({ href: s.href, variant: 'subtle' }, s.headline))));

export const ArticleHeader = ({ headline, standfirst, kicker, kickerHref, byline, datetime, timeLabel, updatedDatetime, updatedLabel, readingTime, share, hero, isLive }) => {
  const flags = isLive ? x(`div.article-header__flags>${slot(0)}+${slot(1)}`, Badge({ status: 'danger' }, 'Live'),
    kicker ? x(`span.article-header__kicker>${slot(0)}`, Link({ href: kickerHref, variant: 'subtle' }, kicker)) : '')
    : kicker ? x(`span.article-header__kicker>${slot(0)}`, Link({ href: kickerHref, variant: 'subtle' }, kicker)) : '';
  const meta = x(`div.article-header__meta>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}`,
    byline ? Byline({ ...byline, hasAvatar: true }) : '',
    datetime ? Timestamp({ datetime, format: 'absolute', prefix: 'Published' }, timeLabel) : '',
    updatedDatetime ? Timestamp({ datetime: updatedDatetime, prefix: 'Updated', isLive }, updatedLabel) : '',
    readingTime ? x(`span.article-header__reading-time${tx(readingTime)}`) : '');
  return x(`header.article-header${at({ 'data-live': isLive })}>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}+${slot(4)}+${slot(5)}`,
    flags, Heading({ level: 1, size: 'xl' }, headline),
    standfirst ? Text({ size: 'lg' }, standfirst) : '',
    meta, share || '', hero || '');
};

export const ArticleBody = ({ hasDropCap }, blocks) =>
  x(`div.article-body${at({ 'data-drop-cap': hasDropCap })}>${slot(0)}`, blocks);

export const RelatedStories = ({ id, title = 'More on this story', headingLevel = 2, stories = [], layout, topics }) => {
  const content = topics
    ? x(`ul.related-stories__topics>${slot(0)}`, topics.map(t => x(`li>${slot(0)}`, Chip({ href: t.href }, t.label))))
    : layout === 'grid'
      ? Grid({ as: 'ul', columns: 1, columnsSm: 2, columnsLg: 4 }, stories.map(s => GridItem({ as: 'li' }, StoryCard(s))))
      : Grid({ as: 'ul', columns: 1, gap: 'sm' }, stories.map(s => GridItem({ as: 'li' }, StoryCard({ ...s, layout: 'text' }))));
  return x(`section.related-stories${at({ 'data-layout': def(layout, 'list'), 'aria-labelledby': `${id}-title` })}>${slot(0)}+${slot(1)}`,
    Heading({ id: `${id}-title`, level: headingLevel, size: 'md' }, title), content);
};

export const LiveBlog = ({ id, title = 'Live updates', posts, summary, updatedDatetime, updatedLabel, isEnded, newPostCount, olderHref }) => {
  const status = x(`div.live-blog__status>${slot(0)}+${slot(1)}+${slot(2)}`,
    isEnded ? Badge({}, 'Coverage ended') : Badge({ status: 'danger' }, 'Live'),
    Heading({ id: `${id}-title`, level: 2, size: 'lg' }, title),
    updatedDatetime ? Timestamp({ datetime: updatedDatetime, isLive: !isEnded }, updatedLabel) : '');
  const list = x(`ol.live-blog__posts>${slot(0)}`, posts.map(p => x(`li.live-blog__post${at({ id: p.id, 'data-pinned': p.isPinned })}>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}`,
    x(`div.live-blog__meta>${slot(0)}+${slot(1)}+${slot(2)}`,
      p.isPinned ? Badge({ status: 'info' }, 'Pinned') : '',
      Timestamp({ datetime: p.datetime }, p.timeLabel),
      p.byline ? Byline({ authors: p.byline }) : ''),
    Heading({ level: 3, size: 'sm' }, p.title),
    (Array.isArray(p.body) ? p.body : [p.body]).map(b => (typeof b === 'string' ? Text({}, b) : b)).join(''),
    p.share || '')));
  return x(`section.live-blog${at({ 'data-ended': isEnded, 'aria-labelledby': `${id}-title` })}>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}+${slot(4)}`,
    status, summary || '',
    newPostCount ? Button({ variant: 'secondary', size: 'sm', iconStart: 'chevron-up' }, `${newPostCount} new posts`) : '',
    list,
    olderHref ? Link({ href: olderHref, variant: 'standalone', iconEnd: 'chevron-right' }, 'Earlier updates') : '');
};

export const CommentThread = ({ id, count, comments, sortOptions, action, page = 1, pageCount, isOpen = true, isSignedIn, maxLength = 1000 }) => {
  const header = x(`div.comment-thread__header>${slot(0)}+${slot(1)}`,
    Heading({ id: `${id}-title`, level: 2, size: 'lg' }, `Comments (${count})`),
    sortOptions ? x(`form.comment-thread__sort${at({ action, method: 'get' })}>${slot(0)}+${slot(1)}`,
      FormField({ id: 'comment-sort', label: 'Sort by', layout: 'inline' }, Select({ id: 'comment-sort', name: 'sort', options: sortOptions })),
      Button({ type: 'submit', variant: 'secondary', size: 'sm' }, 'Sort')) : '');
  const box = !isOpen
    ? Alert({ status: 'info' }, 'Comments on this story are closed.')
    : isSignedIn
      ? Form({ action, submitLabel: 'Post comment' }, CharacterCount({ id: 'comment-text', name: 'text', label: 'Add a comment', maxLength, rows: 4 }))
      : Alert({ status: 'info' }, x(`${slot(0)}+${slot(1)}`, Text({}, 'Sign in to join the conversation.'), Button({ href: 'account.html', variant: 'secondary' }, 'Sign in')));
  return x(`section.comment-thread${at({ 'data-closed': !isOpen, 'aria-labelledby': `${id}-title` })}>${slot(0)}+${slot(1)}+ol.comment-thread__list>${slot(2)}^${slot(3)}`,
    header, box,
    comments.map(c => x(`li>${slot(0)}`, Comment(c, c.text))),
    pageCount ? Pagination({ page, pageCount, hrefTemplate: `${action}?commentPage={page}`, variant: 'compact' }) : '');
};

export const NewsletterSignup = ({ id, title, description, action, ctaLabel = 'Sign up', privacyHref, variant, isSignedUp }) => {
  const inline = variant === 'inline';
  const heading = Heading({ id: `${id}-title`, level: 2, size: inline ? 'sm' : 'md' }, inline ? `Sign up for ${title}` : title);
  if (isSignedUp) {
    return x(`aside.newsletter-signup${at({ 'aria-labelledby': `${id}-title` })}>${slot(0)}+${slot(1)}`, heading,
      Alert({ status: 'success', isLive: true }, `You're signed up. The next ${title} arrives tomorrow morning.`));
  }
  const form = x(`form${at({ action, method: 'post' })}>${slot(0)}`,
    FormField({ id: `${id}-email`, label: 'Email address', isLabelHidden: inline },
      InputGroup({}, Input({ id: `${id}-email`, type: 'email', name: 'email', autocomplete: 'email', isRequired: true, placeholder: inline ? 'you@example.com' : undefined }),
        Button({ type: 'submit', variant: 'primary' }, ctaLabel))));
  return x(`aside.newsletter-signup${at({ 'data-variant': def(variant, 'default'), 'aria-labelledby': `${id}-title` })}>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}`,
    heading,
    description ? Text({ size: inline ? 'sm' : 'md' }, description) : '',
    form,
    privacyHref && !inline ? x(`small.text[data-size=sm data-muted]>{We may send you information about our other newsletters. Read our }+${slot(0)}+{.}`, Link({ href: privacyHref }, 'privacy notice')) : '');
};

export const TopicHeader = ({ title, description, followHref, isFollowing, relatedTopics }) =>
  x(`header.topic-header>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}`,
    Heading({ level: 1, size: 'xl' }, title),
    description ? Text({ size: 'lg', isMuted: true }, description) : '',
    followHref ? x(`form.topic-header__follow${at({ action: followHref, method: 'post' })}>${slot(0)}`,
      Button({ type: 'submit', variant: 'secondary', iconStart: isFollowing ? 'check' : 'plus' }, isFollowing ? 'Following' : 'Follow')) : '',
    relatedTopics ? x(`ul.topic-header__topics>${slot(0)}`, relatedTopics.map(t => x(`li>${slot(0)}`, Chip({ href: t.href }, t.label)))) : '');

export const Masthead = ({ sections, datetime, dateLabel, edition, isSignedIn, hasSearch = true, variant }) => {
  if (variant === 'minimal') {
    return x(`header.masthead[data-variant=minimal]>div.masthead__bar>${slot(0)}+ul.masthead__actions>li>${slot(1)}`,
      Logo({ href: 'index.html', label: 'tin news', size: 'sm' }),
      Link({ href: 'account.html', variant: 'subtle', iconStart: 'user' }, isSignedIn ? 'Your account' : 'Sign in'));
  }
  const editions = edition ? x(`ul.masthead__editions[aria-label=Edition]>${slot(0)}`,
    edition.map(e => x(`li>${slot(0)}`, Link({ href: e.href, variant: 'subtle', isCurrent: e.isCurrent }, e.label)))) : '';
  return x(`a.site-header__skip[href=#main]{Skip to main content}+header.masthead>div.masthead__bar>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}+${slot(4)}+ul.masthead__actions>li>${slot(5)}^^^${slot(6)}+${slot(7)}`,
    Button({ variant: 'tertiary', isIconOnly: true, iconStart: 'menu', label: 'Menu', command: 'show-modal', commandFor: 'menu' }),
    Logo({ href: 'index.html', label: 'tin news' }),
    datetime ? Timestamp({ datetime, format: 'absolute' }, dateLabel) : '',
    hasSearch ? SearchBar({ action: 'section.html', placeholder: 'Search news' }) : '',
    editions,
    Link({ href: 'account.html', variant: 'subtle', iconStart: 'user' }, isSignedIn ? 'Your account' : 'Sign in'),
    MainNav({ departments: sections, allLabel: 'All' }),
    MainNav({ departments: sections, variant: 'drawer', allLabel: 'All', drawerLinks: [{ label: 'Sign in or register', href: 'account.html', icon: 'user' }, { label: 'Your saved stories', href: 'account.html', icon: 'bookmark' }] }));
};
