// Builds /site from the page templates in pages/*.md.
import fs from 'node:fs';
import { x, slot, tx, Heading, Text, Link, Button, Image, Grid, GridItem } from './foundations.mjs';
import { Breadcrumb, Card, Banner, Carousel, ProductCard, ProductGallery, Alert, BasketItem, OrderSummary, ProgressSteps } from './components.mjs';
import { CookieBanner, SiteHeader, SiteFooter, FilterPanel, ListingToolbar, ProductGrid, ProductBuyBox, ProductInfo, AddedToBasketDialog, CheckoutForm } from './patterns.mjs';
import { Pagination } from './components.mjs';
import { Masthead, StoryList, StoryCard, MostRead, AdSlot, ArticleHeader, ArticleBody, Figure, Quote, Callout, MediaPlayer, Table, RelatedStories, CommentThread, NewsletterSignup, TopicHeader, LiveBlog, ShareBar, Timestamp, Byline } from './news.mjs';
import * as d from './data.mjs';
import * as n from './news-data.mjs';
import { buildFormsGallery } from './gallery.mjs';

// Output: sites/<name>-site for pages, with site.css, img/ and video/ shared beside them.
const sites = new URL('..', import.meta.url).pathname;
const out = `${sites}shop-site`;
const newsOut = `${sites}news-site`;
for (const dir of [out, newsOut, `${sites}img`]) fs.mkdirSync(dir, { recursive: true });

// page.md: Document
const page = (file, title, pageType, body, { header = {}, footer = {} } = {}) => {
  const html = x(`html[lang=en-GB]>head>meta[charset=utf-8]+meta[name=viewport content="width=device-width, initial-scale=1"]+title${tx(`${title} | tin`)}+link[rel=stylesheet href=../../tokens.css]+link[rel=stylesheet href=../../breakpoints.css]+link[rel=stylesheet href=../../grid.css]+link[rel=stylesheet href=../site.css]^body>${slot(3)}+${slot(0)}+main#main.page[data-page=${pageType}]>${slot(1)}^${slot(2)}`,
    SiteHeader({ uspItems: d.usp, departments: d.departments, basketCount: 2, ...header }), body, SiteFooter({ ...d.footer, ...footer }),
    CookieBanner({ description: 'We use cookies to make our site work, remember your trolley and show you relevant offers.' }));
  fs.writeFileSync(`${out}/${file}`, `<!DOCTYPE html>\n${html}\n`);
};
const section = (id, title, content) => x(`section.page__section${`[aria-labelledby=${id}-title]`}>${slot(0)}+${slot(1)}`, Heading({ id: `${id}-title`, level: 2, size: 'lg' }, title), content);
const tiles = (columns, items) => Grid({ as: 'ul', ...columns }, items.map(i => GridItem({ as: 'li' }, i)));
const slug = s => s.toLowerCase().replace(/[^a-z]+/g, '-');

