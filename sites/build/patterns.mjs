// Patterns, each mirroring the Emmet in patterns/*.md
import { x, at, tx, slot, Icon, Heading, Text, Link, Button, Chip, Badge, Image, Logo, Input, Select, Checkbox, Grid, GridItem } from './foundations.mjs';
import { Fieldset, InputGroup, Form, AddressLookup, CharacterCount, FormField, SearchBar, Card, LinkList, Dialog, FilterGroup, Pagination, ProductCard, SpecList, OptionCard, QuantitySelector, Availability, RatingSummary, Review, Alert, BasketItem, Carousel } from './components.mjs';
import { Rating, Price, EnergyRating } from './foundations.mjs';

export const CookieBanner = ({ action = '/cookies', title = 'We use cookies', description, policyHref = '/cookies' }) =>
  x(`section.cookie-banner[aria-labelledby=cookie-title]>${slot(0)}+${slot(1)}+${slot(2)}+form.cookie-banner__actions${at({ action, method: 'post' })}>${slot(3)}+${slot(4)}+${slot(5)}`,
    Heading({ id: 'cookie-title', level: 2, size: 'sm' }, title), Text({ size: 'sm' }, description), Link({ href: policyHref }, 'Read our cookie policy'),
    Button({ type: 'submit', variant: 'primary', name: 'consent', value: 'all' }, 'Accept all'),
    Button({ type: 'submit', variant: 'secondary', name: 'consent', value: 'essential' }, 'Reject optional cookies'),
    Button({ href: 'help.html', variant: 'tertiary' }, 'Manage settings'));

export const UspBar = ({ items }) =>
  x(`section.usp-bar[aria-label="Why shop with us"]>ul.usp-bar__items>${slot(0)}`,
    items.map(i => x(`li.usp-bar__item>${slot(0)}`, Link({ href: i.href, variant: 'subtle', iconStart: i.icon }, i.label))));

export const MainNav = ({ departments, variant, allLabel = 'Shop all', drawerLinks }) => {
  if (variant === 'drawer') {
    const deps = departments.map(d => d.columns
      ? x(`li.main-nav__department>details>summary${tx(d.label)}+${slot(0)}+${slot(1)}`,
        d.columns.map(c => LinkList({ ...c, isCollapsible: true })), Link({ href: d.href, variant: 'standalone' }, `${allLabel} ${d.label}`))
      : x(`li.main-nav__department>${slot(0)}`, Link({ href: d.href, variant: 'subtle' }, d.label)));
    return Dialog({ id: 'menu', variant: 'drawer', side: 'start', title: 'Menu' },
      x(`nav.main-nav[aria-label="All departments" data-variant=drawer]>ul.main-nav__departments>${slot(0)}^^${slot(1)}+${slot(2)}`, deps,
        ...(drawerLinks || [{ label: 'Sign in or register', href: 'account.html', icon: 'user' }, { label: 'Find a store', href: 'stores.html', icon: 'location' }])
          .map(l => Link({ href: l.href, variant: 'standalone', iconStart: l.icon }, l.label))));
  }
  const deps = departments.map(d => d.columns
    ? x(`li.main-nav__department>button.main-nav__trigger${at({ type: 'button', popovertarget: `menu-${d.id}`, 'aria-expanded': 'false' })}${tx(d.label)}+div.main-nav__panel${at({ id: `menu-${d.id}`, popover: true })}>div.main-nav__columns>${slot(0)}^${slot(1)}+${slot(2)}`,
      d.columns.map(c => LinkList(c)), d.promo ? Card({ variant: 'promo', ...d.promo }) : '', Link({ href: d.href, variant: 'standalone', iconEnd: 'chevron-right' }, `${allLabel} ${d.label}`))
    : x(`li.main-nav__department>${slot(0)}`, Link({ href: d.href, variant: 'subtle' }, d.label)));
  return x(`nav.main-nav[aria-label=Departments]>ul.main-nav__departments>${slot(0)}`, deps);
};

