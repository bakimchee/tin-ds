// Components, each mirroring the Emmet in components/*.md
import { x, at, tx, slot, gbp, Icon, Heading, Text, Link, Button, Chip, Badge, Image, Input, Select, Checkbox, Radio, Price, Rating, EnergyRating, FieldMessage, Textarea } from './foundations.mjs';

const def = (v, d) => (v === d ? undefined : v);

export const FormField = ({ id, label, hint, error, isLabelHidden, layout }, control) =>
  x(`div.form-field${at({ 'data-layout': def(layout, 'stacked') })}>label.form-field__label${at({ for: id, 'data-visually-hidden': isLabelHidden })}${tx(label)}+${slot(1)}+${slot(2)}+${slot(0)}`, control,
    hint ? FieldMessage({ id: `${id}-hint` }, hint) : '', error ? FieldMessage({ id: `${id}-error`, status: 'danger' }, error) : '');

export const SearchBar = ({ action = '/search', label = 'Search', placeholder, value }) =>
  x(`form.search-bar${at({ role: 'search', action, method: 'get' })}>label.search-bar__label[for=q data-visually-hidden]${tx(label)}+${slot(0)}+${slot(1)}`,
    Input({ id: 'q', type: 'search', name: 'q', placeholder, value, autocomplete: 'off' }),
    Button({ type: 'submit', variant: 'primary', isIconOnly: true, iconStart: 'search', label: 'Search' }));

export const QuantitySelector = ({ id, name = 'quantity', label = 'Quantity', value = 1, min = 1, max = 10, isLabelHidden }) =>
  x(`div.quantity-selector>label.quantity-selector__label${at({ for: id, 'data-visually-hidden': isLabelHidden })}${tx(label)}+div.quantity-selector__controls>${slot(0)}+${slot(1)}+${slot(2)}`,
    Button({ variant: 'secondary', size: 'sm', isIconOnly: true, iconStart: 'minus', label: 'Decrease quantity', isDisabled: value <= min }),
    Input({ id, type: 'number', name, value, min, max, inputMode: 'numeric', size: 'sm' }),
    Button({ variant: 'secondary', size: 'sm', isIconOnly: true, iconStart: 'plus', label: 'Increase quantity', isDisabled: value >= max }));

export const Breadcrumb = ({ items }) =>
  x(`nav.breadcrumb[aria-label=Breadcrumb]>ol.breadcrumb__list>${slot(0)}`,
    items.map((it, i) => x(`li.breadcrumb__item>${slot(0)}`, Link({ href: it.href, variant: 'subtle', isCurrent: i === items.length - 1 }, it.label))));

export const Pagination = ({ page = 1, pageCount, hrefTemplate, variant }) => {
  const href = n => hrefTemplate.replace('{page}', n);
  if (variant === 'compact') {
    return x(`nav.pagination[aria-label=Pagination data-variant=compact]>${slot(0)}+p.pagination__status${tx(`Page ${page} of ${pageCount}`)}+${slot(1)}`,
      page > 1 ? Link({ href: href(page - 1), variant: 'standalone', iconStart: 'chevron-left' }, 'Previous') : '',
      page < pageCount ? Link({ href: href(page + 1), variant: 'standalone', iconEnd: 'chevron-right' }, 'Next') : '');
  }
  const shown = [...new Set([1, page - 1, page, page + 1, pageCount])].filter(n => n >= 1 && n <= pageCount).sort((a, b) => a - b);
  const items = [];
  if (page > 1) items.push(x(`li>${slot(0)}`, Link({ href: href(page - 1), variant: 'standalone', iconStart: 'chevron-left' }, 'Previous')));
  shown.forEach((n, i) => {
    if (i && n - shown[i - 1] > 1) items.push(x('li.pagination__gap{…}'));
    items.push(x(`li>${slot(0)}`, Link({ href: href(n), isCurrent: n === page }, String(n))));
  });
  if (page < pageCount) items.push(x(`li>${slot(0)}`, Link({ href: href(page + 1), variant: 'standalone', iconEnd: 'chevron-right' }, 'Next')));
  return x(`nav.pagination[aria-label=Pagination]>ul.pagination__list>${slot(0)}`, items);
};