// home.md
page('index.html', 'Shop TVs, appliances, toys and more', 'home', [
  Heading({ level: 1, isVisuallyHidden: true }, 'tin: tech, home, toys and more'),
  Carousel({ id: 'hero', title: 'Featured offers', variant: 'slides', isTitleHidden: true }, [
    Banner({ eyebrow: 'Summer Sale', title: 'Up to half price on big brands', description: 'Thousands of deals across tech, home and toys.', imageSrc: '../img/hero-sale.svg', ctaLabel: 'Shop the sale', ctaHref: 'product-listing.html', isEager: true, headingLevel: 3 }),
    Banner({ eyebrow: 'Appliance event', title: 'Save up to £200 on laundry', description: 'Free next day delivery and recycling of your old appliance.', imageSrc: '../img/hero-laundry.svg', ctaLabel: 'Shop washing machines', ctaHref: 'washing-machines.html', headingLevel: 3 }),
    Banner({ title: '0% interest for 12 months', description: 'On orders over £99 with tin Pay. Credit subject to status.', imageSrc: '../img/hero-finance.svg', ctaLabel: 'Find out more', ctaHref: 'help.html', align: 'center', headingLevel: 3 }),
  ]),
  section('categories', 'Shop by category', tiles({ columns: 3, columnsMd: 4, columnsLg: 6 }, d.categories.map(c => Card({ variant: 'category', href: c === 'Washing machines' ? 'washing-machines.html' : 'product-listing.html', title: c, imageSrc: `../img/cat-${slug(c)}.svg` })))),
  section('deals', "Today's top deals", tiles({ columns: 1, columnsSm: 2, columnsLg: 4 }, [
    Card({ variant: 'promo', href: 'product-listing.html', title: 'Up to £200 off laptops', description: 'Selected models. Ends Sunday.', imageSrc: '../img/promo.svg', imageRatio: 'landscape', ctaLabel: 'Shop now' }),
    Card({ variant: 'promo', href: 'product-listing.html', title: '3 for 2 on toys', description: 'Mix and match across hundreds of toys.', imageSrc: '../img/promo.svg', imageRatio: 'landscape', ctaLabel: 'Shop now' }),
    Card({ variant: 'promo', href: 'product-listing.html', title: 'Half price garden furniture', description: 'While stocks last.', imageSrc: '../img/promo.svg', imageRatio: 'landscape', ctaLabel: 'Shop now' }),
    Card({ variant: 'promo', href: 'washing-machines.html', title: 'Free installation on appliances', description: 'Worth £30.', imageSrc: '../img/promo.svg', imageRatio: 'landscape', ctaLabel: 'Shop now' }),
  ])),
  Carousel({ id: 'trending', title: 'Trending this week', viewAllHref: 'product-listing.html' }, d.tvs.slice(0, 8).map(ProductCard)),
  Banner({ variant: 'strip', align: 'center', title: 'Free delivery on orders over £50', ctaLabel: 'Find out more', ctaHref: 'help.html' }),
  Carousel({ id: 'top-deals', title: 'Top deals on tech', viewAllHref: 'product-listing.html' }, [...d.accessories, ...d.tvs.slice(4, 8)].map(ProductCard)),
  section('brands', 'Shop by brand', tiles({ columns: 3, columnsLg: 6 }, ['Samsung', 'LG', 'Sony', 'Apple', 'LEGO', 'Dyson'].map(b => Card({ variant: 'category', href: 'product-listing.html', title: b, imageSrc: `../img/brand-${slug(b)}.svg` })))),
]);