export const SiteHeader = ({ basketCount = 0, isSignedIn, searchValue, basketLabel = 'Trolley', variant, uspItems, departments }) => {
  if (variant === 'checkout') {
    return x(`header.site-header[data-variant=checkout]>div.site-header__bar>${slot(0)}+p.site-header__secure>${slot(1)}+span{Secure checkout}^${slot(2)}`,
      Logo({ href: 'index.html', label: 'tin', size: 'sm' }), Icon({ name: 'lock' }), Link({ href: 'help.html', variant: 'subtle' }, 'Need help?'));
  }
  const actions = [
    x(`li>${slot(0)}`, Link({ href: 'stores.html', variant: 'subtle', iconStart: 'location' }, 'Stores')),
    x(`li>${slot(0)}`, Link({ href: 'account.html', variant: 'subtle', iconStart: 'user' }, isSignedIn ? 'My account' : 'Sign in')),
    x(`li>${slot(0)}`, Link({ href: 'wishlist.html', variant: 'subtle', iconStart: 'heart' }, 'Wishlist')),
    x(`li>${slot(0)}`, Link({ href: 'basket.html', variant: 'subtle', iconStart: 'basket' },
      x(`span${tx(basketLabel)}`) + (basketCount ? Badge({ variant: 'count', label: ' items' }, String(basketCount)) : ''))),
  ];
  return x(`a.site-header__skip[href=#main]{Skip to main content}+${slot(0)}+header.site-header>div.site-header__bar>${slot(1)}+${slot(2)}+${slot(3)}+ul.site-header__actions>${slot(4)}^^${slot(5)}+${slot(6)}`,
    UspBar({ items: uspItems }),
    Button({ variant: 'tertiary', isIconOnly: true, iconStart: 'menu', label: 'Menu', command: 'show-modal', commandFor: 'menu' }),
    Logo({ href: 'index.html', label: 'tin' }),
    SearchBar({ action: 'product-listing.html', placeholder: 'What are you looking for?', value: searchValue }),
    actions, MainNav({ departments }), MainNav({ departments, variant: 'drawer' }));
};

export const SiteFooter = ({ columns, socialLinks, paymentMethods, legal, variant, hasNewsletter = true, newsletterTitle = 'Get the best deals first', appsLabel = 'Download our app', logoHref = 'index.html', logoLabel = 'tin' }) => {
  if (variant === 'checkout') {
    return x(`footer.site-footer[data-variant=checkout]>ul.site-footer__links>${slot(0)}^${slot(1)}`,
      [['Help', 'help.html'], ['Privacy', 'privacy.html'], ['Terms and conditions', 'terms.html']].map(([l, h]) => x(`li>${slot(0)}`, Link({ href: h, variant: 'inverse' }, l))),
      Text({ as: 'small', size: 'sm' }, '© 2026 tin Retail Ltd.'));
  }
  const newsletter = hasNewsletter
    ? x(`section.site-footer__newsletter[aria-labelledby=newsletter-title]>${slot(0)}+form[action=/newsletter method=post]>${slot(1)}`,
      Heading({ id: 'newsletter-title', level: 2, size: 'md' }, newsletterTitle),
      FormField({ id: 'newsletter-email', label: 'Email address' }, InputGroup({}, Input({ id: 'newsletter-email', type: 'email', name: 'email', autocomplete: 'email' }), Button({ type: 'submit', variant: 'primary' }, 'Sign up'))))
    : '';
  const social = socialLinks
    ? x(`div.site-footer__social>${slot(0)}+ul>${slot(1)}`, Heading({ level: 2, size: 'sm' }, 'Follow us'),
      socialLinks.map(l => x(`li>${slot(0)}`, Link({ href: l.href, variant: 'inverse', iconStart: l.icon, isExternal: true }, l.label))))
    : '';
  const apps = appsLabel ? x(`div.site-footer__apps>${slot(0)}`, Link({ href: 'app.html', variant: 'inverse' }, appsLabel)) : '';
  const payments = paymentMethods
    ? x(`div.site-footer__payments>${slot(0)}+ul>${slot(1)}`, Heading({ level: 2, size: 'sm' }, 'Ways to pay'),
      paymentMethods.map(p => x(`li>${slot(0)}`, Image({ src: p.src, alt: p.alt, width: 48, height: 32 }))))
    : '';
  return x(`footer.site-footer>${slot(0)}+div.site-footer__columns>${slot(1)}^${slot(2)}+${slot(3)}+${slot(4)}+div.site-footer__legal>${slot(5)}+${slot(6)}`,
    newsletter,
    columns.map(c => LinkList({ ...c, variant: 'inverse', headingLevel: 2, isCollapsible: true })),
    social, apps, payments,
    Logo({ href: logoHref, label: logoLabel, variant: 'inverse', size: 'sm' }),
    Text({ as: 'small', size: 'sm' }, legal));
};