export const AccordionItem = ({ id, title, isOpen, name, headingLevel = 3 }, content) =>
  x(`details.accordion__item${at({ id, open: isOpen, name })}>summary.accordion__summary>h${headingLevel}.accordion__title${tx(title)}^div.accordion__content>${slot(0)}`, content);

export const Accordion = ({ items, name, headingLevel = 3 }) =>
  x(`div.accordion>${slot(0)}`, items.map(it => AccordionItem({ ...it, name, headingLevel }, it.children)));

export const Card = ({ href, title, description, imageSrc, imageAlt = '', imageRatio = 'square', ctaLabel, variant, headingLevel = 3 }) => {
  const img = imageSrc ? Image({ src: imageSrc, alt: imageAlt, ratio: imageRatio, fit: 'cover', width: 300, height: imageRatio === 'square' ? 300 : 225 }) : '';
  const titleAbbr = `h${headingLevel}.card__title>a.card__link${at({ href })}${tx(title)}`;
  if (variant === 'category') return x(`article.card[data-variant=category]>${slot(0)}+${titleAbbr}`, img);
  return x(`article.card${at({ 'data-variant': variant })}>${slot(0)}+div.card__body>${titleAbbr}^${slot(1)}${ctaLabel ? `+span.card__cta[aria-hidden=true]${tx(ctaLabel)}` : ''}`,
    img, description ? Text({ isMuted: variant !== 'promo' }, description) : '');
};

export const Banner = ({ title, description, eyebrow, imageSrc, ctaLabel, ctaHref, variant = 'hero', align, headingLevel = 2, isEager }) => {
  if (variant === 'strip') {
    return x(`section.banner${at({ 'data-variant': 'strip', 'data-align': def(align, 'start') })}>${slot(0)}+${slot(1)}`,
      Text({ isBold: true }, title), ctaHref ? Link({ href: ctaHref, variant: 'standalone' }, ctaLabel) : '');
  }
  return x(`section.banner${at({ 'data-variant': 'hero', 'data-align': def(align, 'start') })}>${slot(0)}+div.banner__body>${eyebrow ? `p.banner__eyebrow${tx(eyebrow)}+` : ''}${slot(1)}+${slot(2)}+${slot(3)}`,
    imageSrc ? Image({ src: imageSrc, alt: '', ratio: 'wide', fit: 'cover', width: 1200, height: 675, isEager }) : '',
    Heading({ level: headingLevel, size: 'xl' }, title), description ? Text({ size: 'lg' }, description) : '',
    ctaLabel ? Button({ href: ctaHref, variant: 'primary', size: 'lg' }, ctaLabel) : '');
};

const availIcon = { inStock: 'check', lowStock: 'warning', outOfStock: 'close', preOrder: 'calendar' };
export const Availability = ({ status = 'inStock', method }, children) =>
  x(`p.availability${at({ 'data-status': status, 'data-method': method })}>${slot(0)}+span${tx(children)}`,
    Icon({ name: method === 'delivery' ? 'truck' : method === 'collection' ? 'store' : availIcon[status] }));