// product-listing.md: Category
const tvFilters = [
  { id: 'filter-brand', title: 'Brand', name: 'brand', options: ['Samsung', 'LG', 'Sony', 'Hisense', 'TCL', 'Philips', 'Panasonic', 'Toshiba'].map((b, i) => ({ value: slug(b), label: b, count: [42, 31, 18, 12, 9, 7, 5, 4][i], isChecked: b === 'LG' })) },
  { id: 'filter-price', title: 'Price', name: 'price', type: 'range' },
  { id: 'filter-size', title: 'Screen size', name: 'size', options: ['32 inch', '43 inch', '50 inch', '55 inch', '65 inch'].map((s, i) => ({ value: s.slice(0, 2), label: s, count: [14, 22, 19, 38, 27][i], isChecked: s === '55 inch' })) },
  { id: 'filter-rating', title: 'Customer rating', name: 'rating', type: 'radio', options: [{ value: '4', label: '4 stars and up', count: 96 }, { value: '3', label: '3 stars and up', count: 140 }] },
];
const applied = [{ label: 'LG', removeHref: 'product-listing.html?size=55' }, { label: '55 inch', removeHref: 'product-listing.html?brand=lg' }];
const sortOptions = [['relevance', 'Relevance'], ['price-asc', 'Price: low to high'], ['price-desc', 'Price: high to low'], ['rating', 'Customer rating'], ['newest', 'Newest']].map(([value, label], i) => ({ value, label, isSelected: i === 0 }));
const listing = ({ file, title, intro, crumbs, subcats, filters, products, count, quick, view, promo, header }) => page(file, title, 'product-listing', [
  Breadcrumb({ items: crumbs }),
  x(`div.page__intro>${slot(0)}+${slot(1)}`, Heading({ level: 1, size: 'xl' }, title), Text({ isMuted: true }, intro)),
  x(`nav[aria-label="Shop by type"]>${slot(0)}`, tiles({ columns: 3, columnsLg: 6 }, subcats.map(s => Card({ variant: 'category', headingLevel: 2, href: file, title: s, imageSrc: `../img/cat-${slug(s)}.svg` })))),
  Grid({}, [GridItem({ spanLg: 3, hideBelow: 'lg' }, FilterPanel({ action: file, groups: filters, appliedFilters: applied, clearHref: file })), GridItem({ spanLg: 9 }, [
    Banner({ variant: 'strip', title: promo, ctaLabel: 'Find out more', ctaHref: 'help.html' }),
    ListingToolbar({ resultCount: count, sortOptions, action: file, view, quickFilters: quick }),
    ProductGrid({ products, view, page: 1, pageCount: 11, hrefTemplate: `${file}?page={page}`, promoSlot: view === 'list' ? undefined : { position: 4, card: { href: 'product-listing.html', title: 'Soundbars from £99', description: 'Upgrade your TV sound.', imageSrc: '../img/promo.svg', imageRatio: 'landscape', ctaLabel: 'Shop now' } } })])]),
  FilterPanel({ action: file, groups: filters, appliedFilters: applied, resultCount: count, variant: 'drawer' }),
], { header });
listing({ file: 'product-listing.html', title: 'Televisions', intro: 'Smart TVs, OLED and QLED from the biggest brands.', crumbs: [{ label: 'Home', href: 'index.html' }, { label: 'Technology', href: 'product-listing.html' }, { label: 'Televisions', href: 'product-listing.html' }], subcats: ['Smart TVs', 'OLED TVs', 'QLED TVs', '4K TVs', 'Small TVs', 'TV accessories'], filters: tvFilters, products: d.tvs, count: 128, view: 'grid', promo: 'Free wall bracket with selected 55 inch TVs', quick: [{ label: 'In stock', href: 'product-listing.html?stock=in' }, { label: 'On offer', href: 'product-listing.html?offer=true' }, { label: 'Next day delivery', href: 'product-listing.html?delivery=next-day' }] });
listing({ file: 'washing-machines.html', title: 'Washing machines', intro: 'Free next day delivery, installation and recycling available.', crumbs: [{ label: 'Home', href: 'index.html' }, { label: 'Appliances', href: 'washing-machines.html' }, { label: 'Washing machines', href: 'washing-machines.html' }], subcats: ['Freestanding', 'Integrated', 'Large capacity', 'Quiet', 'Washer dryers', 'Tumble dryers'], filters: tvFilters.slice(0, 2).concat([{ id: 'filter-energy', title: 'Energy rating', name: 'energy', options: ['A', 'B', 'C', 'D'].map((g, i) => ({ value: g.toLowerCase(), label: g, count: [18, 26, 31, 9][i] })) }]), products: d.washers, count: 84, view: 'list', promo: 'Free removal and recycling of your old appliance', quick: [{ label: 'Next day delivery', href: 'washing-machines.html?delivery=next-day', isSelected: true }, { label: '9kg and over', href: 'washing-machines.html?drum=9' }], header: { basketLabel: 'Basket' } });