export const FilterPanel = ({ action, groups, appliedFilters = [], clearHref, resultCount, variant }) => {
  const applied = appliedFilters.length ? x(`h3.filter-panel__applied-title{Applied filters}+ul.filter-panel__applied>${slot(0)}`,
    appliedFilters.map(f => x(`li>${slot(0)}`, Chip({ variant: 'removable', href: f.removeHref }, f.label)))) : '';
  if (variant === 'drawer') {
    return Dialog({ id: 'filters', variant: 'drawer', side: 'start', title: 'Filter' },
      x(`form.filter-panel${at({ 'data-variant': 'drawer', action, method: 'get' })}>${slot(0)}+${slot(1)}+${slot(2)}`,
        applied, groups.map(g => FilterGroup({ ...g, id: `drawer-${g.id}`, isOpen: false })),
        Button({ type: 'submit', variant: 'primary', isFullWidth: true }, `Show ${resultCount} results`)));
  }
  return x(`aside.filter-panel[aria-labelledby=filter-title]>div.filter-panel__header>${slot(0)}+${slot(1)}^${slot(2)}+form.filter-panel__form${at({ action, method: 'get' })}>${slot(3)}+${slot(4)}`,
    Heading({ id: 'filter-title', level: 2, size: 'md' }, 'Filter by'),
    clearHref ? Button({ href: clearHref, variant: 'tertiary', size: 'sm' }, 'Clear all') : '',
    applied, groups.map(g => FilterGroup(g)),
    Button({ type: 'submit', variant: 'primary', isFullWidth: true }, 'Apply filters'));
};

export const ListingToolbar = ({ resultCount, sortOptions, action, quickFilters = [], view = 'grid' }) =>
  x(`div.listing-toolbar>p.listing-toolbar__count[role=status]${tx(`${resultCount} products`)}+${slot(0)}+form.listing-toolbar__sort${at({ action, method: 'get' })}>${slot(1)}+${slot(2)}^div.listing-toolbar__view[role=group aria-label=View]>${slot(3)}+${slot(4)}^div.listing-toolbar__quick-filters[role=group aria-label="Quick filters"]>${slot(5)}`,
    Button({ variant: 'secondary', iconStart: 'filter', command: 'show-modal', commandFor: 'filters' }, 'Filter'),
    FormField({ id: 'sort', label: 'Sort by', layout: 'inline' }, Select({ id: 'sort', name: 'sort', options: sortOptions })),
    Button({ type: 'submit', variant: 'secondary', size: 'sm' }, 'Sort'),
    Chip({ href: `${action}?view=grid`, isSelected: view === 'grid', icon: 'grid' }, 'Grid'),
    Chip({ href: `${action}?view=list`, isSelected: view === 'list', icon: 'list' }, 'List'),
    quickFilters.map(f => Chip({ href: f.href, isSelected: f.isSelected }, f.label)));