export const ProductCard = ({ productId, href, title, imageSrc, price, priceWas, pricePrefix, ratingValue, ratingCount, badges = [], energyGrade, energyHref, features, availability = [], layout, headingLevel = 3, hasAddToBasket = true, hasWishlist = true, hasCompare, isInWishlist, ctaLabel = 'Add to trolley' }) => {
  const media = x(`div.product-card__media>${slot(0)}+${slot(1)}`,
    Image({ src: imageSrc, alt: '', width: 240, height: 240 }),
    hasWishlist ? Button({ variant: 'tertiary', isIconOnly: true, iconStart: isInWishlist ? 'heart-filled' : 'heart', label: `Add ${title} to wishlist` }) : '');
  const badgeRow = badges.length ? x(`div.product-card__badges>${slot(0)}`, badges.map(b => Badge({ variant: b.variant, status: b.status }, b.label))) : '';
  const titleEl = x(`h${headingLevel}.product-card__title>a.product-card__link${at({ href })}${tx(title)}`);
  const rating = ratingValue ? Rating({ value: ratingValue, count: ratingCount }) : '';
  const priceEl = Price({ amount: price, amountWas: priceWas, prefix: pricePrefix, size: 'sm' });
  const priceRow = energyGrade ? x(`div.product-card__price-row>${slot(0)}+${slot(1)}`, priceEl, EnergyRating({ grade: energyGrade, href: energyHref })) : priceEl;
  const avail = availability.map(a => Availability(a, a.label));
  const add = hasAddToBasket ? x(`form.product-card__add${at({ action: '/basket/add', method: 'post' })}>input${at({ type: 'hidden', name: 'productId', value: productId })}+${slot(0)}`,
    Button({ type: 'submit', variant: 'primary', isFullWidth: true }, ctaLabel)) : '';
  const compare = hasCompare ? Checkbox({ id: `compare-${productId}`, name: 'compare', value: productId }, 'Compare') : '';
  if (layout === 'list') {
    const feats = features ? x(`ul.product-card__features>${slot(0)}`, features.map(f => x(`li${tx(f)}`))) : '';
    return x(`article.product-card[data-layout=list]>${slot(0)}+div.product-card__body>${slot(1)}+${slot(2)}+${slot(3)}+${slot(4)}+${slot(5)}^div.product-card__actions>${slot(6)}+${slot(7)}+${slot(8)}`,
      media, badgeRow, titleEl, rating, feats, avail, priceRow, add, compare);
  }
  return x(`article.product-card>${slot(0)}+${slot(1)}+${slot(2)}+${slot(3)}+${slot(4)}+${slot(5)}+${slot(6)}+${slot(7)}`,
    media, badgeRow, titleEl, rating, priceRow, avail, add, compare);
};

export const Alert = ({ status = 'info', title, isDismissible, isLive }, children) => {
  const icon = { info: 'info', success: 'check', warning: 'warning', danger: 'warning' }[status];
  const role = isLive || status === 'danger' ? (status === 'danger' ? 'alert' : 'status') : undefined;
  return x(`div.alert${at({ 'data-status': status, role, tabindex: status === 'danger' ? '-1' : undefined })}>${slot(0)}+div.alert__body>${title ? `p.alert__title${tx(title)}+` : ''}${slot(1)}^${slot(2)}`,
    Icon({ name: icon }), children ? (typeof children === 'string' ? Text({}, children) : children) : '',
    isDismissible ? Button({ variant: 'tertiary', isIconOnly: true, iconStart: 'close', label: 'Dismiss message' }) : '');
};

export const Dialog = ({ id, title, variant, side, size }, content, footer) =>
  x(`dialog.dialog${at({ id, 'data-variant': def(variant, 'modal'), 'data-side': variant === 'drawer' ? side || 'start' : undefined, 'data-size': def(size, 'md'), 'aria-labelledby': `${id}-title` })}>div.dialog__header>h2.dialog__title${at({ id: `${id}-title` })}${tx(title)}+${slot(0)}^div.dialog__content>${slot(1)}^${footer ? `div.dialog__footer>${slot(2)}` : ''}`,
    Button({ variant: 'tertiary', isIconOnly: true, iconStart: 'close', label: 'Close', command: 'close', commandFor: id }), content, footer || '');

export const Carousel = ({ id, title, headingLevel = 2, viewAllHref, variant, hasControls, isTitleHidden }, items) =>
  x(`section.carousel${at({ 'data-variant': def(variant, 'products'), 'aria-labelledby': `${id}-title`, 'data-has-controls': hasControls })}>div.carousel__header>${slot(0)}+${slot(1)}^ul.carousel__track${at({ tabindex: 0, 'aria-label': `${title}, scrollable` })}>${slot(2)}`,
    Heading({ id: `${id}-title`, level: headingLevel, size: 'lg', isVisuallyHidden: isTitleHidden }, title),
    viewAllHref ? Link({ href: viewAllHref, variant: 'standalone', iconEnd: 'chevron-right' }, 'View all') : '',
    items.map(it => x(`li.carousel__item>${slot(0)}`, it)));