// product-detail.md
const tv = d.tvs[0];
page('product-detail.html', tv.title, 'product-detail', [
  Breadcrumb({ items: [{ label: 'Home', href: 'index.html' }, { label: 'Technology', href: 'product-listing.html' }, { label: 'Televisions', href: 'product-listing.html' }, { label: '55 inch TVs', href: 'product-listing.html' }] }),
  Grid({}, [GridItem({ spanLg: 7 }, 
    ProductGallery({ productTitle: tv.title, images: [['front view', 'tv'], ['side view', 'tv-side'], ['rear ports', 'tv-rear']].map(([v, f]) => ({ src: `../img/product-${f}.svg`, alt: `${tv.title}, ${v}` })) })),
    GridItem({ spanLg: 5 }, ProductBuyBox({ ...tv, catalogueNumber: '881/2345', offers: ['Save £50'], energyGrade: 'F', energyHref: '../img/energy-label.svg', financeText: 'Or £29.08 a month for 12 months with tin Pay',
      keyFeatures: ['55 inch QLED screen', '4K Ultra HD resolution', 'Smart TV with built-in apps', 'Game mode with low input lag'],
      fulfilmentOptions: [{ id: 'fulfil-delivery', name: 'fulfilment', value: 'delivery', icon: 'truck', title: 'Delivery', description: 'Get it tomorrow, 7am to 7pm', price: 3.95, isChecked: true }, { id: 'fulfil-collection', name: 'fulfilment', value: 'collection', icon: 'store', title: 'Click & Collect', description: 'Check stock in your local store', price: 0 }],
      addOns: [{ id: 'protect-none', name: 'protection', value: 'none', title: 'No cover', isChecked: true }, { id: 'protect-2y', name: 'protection', value: '2y', title: '2 year protection plan', description: 'Covers breakdowns', price: 59 }, { id: 'protect-3y', name: 'protection', value: '3y', title: '3 year protection plan', description: 'Covers breakdowns and accidental damage', price: 79, badge: 'Most popular' }] }))]),
  ProductInfo({
    description: ["Samsung's 55 inch QLED TV gives you over a billion shades of colour with Quantum Dot technology.", 'Smart features let you stream your favourite shows, and Game Mode keeps play smooth.'],
    specifications: { groups: [{ title: 'Screen', items: [['Screen size', '55 inches'], ['Resolution', '4K Ultra HD'], ['HDR', 'HDR10+']] }, { title: 'Connections', items: [['HDMI ports', '3'], ['USB ports', '2'], ['Wi-Fi', 'Yes']] }, { title: 'Dimensions', items: [['Width', '122.7cm'], ['Height with stand', '76.2cm'], ['Weight', '15.6kg']] }] },
    ratingSummary: { value: 4.6, count: 212, recommendPercent: 92, writeReviewHref: 'help.html', breakdown: [[5, 160], [4, 32], [3, 10], [2, 4], [1, 6]].map(([stars, count]) => ({ stars, count })) },
    reviews: [
      { rating: 5, title: 'Brilliant picture quality', author: 'Sam', date: '2026-03-12', dateLabel: '12 March 2026', isVerified: true, helpfulCount: 12, text: 'Easy to set up and the picture is sharp. Sound is fine for a small room.' },
      { rating: 4, title: 'Great value', author: 'Priya', date: '2026-02-27', dateLabel: '27 February 2026', isVerified: true, text: 'Good TV for the price. The remote feels a bit cheap.' },
      { rating: 5, title: 'Perfect for gaming', author: 'Jordan', date: '2026-02-03', dateLabel: '3 February 2026', text: 'Game mode works really well with my console.' }],
    reviewPageCount: 71, deliveryText: 'Free delivery on orders over £50. Return within 30 days for a full refund.',
  }),
  Carousel({ id: 'also-need', title: 'You might also need' }, d.accessories.map(ProductCard)),
  Carousel({ id: 'also-viewed', title: 'Customers also viewed' }, d.tvs.slice(1, 9).map(p => ProductCard({ ...p, hasAddToBasket: false }))),
  AddedToBasketDialog({ item: { ...tv, quantity: 1 }, basketCount: 2, basketTotal: 388.99, recommendations: d.accessories }),
]);