export const ProductGrid = ({ products, view, page, pageCount, hrefTemplate, promoSlot }) => {
  const items = products.map(p => GridItem({ as: 'li' }, ProductCard({ ...p, layout: view })));
  if (promoSlot) items.splice(promoSlot.position, 0, GridItem({ as: 'li', span: 2 }, Card({ variant: 'promo', ...promoSlot.card })));
  return x(`section.product-grid${at({ 'aria-labelledby': 'products-title', 'data-view': view === 'list' ? 'list' : undefined })}>${slot(2)}+${slot(0)}+${slot(1)}`,
    Grid({ as: 'ul', ...(view === 'list' ? { columns: 1 } : { columns: 2, columnsMd: 3, columnsXl: 4 }) }, items), pageCount ? Pagination({ page, pageCount, hrefTemplate }) : '', Heading({ id: 'products-title', level: 2, isVisuallyHidden: true }, 'Products'));
};

export const ProductBuyBox = ({ productId, title, catalogueNumber, ratingValue, ratingCount, price, priceWas, offers = [], financeText, energyGrade, energyHref, keyFeatures, fulfilmentOptions, addOns, addOnsTitle = 'Protect your purchase', maxQuantity = 10, isInWishlist, isOutOfStock, ctaLabel = 'Add to trolley' }) =>
  x(`section.product-buy-box${at({ 'aria-labelledby': 'product-title', 'data-out-of-stock': isOutOfStock })}>${slot(0)}+${slot(1)}+${slot(2)}+div.product-buy-box__price>${slot(3)}+${slot(4)}+${slot(5)}^${slot(6)}+${slot(7)}+form.product-buy-box__form[action=/basket/add method=post]>input${at({ type: 'hidden', name: 'productId', value: productId })}+${slot(8)}+${slot(9)}+${slot(10)}+${slot(11)}^${slot(12)}`,
    Heading({ id: 'product-title', level: 1, size: 'lg' }, title),
    catalogueNumber ? Text({ size: 'sm', isMuted: true }, `Cat. No. ${catalogueNumber}`) : '',
    Rating({ value: ratingValue, count: ratingCount, size: 'md', hasValue: true, href: '#reviews' }),
    Price({ amount: price, amountWas: priceWas, size: 'lg' }),
    offers.map(o => Badge({ variant: 'promo' }, o)),
    energyGrade ? EnergyRating({ grade: energyGrade, href: energyHref, size: 'md' }) : '',
    financeText ? Text({ size: 'sm' }, financeText) : '',
    keyFeatures ? SpecList({ variant: 'compact', headingLevel: 2, groups: [{ title: 'Key features', features: keyFeatures }] }) : '',
    Fieldset({ legend: 'How would you like to get it?' }, fulfilmentOptions.map(o => OptionCard(o))),
    Fieldset({ legend: addOnsTitle }, addOns.map(o => OptionCard(o))),
    QuantitySelector({ id: 'quantity', max: maxQuantity }),
    Button({ type: 'submit', variant: 'primary', size: 'lg', isFullWidth: true, iconStart: 'basket', isDisabled: isOutOfStock }, ctaLabel),
    Button({ variant: 'secondary', isFullWidth: true, iconStart: isInWishlist ? 'heart-filled' : 'heart' }, 'Add to wishlist'));

export const ProductInfo = ({ description, specifications, ratingSummary, reviews, reviewPageCount, deliveryText }) =>
  x(`section.product-info[aria-label="Product information"]>div.accordion>${slot(0)}`, [
    x(`details.accordion__item#description[open]>summary.accordion__summary>h2.accordion__title{Description}^div.accordion__content>${slot(0)}`, description.map(p => Text({}, p))),
    x(`details.accordion__item#specifications>summary.accordion__summary>h2.accordion__title{Specifications}^div.accordion__content>${slot(0)}`, SpecList(specifications)),
    x(`details.accordion__item#reviews>summary.accordion__summary>h2.accordion__title${tx(`Reviews (${ratingSummary.count})`)}^div.accordion__content>${slot(0)}+ul.product-info__reviews>${slot(1)}^${slot(2)}`,
      RatingSummary(ratingSummary), reviews.map(r => x(`li>${slot(0)}`, Review(r, r.text))), Pagination({ variant: 'compact', page: 1, pageCount: reviewPageCount, hrefTemplate: 'product-detail.html?reviewPage={page}#reviews' })),
    x(`details.accordion__item#delivery>summary.accordion__summary>h2.accordion__title{Delivery & returns}^div.accordion__content>${slot(0)}+${slot(1)}`,
      Text({}, deliveryText), Link({ href: 'help.html' }, 'Read our returns policy')),
  ]);

