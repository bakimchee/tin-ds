// Demo content for the news pages. Invented stories, invented people.
const A = 'article.html';
const S = 'section.html';
const pairs = ls => ls.map(([label, href]) => ({ label, href }));

export const sections = [
  { id: 'news', label: 'News', href: S, columns: [
    { title: 'UK', titleHref: S, links: pairs([['England', S], ['Scotland', S], ['Wales', S], ['Northern Ireland', S]]) },
    { title: 'World', titleHref: S, links: pairs([['Europe', S], ['US & Canada', S], ['Asia', S], ['Africa', S]]) },
    { title: 'Politics', titleHref: S, links: pairs([['Parliament', S], ['Local elections', S], ['Policy', S]]) },
  ] },
  { id: 'sport', label: 'Sport', href: S, columns: [
    { title: 'Football', titleHref: S, links: pairs([['Premier League', S], ['Scores & fixtures', S], ['Transfers', S]]) },
    { title: 'More sport', titleHref: S, links: pairs([['Cricket', S], ['Rugby', S], ['Athletics', S], ['Cycling', S]]) },
  ] },
  { id: 'business', label: 'Business', href: S, columns: [
    { title: 'Business', titleHref: S, links: pairs([['Markets', S], ['Your money', S], ['Cost of living', S], ['Technology', S]]) },
  ] },
  { id: 'culture', label: 'Culture', href: S, columns: [
    { title: 'Culture', titleHref: S, links: pairs([['Film', S], ['Music', S], ['Books', S], ['Art & design', S]]) },
  ] },
  { label: 'Travel', href: S },
];

export const people = {
  sam: { name: 'Sam Reeves', role: 'Environment correspondent', href: A, imageSrc: '../img/people-sam.svg' },
  priya: { name: 'Priya Shah', role: 'Political correspondent', href: A, imageSrc: '../img/people-priya.svg' },
  jon: { name: 'Jon Whitely', role: 'North of England reporter', href: A, imageSrc: '../img/people-jon.svg' },
};

export const lead = {
  href: A, headline: 'Flood defences overwhelmed as river hits record level',
  summary: 'More than 400 homes were evacuated overnight as the river passed its 1947 peak, with rest centres opening in two schools.',
  imageSrc: '../img/news-flood.svg', kicker: 'England', kickerHref: S,
  datetime: '2026-09-22T06:30:00Z', timeLabel: '3 hours ago', byline: [people.sam],
};

export const topStories = [
  lead,
  { href: 'live.html', headline: 'MPs debate emergency flood funding', imageSrc: '../img/news-commons.svg', kicker: 'Politics', kickerHref: S, datetime: '2026-09-22T09:15:00Z', timeLabel: 'Updated 4 minutes ago', isLive: true },
  { href: A, headline: 'Minister promises review of flood defences', imageSrc: '../img/news-minister.svg', kicker: 'Politics', kickerHref: S, datetime: '2026-09-22T07:45:00Z', timeLabel: '2 hours ago' },
  { href: A, headline: 'Rail services suspended across the north', imageSrc: '../img/news-rail.svg', kicker: 'England', kickerHref: S, datetime: '2026-09-22T05:10:00Z', timeLabel: '5 hours ago' },
];

export const ukStories = [
  { href: A, headline: 'Watch: the moment the barrier gave way', imageSrc: '../img/news-barrier.svg', kicker: 'England', kickerHref: S, datetime: '2026-09-22T08:05:00Z', timeLabel: '1 hour ago', mediaType: 'video', duration: '2:14' },
  { href: A, headline: 'Schools closed in three counties', summary: 'Councils say buildings will stay shut until water levels drop.', imageSrc: '../img/news-school.svg', kicker: 'Education', kickerHref: S, datetime: '2026-09-22T07:20:00Z', timeLabel: '2 hours ago' },
  { href: A, headline: "'We had ten minutes to get out'", summary: 'Residents describe the moment the water reached their doors.', imageSrc: '../img/news-village.svg', kicker: 'England', kickerHref: S, datetime: '2026-09-22T06:55:00Z', timeLabel: '3 hours ago' },
  { href: A, headline: 'Power restored to 12,000 homes', imageSrc: '../img/news-power.svg', kicker: 'England', kickerHref: S, datetime: '2026-09-22T04:40:00Z', timeLabel: '6 hours ago' },
];