// basket.md: With items
const lines = [
  { ...tv, lineId: 'line-1', catalogueNumber: '881/2345', quantity: 1, price: 428, priceWas: 478, availability: { method: 'delivery', label: 'Delivery available, get it tomorrow' }, addOns: [{ title: '3 year protection plan', price: 79 }] },
  { ...d.accessories[1], lineId: 'line-2', catalogueNumber: '441/0002', quantity: 1, availability: { status: 'lowStock', method: 'collection', label: 'Only 3 left at Leeds Briggate' } },
];
page('basket.html', 'Your trolley', 'basket', [
  Heading({ level: 1, size: 'xl' }, 'Your trolley (2 items)'),
  Alert({ status: 'warning' }, 'The price of 1 item has changed since you added it.'),
  Grid({}, [GridItem({ spanLg: 8 }, x(`section.page__section[aria-label="Trolley items"]>ul.page__list>${slot(0)}^${slot(1)}`,
    lines.map(l => x(`li>${slot(0)}`, BasketItem({ ...l, headingLevel: 2 }))), Link({ href: 'index.html', variant: 'standalone', iconStart: 'chevron-left' }, 'Continue shopping'))),
    GridItem({ spanLg: 4 }, OrderSummary({ itemCount: 2, subtotal: 452.99, delivery: 0, total: 452.99, ctaLabel: 'Continue to checkout', ctaHref: 'checkout.html', hasPromoCode: true, paymentNote: 'Or pay in 3 interest-free payments with Klarna' }))]),
  Carousel({ id: 'dont-forget', title: "Don't forget" }, d.accessories.map(ProductCard)),
]);

// checkout.md: Default and Order confirmation
const checkoutChrome = { header: { variant: 'checkout' }, footer: { variant: 'checkout' } };
const summaryItems = lines.map(l => ({ ...l }));
page('checkout.html', 'Checkout', 'checkout', [
  Heading({ level: 1, size: 'xl' }, 'Checkout'),
  ProgressSteps({ current: 1, steps: [{ label: 'Your details', href: 'checkout.html' }, { label: 'Delivery', href: 'checkout.html' }, { label: 'Payment', href: 'checkout.html' }] }),
  Grid({}, [GridItem({ spanLg: 8 }, CheckoutForm({
      deliveryOptions: [{ id: 'delivery-standard', name: 'deliveryMethod', value: 'standard', icon: 'truck', title: 'Standard delivery', description: '3 to 5 working days', price: 0, isChecked: true }, { id: 'delivery-next', name: 'deliveryMethod', value: 'next-day', icon: 'truck', title: 'Next day delivery', description: 'Order by 10pm, tomorrow 7am to 7pm', price: 3.95 }, { id: 'delivery-slot', name: 'deliveryMethod', value: 'slot', icon: 'calendar', title: 'Choose a day', description: 'Pick a date and time slot', price: 5.95 }],
      paymentOptions: [{ id: 'pay-card', name: 'paymentMethod', value: 'card', title: 'Debit or credit card', isChecked: true }, { id: 'pay-paypal', name: 'paymentMethod', value: 'paypal', title: 'PayPal' }, { id: 'pay-klarna', name: 'paymentMethod', value: 'klarna', title: 'Klarna, pay in 3', description: 'Three interest-free payments' }],
    })),
    GridItem({ spanLg: 4 }, OrderSummary({ title: 'Your order', items: summaryItems, subtotal: 452.99, delivery: 0, total: 452.99 }))]),
], checkoutChrome);
page('confirmation.html', 'Order confirmed', 'confirmation', [
  Heading({ level: 1, size: 'xl' }, 'Thank you, your order is confirmed'),
  Alert({ status: 'success', isLive: true }, "Order number 123-456-789. We've sent a confirmation to sam@example.com."),
  Grid({}, [GridItem({ spanLg: 8 }, x(`section.page__section[aria-labelledby=next-title]>${slot(0)}+${slot(1)}+${slot(2)}`,
    Heading({ id: 'next-title', level: 2, size: 'md' }, 'What happens next'), Text({}, "We'll text you a one-hour delivery window on the morning of delivery."),
    Button({ href: 'help.html', variant: 'secondary' }, 'Track your order'))), GridItem({ spanLg: 4 }, OrderSummary({ title: 'Your order', items: summaryItems, subtotal: 452.99, delivery: 0, total: 452.99 }))]),
], checkoutChrome);


/* ---------- News pages ---------- */