export const ProductGallery = ({ images, productTitle, videoHref }) =>
  x(`div.product-gallery>ul.product-gallery__slides${at({ tabindex: 0, 'aria-label': 'Product images, scrollable' })}>${slot(0)}^ul.product-gallery__thumbnails>${slot(1)}${videoHref ? `^${slot(2)}` : ''}`,
    images.map((im, i) => x(`li.product-gallery__slide${at({ id: `image-${i + 1}` })}>${slot(0)}`, Image({ src: im.src, alt: im.alt, width: 600, height: 600, isEager: i === 0 }))),
    images.map((im, i) => x(`li>a.product-gallery__thumbnail${at({ href: `#image-${i + 1}`, 'aria-label': `View image ${i + 1} of ${images.length}` })}>${slot(0)}`, Image({ src: im.src, alt: '', width: 80, height: 80 }))),
    videoHref ? Link({ href: videoHref, variant: 'standalone', iconStart: 'arrow-right' }, 'Watch video') : '');

export const LinkList = ({ title, titleHref, headingLevel = 3, links, variant }) => {
  const linkVariant = variant === 'inverse' ? 'inverse' : 'subtle';
  const titleEl = titleHref ? x(`h${headingLevel}.link-list__title>${slot(0)}`, Link({ href: titleHref, variant: linkVariant }, title)) : x(`h${headingLevel}.link-list__title${tx(title)}`);
  return x(`div.link-list${at({ 'data-variant': def(variant, 'default') })}>${slot(0)}+ul.link-list__items>${slot(1)}`,
    titleEl, links.map(l => x(`li>${slot(0)}`, Link({ href: l.href, variant: linkVariant, iconStart: l.iconStart }, l.label))));
};

export const SpecList = ({ groups, headingLevel = 3, variant }) =>
  x(`div.spec-list${at({ 'data-variant': def(variant, 'table') })}>${slot(0)}`, groups.map(g =>
    g.features
      ? x(`section.spec-list__group>h${headingLevel}.spec-list__title${tx(g.title)}+ul.spec-list__features>${slot(0)}`, g.features.map(f => x(`li${tx(f)}`)))
      : x(`section.spec-list__group>h${headingLevel}.spec-list__title${tx(g.title)}+dl.spec-list__items>${slot(0)}`, g.items.map(([k, v]) => x(`div.spec-list__row>dt${tx(k)}+dd${tx(v)}`)))));

export const RatingSummary = ({ value, count, breakdown, recommendPercent, writeReviewHref }) =>
  x(`div.rating-summary>p.rating-summary__value${tx(value)}+${slot(0)}+${slot(1)}+ul.rating-summary__breakdown>${slot(2)}^${slot(3)}`,
    Rating({ value, count }), recommendPercent ? Text({ size: 'sm' }, `${recommendPercent}% of customers would recommend this product`) : '',
    breakdown.map(b => x(`li.rating-summary__bar>span${tx(`${b.stars} star${b.stars === 1 ? '' : 's'}`)}+meter${at({ min: 0, max: count, value: b.count })}${tx(b.count)}+span${tx(b.count)}`)),
    writeReviewHref ? Button({ href: writeReviewHref, variant: 'secondary' }, 'Write a review') : '');

export const Review = ({ rating, title, author, date, dateLabel, isVerified, helpfulCount, headingLevel = 3 }, children) =>
  x(`article.review>${slot(0)}+${title ? `h${headingLevel}.review__title${tx(title)}+` : ''}p.review__meta>span.review__author${tx(author)}+time${at({ datetime: date })}${tx(dateLabel)}^${slot(1)}+${slot(2)}+${slot(3)}`,
    Rating({ value: rating }), isVerified ? Badge({ status: 'success' }, 'Verified purchase') : '', Text({}, children),
    helpfulCount ? Text({ size: 'sm', isMuted: true }, `${helpfulCount} people found this helpful`) : '');

export const OptionCard = ({ id, name, value, type = 'radio', title, description, price, icon, badge, isChecked, isDisabled }, children) => {
  const inner = `input${at({ id, type, name, value, checked: isChecked, disabled: isDisabled })}+${slot(0)}+span.option-card__body>span.option-card__title${tx(title)}${description ? `+span.option-card__description${tx(description)}` : ''}^${slot(1)}+${slot(2)}`;
  const parts = [icon ? Icon({ name: icon }) : '', price !== undefined ? Price({ amount: price, size: 'sm' }) : '', badge ? Badge({ status: 'info' }, badge) : ''];
  if (!children) return x(`label.option-card${at({ for: id })}>${inner}`, ...parts);
  return x(`div.option-card${at({ 'data-checked': isChecked })}>label.option-card__choice${at({ for: id })}>${inner}^div.option-card__extra>${slot(3)}`, ...parts, children);
};

export const FilterGroup = ({ id, title, name, type = 'checkbox', options = [], visibleCount = 5, isOpen = true }) => {
  let body;
  if (type === 'range') {
    body = x(`div.filter-group__range>${slot(0)}+${slot(1)}^${slot(2)}`,
      FormField({ id: `${id}-min`, label: 'Min (£)' }, InputGroup({ prefix: '£' }, Input({ id: `${id}-min`, type: 'number', name: `${name}Min`, min: 0, inputMode: 'numeric', size: 'sm' }))),
      FormField({ id: `${id}-max`, label: 'Max (£)' }, InputGroup({ prefix: '£' }, Input({ id: `${id}-max`, type: 'number', name: `${name}Max`, min: 0, inputMode: 'numeric', size: 'sm' }))),
      Button({ type: 'submit', variant: 'secondary', size: 'sm' }, 'Go'));
  } else {
    const Control = type === 'radio' ? Radio : Checkbox;
    const render = o => Control({ id: `${id}-${o.value}`, name, value: o.value, count: o.count, isChecked: o.isChecked }, o.label);
    const first = options.slice(0, visibleCount).map(render);
    const rest = options.slice(visibleCount).map(render);
    body = [first.join(''), rest.length ? x(`details.filter-group__more>summary{Show more}+${slot(0)}`, rest) : ''].join('');
  }
  return x(`details.filter-group.accordion__item${at({ id, open: isOpen })}>summary.accordion__summary>h3.accordion__title${tx(title)}^${slot(0)}`, Fieldset({ legend: title, isLegendHidden: true }, body));
};

export const BasketItem = ({ lineId, href, title, imageSrc, price, priceWas, quantity = 1, maxQuantity = 10, catalogueNumber, availability, addOns = [], variant, headingLevel = 3 }) => {
  if (variant === 'compact') {
    return x(`article.basket-item[data-variant=compact]>div.basket-item__media>${slot(0)}^div.basket-item__body>h${headingLevel}.basket-item__title${tx(title)}+${slot(1)}+${slot(2)}`,
      Image({ src: imageSrc, alt: '', width: 80, height: 80 }), Text({ size: 'sm' }, `Quantity: ${quantity}`), Price({ amount: price, size: 'sm' }));
  }
  return x(`article.basket-item>div.basket-item__media>${slot(0)}^div.basket-item__body>h${headingLevel}.basket-item__title>${slot(1)}^${slot(2)}+${slot(3)}+${slot(4)}^div.basket-item__actions>form.basket-item__update[action=/basket/update method=post]>input${at({ type: 'hidden', name: 'lineId', value: lineId })}+${slot(5)}+${slot(6)}^form.basket-item__remove[action=/basket/remove method=post]>input${at({ type: 'hidden', name: 'lineId', value: lineId })}+${slot(7)}^${slot(8)}`,
    Image({ src: imageSrc, alt: '', width: 120, height: 120 }),
    Link({ href, variant: 'subtle' }, title),
    catalogueNumber ? Text({ size: 'sm', isMuted: true }, `Cat. No. ${catalogueNumber}`) : '',
    availability ? Availability(availability, availability.label) : '',
    addOns.length ? x(`ul.basket-item__add-ons>${slot(0)}`, addOns.map(a => x(`li${tx(`${a.title} ${gbp(a.price)}`)}`))) : '',
    QuantitySelector({ id: `qty-${lineId}`, value: quantity, max: maxQuantity }),
    Button({ type: 'submit', variant: 'tertiary', size: 'sm' }, 'Update'),
    Button({ type: 'submit', variant: 'tertiary', size: 'sm', iconStart: 'trash', label: `Remove ${title} from trolley` }, 'Remove'),
    Price({ amount: price, amountWas: priceWas }));
};

export const OrderSummary = ({ title = 'Order summary', itemCount, subtotal, delivery, discount, total, ctaLabel, ctaHref, hasPromoCode, items, paymentNote }) => {
  const row = (label, value, isTotal) => x(`div.order-summary__row${isTotal ? '.order-summary__row--total' : ''}>dt${tx(label)}+dd>${slot(0)}`, value);
  const rows = [
    row(itemCount ? `Subtotal (${itemCount} items)` : 'Subtotal', Price({ amount: subtotal, size: 'sm' })),
    row('Delivery', delivery === undefined ? 'Calculated at checkout' : Price({ amount: delivery, size: 'sm' })),
    discount ? row('Discount', `−${gbp(discount)}`) : '',
    row('Total', Price({ amount: total, size: 'lg' }), true)];
  return x(`aside.order-summary[aria-labelledby=summary-title]>${slot(0)}+${slot(1)}+dl.order-summary__lines>${slot(2)}^${slot(3)}+${slot(4)}+${slot(5)}`,
    Heading({ id: 'summary-title', level: 2, size: 'md' }, title),
    items ? x(`ul.order-summary__items>${slot(0)}`, items.map(i => x(`li>${slot(0)}`, BasketItem({ ...i, variant: 'compact' })))) : '',
    rows,
    hasPromoCode ? x(`details.order-summary__promo>summary{Add a promo code}+form[action=/basket/promo method=post]>${slot(0)}+${slot(1)}`,
      FormField({ id: 'promo', label: 'Promo code' }, InputGroup({}, Input({ id: 'promo', name: 'promo', autocomplete: 'off' }), Button({ type: 'submit', variant: 'secondary' }, 'Apply'))), '') : '',
    ctaLabel ? Button({ href: ctaHref, variant: 'primary', size: 'lg', isFullWidth: true }, ctaLabel) : '',
    paymentNote ? Text({ size: 'sm', isMuted: true }, paymentNote) : '');
};

export const ProgressSteps = ({ steps, current = 1 }) =>
  x(`nav.progress-steps[aria-label="Checkout progress"]>ol.progress-steps__list>${slot(0)}`, steps.map((s, i) => {
    const n = i + 1;
    if (n < current) return x(`li.progress-steps__step[data-state=complete]>${slot(0)}`, Link({ href: s.href, variant: 'subtle', iconStart: 'check' }, s.label));
    if (n === current) return x(`li.progress-steps__step[data-state=current aria-current=step]>span${tx(s.label)}`);
    return x(`li.progress-steps__step[data-state=upcoming]>span${tx(s.label)}`);
  }));

export const Fieldset = ({ id, legend, headingLevel, hint, error, isLegendHidden, layout }, children) => {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  return x(`fieldset.fieldset${at({ id, 'aria-describedby': describedBy, 'data-layout': def(layout, 'stacked') })}>legend.fieldset__legend${at({ 'data-visually-hidden': isLegendHidden })}>${slot(0)}^${slot(1)}+${slot(2)}+${slot(3)}`,
    headingLevel ? Heading({ level: headingLevel, size: 'md' }, legend) : x(`{${legend.replace(/[${}]/g, m => '\\' + m)}}`),
    hint ? FieldMessage({ id: `${id}-hint` }, hint) : '', error ? FieldMessage({ id: `${id}-error`, status: 'danger' }, error) : '', children);
};

export const InputGroup = ({ prefix, suffix }, input, button) =>
  x(`div.input-group>${prefix ? `span.input-group__prefix[aria-hidden=true]${tx(prefix)}+` : ''}${slot(0)}${suffix ? `+span.input-group__suffix[aria-hidden=true]${tx(suffix)}` : ''}+${slot(1)}`, input, button || '');

export const PasswordInput = ({ id, name = 'password', autocomplete = 'current-password', requirements, isRequired, isInvalid, describedBy, hasToggle = true }) => {
  const rulesId = requirements ? `${id}-rules` : undefined;
  return x(`div.password-input>${slot(0)}+${slot(1)}${hasToggle ? '+p.password-input__status[aria-live=polite data-visually-hidden]' : ''}${requirements ? `+ul.password-input__rules${at({ id: rulesId })}>${slot(2)}` : ''}`,
    Input({ id, type: 'password', name, autocomplete, isRequired, isInvalid, describedBy: [describedBy, rulesId].filter(Boolean).join(' ') || undefined }),
    hasToggle ? Button({ variant: 'tertiary', size: 'sm', label: 'Show password' }, 'Show') : '',
    (requirements || []).map(r => x(`li${tx(r)}`)));
};

export const DateInput = ({ id, name, legend, hint, error, value = {}, invalidParts, isBirthDate }) => {
  const invalid = invalidParts || (error ? ['day', 'month', 'year'] : []);
  const part = (p, label) => x(`div.date-input__item${p === 'year' ? '.date-input__item--year' : ''}>label.date-input__label${at({ for: `${id}-${p}` })}${tx(label)}+${slot(0)}`,
    Input({ id: `${id}-${p}`, name: `${name}${label}`, inputMode: 'numeric', autocomplete: isBirthDate ? `bday-${p}` : undefined, value: value[p], isInvalid: invalid.includes(p) }));
  return Fieldset({ id, legend, hint, error }, x(`div.date-input>${slot(0)}`, [part('day', 'Day'), part('month', 'Month'), part('year', 'Year')]));
};

export const CharacterCount = ({ id, name, label, hint, error, maxLength, rows = 4, value = '' }) => {
  const over = value.length - maxLength;
  const message = over > 0 ? `You have ${over} character${over === 1 ? '' : 's'} too many` : `You can enter up to ${maxLength} characters`;
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`, `${id}-count`].filter(Boolean).join(' ');
  return x(`div.character-count${at({ 'data-over-limit': over > 0 })}>${slot(0)}+${slot(1)}`,
    FormField({ id, label, hint, error }, Textarea({ id, name, rows, value, isInvalid: !!error, describedBy })),
    FieldMessage({ id: `${id}-count`, isLive: true }, message));
};

export const AddressLookup = ({ id, legend = 'Address', headingLevel, postcode, addresses, error, isManual }) => {
  const f = (key, label, name, autocomplete) => FormField({ id: `${id}-${key}`, label }, Input({ id: `${id}-${key}`, name, autocomplete }));
  return x(`div.address-lookup>${slot(0)}`, Fieldset({ id, legend, headingLevel }, [
    FormField({ id: `${id}-postcode`, label: 'Postcode', error }, InputGroup({},
      Input({ id: `${id}-postcode`, name: 'postcode', autocomplete: 'postal-code', value: postcode, isInvalid: !!error, describedBy: error ? `${id}-postcode-error` : undefined }),
      Button({ type: 'submit', variant: 'secondary', name: 'action', value: 'findAddress' }, 'Find address'))),
    addresses ? FormField({ id: `${id}-select`, label: 'Select your address' }, Select({ id: `${id}-select`, name: 'addressId', options: [{ value: '', label: `${addresses.length} addresses found` }, ...addresses] })) : '',
    x(`details.address-lookup__manual${at({ open: isManual })}>summary{Enter address manually}+${slot(0)}`, [
      f('line1', 'Address line 1', 'addressLine1', 'address-line1'), f('line2', 'Address line 2 (optional)', 'addressLine2', 'address-line2'), f('town', 'Town or city', 'town', 'address-level2')]),
  ]));
};

export const Form = ({ action, method = 'post', errors, submitLabel, cancelLabel, cancelHref, isSubmitting }, children) =>
  x(`form.form${at({ action, method, novalidate: true })}>${slot(0)}+${slot(1)}+div.form__actions>${slot(2)}+${slot(3)}`,
    errors ? Alert({ status: 'danger', title: 'There is a problem' }, [x(`ul.alert__list>${slot(0)}`, errors.map(e => x(`li>${slot(0)}`, Link({ href: `#${e.fieldId}` }, e.message))))]) : '',
    children, Button({ type: 'submit', variant: 'primary', isLoading: isSubmitting }, submitLabel),
    cancelHref ? Link({ href: cancelHref, variant: 'standalone' }, cancelLabel) : '');