export const moreStories = [
  { href: A, headline: 'Insurers expect claims to pass £400m', summary: 'The industry body says this is already the costliest flood since 2015.', imageSrc: '../img/news-market.svg', kicker: 'Business', kickerHref: S, datetime: '2026-09-22T08:30:00Z', timeLabel: '1 hour ago' },
  { href: A, headline: 'Farmers count the cost of a lost harvest', imageSrc: '../img/news-farm.svg', kicker: 'Business', kickerHref: S, datetime: '2026-09-22T06:00:00Z', timeLabel: '4 hours ago' },
  { href: A, headline: 'In pictures: a town under water', imageSrc: '../img/news-gallery.svg', kicker: 'England', kickerHref: S, datetime: '2026-09-22T07:00:00Z', timeLabel: '3 hours ago', mediaType: 'gallery' },
  { href: A, headline: 'Match postponed as pitch floods', imageSrc: '../img/news-football.svg', kicker: 'Football', kickerHref: S, datetime: '2026-09-22T09:00:00Z', timeLabel: '35 minutes ago' },
];

export const mostRead = [
  { headline: 'Flood defences overwhelmed as river hits record level', href: A },
  { headline: "'We had ten minutes to get out'", href: A },
  { headline: 'Rail services suspended across the north', href: A },
  { headline: 'Minister promises review of flood defences', href: A },
  { headline: 'Insurers expect claims to pass £400m', href: A },
];

export const comments = [
  { id: 'comment-4821', author: { name: 'Jan Kowalski' }, datetime: '2026-09-22T08:12:00Z', timeLabel: '2 hours ago', recommendCount: 24,
    text: 'The defences were only finished last year. Worth asking what standard they were designed to.' },
  { id: 'comment-4822', author: { name: 'Sam Reeves', imageSrc: '../img/people-sam.svg' }, datetime: '2026-09-22T08:40:00Z', timeLabel: '1 hour ago', recommendCount: 61, isStaff: true, isReply: true,
    text: 'We have asked the Environment Agency about the design standard and will add their answer to the story.' },
  { id: 'comment-4823', author: { name: 'Ade Balogun' }, datetime: '2026-09-22T08:55:00Z', timeLabel: '55 minutes ago', recommendCount: 8,
    text: 'Rest centres were open within the hour. Whatever else went wrong, that part worked.' },
  { id: 'comment-4824', author: { name: 'Removed' }, datetime: '2026-09-22T09:02:00Z', isRemoved: true, text: '' },
];

export const livePosts = [
  { id: 'post-0800', datetime: '2026-09-22T08:00:00Z', timeLabel: '08:00', isPinned: true, title: 'What we know so far',
    body: ['The river peaked at 5.2m overnight, the highest since records began in 1878. More than 400 homes have been evacuated and two rest centres are open.'] },
  { id: 'post-0915', datetime: '2026-09-22T09:15:00Z', timeLabel: '09:15', title: 'Barrier breached at Kirkstall', byline: [people.jon],
    body: ['Water is now flowing into the retail park behind the barrier. Staff had moved stock upstairs overnight, but the car park is under half a metre of water.'] },
  { id: 'post-0852', datetime: '2026-09-22T08:52:00Z', timeLabel: '08:52', title: 'Rest centres open in two schools',
    body: ['The council says about 400 people arrived overnight, and that camp beds and hot food are available at both sites.'] },
  { id: 'post-0820', datetime: '2026-09-22T08:20:00Z', timeLabel: '08:20', title: 'Environment Secretary to visit this afternoon', byline: [people.priya],
    body: ['Rachel Adeyemi will travel to the town after the emergency committee meets, her department says.'] },
];

export const footer = {
  columns: [
    { title: 'News', links: pairs([['UK', S], ['World', S], ['Politics', S], ['Business', S], ['Health', S]]) },
    { title: 'More', links: pairs([['Sport', S], ['Culture', S], ['Travel', S], ['Weather', S], ['Newsletters', S]]) },
    { title: 'About us', links: pairs([['About tin news', 'help.html'], ['Contact us', 'help.html'], ['Editorial guidelines', 'help.html'], ['Corrections', 'help.html']]) },
    { title: 'Our policies', links: pairs([['Privacy', 'privacy.html'], ['Cookies', 'help.html'], ['Terms of use', 'terms.html'], ['Accessibility', 'help.html']]) },
  ],
  socialLinks: [
    { icon: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
    { icon: 'x', label: 'X', href: 'https://x.com' },
    { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
    { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com' },
  ],
  legal: '© 2026 tin news. We are not responsible for the content of external sites. Read about our approach to external linking.',
};