// page.md, with masthead.md as the header
const newsPage = (file, title, pageType, body, { masthead = {} } = {}) => {
  const html = x(`html[lang=en-GB]>head>meta[charset=utf-8]+meta[name=viewport content="width=device-width, initial-scale=1"]+title${tx(`${title} | tin news`)}+link[rel=stylesheet href=../../tokens.css]+link[rel=stylesheet href=../../breakpoints.css]+link[rel=stylesheet href=../../grid.css]+link[rel=stylesheet href=../site.css]^body>${slot(3)}+${slot(0)}+main#main.page[data-page=${pageType}]>${slot(1)}^${slot(2)}`,
    Masthead({ sections: n.sections, datetime: '2026-09-22', dateLabel: 'Tuesday 22 September 2026', ...masthead }),
    body,
    SiteFooter({ ...n.footer, hasNewsletter: false, appsLabel: 'Get the tin news app', logoHref: 'news.html', logoLabel: 'tin news' }),
    CookieBanner({ description: 'We use cookies to make our site work, remember what you have read and measure our audience.' }));
  fs.writeFileSync(`${newsOut}/${file}`, `<!DOCTYPE html>\n${html}\n`);
};

const newsletter = extra => NewsletterSignup({ id: `briefing${extra || ''}`, title: 'The Briefing', description: "The day's main stories, in your inbox every weekday morning.", action: '/newsletters/briefing', privacyHref: 'privacy.html', ...(extra ? { variant: 'inline' } : {}) });

// news-front.md
newsPage('index.html', 'tin news - breaking news, UK and world news', 'news-front', [
  Heading({ level: 1, isVisuallyHidden: true }, 'tin news'),
  AdSlot({ size: 'leaderboard' }),
  Grid({}, [
    GridItem({ spanLg: 8 }, StoryList({ id: 'top-stories', title: 'Top stories', stories: n.topStories, layout: 'lead', isTitleHidden: true })),
    GridItem({ spanLg: 4 }, [MostRead({ id: 'most-read', stories: n.mostRead }), AdSlot({})].join('')),
  ]),
  StoryList({ id: 'uk', title: 'UK', stories: n.ukStories, moreHref: 'section.html', moreLabel: 'More UK stories' }),
  newsletter(),
  StoryList({ id: 'more', title: 'More from tin news', stories: n.moreStories, moreHref: 'section.html', moreLabel: 'More stories' }),
]);