export const AddedToBasketDialog = ({ item, basketCount, basketTotal, recommendations }) =>
  x(`dialog.dialog.added-to-basket-dialog#added-to-trolley[aria-labelledby=added-title data-size=lg]>div.dialog__header>h2.dialog__title#added-title{Added to trolley}+${slot(0)}^div.dialog__content>${slot(1)}+${slot(2)}+p.added-to-basket-dialog__total>span${tx(`Trolley subtotal (${basketCount} items) `)}+${slot(3)}^${slot(4)}^div.dialog__footer>${slot(5)}+${slot(6)}`,
    Button({ variant: 'tertiary', isIconOnly: true, iconStart: 'close', label: 'Close', command: 'close', commandFor: 'added-to-trolley' }),
    Alert({ status: 'success', isLive: true }, '1 item added to your trolley'),
    BasketItem({ ...item, variant: 'compact' }),
    Price({ amount: basketTotal }),
    Carousel({ id: 'added-recs', title: 'Customers also bought', headingLevel: 3 }, recommendations.map(p => ProductCard({ ...p, hasAddToBasket: false }))),
    Button({ variant: 'secondary', command: 'close', commandFor: 'added-to-trolley' }, 'Continue shopping'),
    Button({ href: 'basket.html', variant: 'primary' }, 'Go to trolley'));

export const CheckoutForm = ({ action = '/checkout', errors, address = {}, deliveryOptions, paymentOptions, isGuest = true }) => {
  const field = (id, label, input, hint) => FormField({ id, label, hint }, Input({ id, name: id, describedBy: hint ? `${id}-hint` : undefined, ...input }));
  return x(`form.form.checkout-form${at({ action, method: 'post', novalidate: true })}>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}+${slot(4)}+${slot(5)}+${slot(6)}+div.form__actions>${slot(7)}^${slot(8)}`,
    errors ? Alert({ status: 'danger', title: 'There is a problem' }, [x(`ul.alert__list>${slot(0)}`, errors.map(e => x(`li>${slot(0)}`, Link({ href: `#${e.fieldId}` }, e.message))))]) : '',
    isGuest ? Text({}, Link({ href: 'account.html?next=checkout.html' }, 'Sign in for faster checkout')) : '',
    Fieldset({ id: 'step-details', legend: '1. Your details', headingLevel: 2 }, [
      field('name', 'Full name', { autocomplete: 'name', isRequired: true }),
      field('email', 'Email address', { type: 'email', autocomplete: 'email', isRequired: true }, 'For your order confirmation'),
      field('phone', 'Mobile number', { type: 'tel', autocomplete: 'tel', isRequired: true }, 'For delivery updates')]),
    AddressLookup({ id: 'address', legend: '2. Delivery address', headingLevel: 2, ...address }),
    Fieldset({ id: 'step-delivery', legend: '3. Delivery method', headingLevel: 2 }, [
      deliveryOptions.map(o => OptionCard(o)).join(''),
      CharacterCount({ id: 'instructions', name: 'instructions', label: 'Delivery instructions (optional)', maxLength: 100, rows: 3 })]),
    Fieldset({ id: 'step-payment', legend: '4. Payment', headingLevel: 2 }, paymentOptions.map(o => OptionCard(o))),
    Checkbox({ id: 'marketing', name: 'marketing', value: 'yes' }, 'Email me offers and news'),
    Button({ type: 'submit', variant: 'primary', size: 'lg', isFullWidth: true, iconStart: 'lock' }, 'Place order and pay'),
    Text({ size: 'sm', isMuted: true }, ['By placing your order you agree to our ', Link({ href: 'terms.html' }, 'terms and conditions')]));
};