// article.md
const articleShare = ShareBar({ url: 'https://example.com/news/flood-defences', title: 'Flood defences overwhelmed as river hits record level' });
const articleBody = ArticleBody({}, [
  Text({}, 'The river passed its 1947 peak just after midnight, overtopping barriers that were finished only last year.'),
  Text({}, 'More than 400 homes were evacuated, and rest centres opened in two schools. The council said about 400 people arrived overnight.'),
  Callout({ id: 'at-a-glance', title: 'At a glance', variant: 'summary', points: ['The river peaked at 5.2m, the highest since records began', 'More than 400 homes have been evacuated', 'Three flood barriers were overtopped overnight', 'Rail services are suspended until Wednesday'] }),
  Heading({ level: 2, size: 'md' }, 'What went wrong'),
  Text({}, 'The defences were designed for a one-in-a-hundred-year flood. This is the third time in a decade that the river has come close to that level.'),
  Figure({ caption: 'Shops on the high street were under a metre of water by first light', credit: 'tin news' },
    Image({ src: '../img/news-highstreet.svg', alt: 'A flooded high street with water up to shop windows', ratio: 'wide', fit: 'cover', width: 800, height: 450 })),
  Quote({ citeName: 'Dani Okafor', citeRole: 'Environment Agency' }, 'We have never seen water rise this quickly'),
  Text({}, 'The Environment Agency said it would review the design standard for the barriers before the winter.'),
  newsletter('-inline'),
  Heading({ level: 2, size: 'md' }, 'Rainfall since June'),
  Figure({ width: 'wide', caption: 'Rainfall in millimetres, compared with the 30-year average', credit: 'Met Office' },
    Table({ id: 'rainfall', caption: 'Rainfall by month, millimetres', rowHeaders: true,
      columns: [{ label: 'Month' }, { label: '2026', isNumeric: true }, { label: 'Average', isNumeric: true }],
      rows: [['June', '96', '68'], ['July', '121', '73'], ['August', '164', '81'], ['September', '148', '72']] })),
  Heading({ level: 2, size: 'md' }, 'Watch: the barrier gives way' ),
  Figure({ width: 'wide', caption: 'Our correspondent reports from the high street' },
    MediaPlayer({ src: '../video/flood-report.mp4', title: 'Flood defences overwhelmed', posterSrc: '../img/news-poster.svg', duration: '2:14', captionsSrc: '../video/flood-report.vtt', transcriptHref: 'help.html' })),
  Text({}, 'Ministers will meet the emergency committee on Tuesday afternoon, before the Environment Secretary visits the town.'),
]);
newsPage('article.html', 'Flood defences overwhelmed as river hits record level', 'article', [
  Breadcrumb({ items: [{ label: 'Home', href: 'index.html' }, { label: 'News', href: 'section.html' }, { label: 'England', href: 'section.html' }] }),
  Grid({}, [
    GridItem({ spanLg: 8 }, [
      ArticleHeader({
        headline: 'Flood defences overwhelmed as river hits record level',
        standfirst: 'More than 400 homes were evacuated overnight as the river passed its 1947 peak, with rest centres opening in two schools.',
        kicker: 'England', kickerHref: 'section.html',
        byline: { authors: [n.people.sam], location: 'Leeds' },
        datetime: '2026-09-22T06:30:00Z', timeLabel: '22 September 2026',
        updatedDatetime: '2026-09-22T09:15:00Z', updatedLabel: '18 minutes ago',
        readingTime: '4 min read', share: articleShare,
        hero: Figure({ isHero: true, width: 'full', caption: 'The river burst its banks shortly after midnight', credit: 'Getty Images' },
          Image({ src: '../img/news-flood.svg', alt: 'Flooded high street with cars in deep water', ratio: 'wide', fit: 'cover', width: 1200, height: 675, isEager: true })),
      }),
      articleBody,
      RelatedStories({ id: 'more-on-this', stories: n.ukStories.slice(0, 4) }),
      RelatedStories({ id: 'topics', title: 'Related topics', topics: [{ label: 'Flooding', href: 'section.html' }, { label: 'Environment Agency', href: 'section.html' }, { label: 'Leeds', href: 'section.html' }, { label: 'Climate', href: 'section.html' }] }),
      CommentThread({ id: 'comments', count: 248, comments: n.comments, action: 'article.html', page: 1, pageCount: 12, isSignedIn: true,
        sortOptions: [['newest', 'Newest first'], ['oldest', 'Oldest first'], ['recommended', 'Most recommended']].map(([value, label], i) => ({ value, label, isSelected: i === 0 })) }),
    ].join('')),
    GridItem({ spanLg: 4 }, [AdSlot({ isSticky: true }), MostRead({ id: 'most-read', stories: n.mostRead }), RelatedStories({ id: 'also-read', title: 'Also in the news', stories: n.moreStories.slice(0, 3) })].join('')),
  ]),
]);

// news-section.md
newsPage('section.html', 'Flooding', 'news-section', [
  Breadcrumb({ items: [{ label: 'Home', href: 'index.html' }, { label: 'News', href: 'section.html' }, { label: 'Flooding', href: 'section.html' }] }),
  TopicHeader({ title: 'Flooding', description: 'Coverage of floods across the UK, from rivers and rainfall to the defences built to hold them back.', followHref: '/news/topics/flooding/follow',
    relatedTopics: [{ label: 'Environment Agency', href: 'section.html' }, { label: 'Climate', href: 'section.html' }, { label: 'Leeds', href: 'section.html' }] }),
  Grid({}, [
    GridItem({ spanLg: 8 }, [
      StoryList({ id: 'featured', title: 'Latest', stories: n.topStories, layout: 'lead', isTitleHidden: true }),
      StoryList({ id: 'more-flooding', title: 'More on flooding', stories: [...n.ukStories, ...n.moreStories], layout: 'list' }),
      Pagination({ page: 1, pageCount: 9, hrefTemplate: 'section.html?page={page}' }),
    ].join('')),
    GridItem({ spanLg: 4 }, [MostRead({ id: 'most-read', stories: n.mostRead }), AdSlot({}), newsletter()].join('')),
  ]),
]);

// live-story.md
newsPage('live.html', 'MPs debate emergency flood funding', 'live-story', [
  ArticleHeader({
    headline: 'MPs debate emergency flood funding', isLive: true,
    kicker: 'Politics', kickerHref: 'section.html',
    standfirst: 'Follow the latest from the Commons as the government sets out what it will pay for.',
    updatedDatetime: '2026-09-22T09:15:00Z', updatedLabel: '4 minutes ago',
    share: ShareBar({ url: 'https://example.com/news/live/flood-funding', title: 'MPs debate emergency flood funding' }),
  }),
  Figure({ width: 'wide', caption: 'Watch live coverage from the House of Commons' },
    MediaPlayer({ src: '../video/live.m3u8', title: 'tin news live stream', posterSrc: '../img/news-commons.svg', isLive: true, captionsSrc: '../video/live.vtt' })),
  Grid({}, [
    GridItem({ spanLg: 8 }, LiveBlog({ id: 'live', posts: n.livePosts, updatedDatetime: '2026-09-22T09:15:00Z', updatedLabel: 'Updated 4 minutes ago', newPostCount: 3, olderHref: 'news-live.html?page=2' })),
    GridItem({ spanLg: 4 }, [
      Callout({ id: 'key-points', title: 'What we know so far', variant: 'summary', points: ['The river peaked at 5.2m overnight', 'More than 400 homes have been evacuated', 'The Environment Secretary visits this afternoon'] }),
      Callout({ id: 'analysis', title: 'Analysis', variant: 'analysis', author: n.people.priya }, Text({}, 'The money on the table tonight is emergency money. The argument that follows will be about the defences nobody funded five years ago.')),
      RelatedStories({ id: 'background', title: 'Background', stories: n.ukStories.slice(0, 3) }),
      MostRead({ id: 'most-read', stories: n.mostRead }),
    ].join('')),
  ]),
], { masthead: { variant: 'minimal' } });

// forms-gallery
buildFormsGallery(sites);

// Placeholder artwork so pages don't show broken images.
const wordmark = fill => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><text x="0" y="32" font-family="system-ui, sans-serif" font-size="36" font-weight="800" letter-spacing="-1" fill="${fill}">tin</text></svg>\n`;
const svg = label => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#eeeeee"/><text x="200" y="155" font-family="sans-serif" font-size="22" text-anchor="middle" fill="#4d4d4d">${label}</text></svg>\n`;
const used = new Set();
const pages = [...fs.readdirSync(out).map(f => `${out}/${f}`), ...fs.readdirSync(newsOut).map(f => `${newsOut}/${f}`)].filter(f => f.endsWith('.html'));
for (const f of pages) for (const m of fs.readFileSync(f, 'utf8').matchAll(/(?:src|poster|href)="\.\.\/img\/([^"]+)\.svg"/g)) used.add(m[1]);
for (const name of used) fs.writeFileSync(`${sites}img/${name}.svg`, name === 'logo' ? wordmark('#d42114') : name === 'logo-inverse' ? wordmark('#ffffff') : svg(name.replace(/-/g, ' ')));
// Placeholder caption files, so the video tracks resolve.
const vtts = new Set();
for (const f of fs.readdirSync(out).filter(f => f.endsWith('.html'))) for (const m of fs.readFileSync(`${out}/${f}`, 'utf8').matchAll(/src="video\/([^"]+)\.vtt"/g)) vtts.add(m[1]);
if (vtts.size) fs.mkdirSync(`${sites}video`, { recursive: true });
for (const name of vtts) fs.writeFileSync(`${sites}video/${name}.vtt`, 'WEBVTT\n\n00:00:00.000 --> 00:00:05.000\nPlaceholder captions for the tin news demo.\n');

console.log(`shop-site: ${fs.readdirSync(out).filter(f => f.endsWith('.html')).length} pages, news-site: ${fs.readdirSync(newsOut).filter(f => f.endsWith('.html')).length} pages, forms-gallery: 1 page, ${used.size} images`);
