// Foundations, each mirroring the Emmet in foundations/*.md
import emmet from 'emmet';

const q = v => `"${String(v).replace(/"/g, '&quot;')}"`;
const esc = v => String(v).replace(/&/g, '&amp;').replace(/[${}]/g, m => '\\' + m);
// [attr] block. true renders a bare attribute; false/undefined/null are dropped.
export const at = o => {
  const parts = Object.entries(o).filter(([, v]) => v !== undefined && v !== null && v !== false)
    .map(([k, v]) => (v === true ? k : `${k}=${q(v)}`));
  return parts.length ? `[${parts.join(' ')}]` : '';
};
export const tx = v => `{${esc(v)}}`;
export const slot = i => `{@@${i}@@}`;
// Expand Emmet, then drop rendered children into {@@n@@} slots.
export const x = (abbr, ...slots) => {
  let html = emmet(abbr, { options: { 'output.format': false } });
  slots.forEach((s, i) => { html = html.split(`@@${i}@@`).join(Array.isArray(s) ? s.join('') : s); });
  return html.replace(/&(?=\s)/g, '&amp;');
};
const def = (v, d) => (v === d ? undefined : v);
export const gbp = n => (n === 0 ? 'Free' : `£${n.toFixed(2)}`);

export const Icon = ({ name, size }) => x(`span.icon${at({ 'data-name': name, 'data-size': def(size, 'md'), 'aria-hidden': 'true' })}`);

export const Heading = ({ level = 2, size, id, isVisuallyHidden }, children) =>
  x(`h${level}.heading${at({ id, 'data-size': def(size, 'md'), 'data-visually-hidden': isVisuallyHidden })}${tx(children)}`);

export const Text = ({ as = 'p', size, status, isMuted, isBold }, children) =>
  x(`${as}.text${at({ 'data-size': def(size, 'md'), 'data-status': def(status, 'neutral'), 'data-muted': isMuted, 'data-bold': isBold })}${slot(0)}`, children);

export const Link = ({ href, variant, iconStart, iconEnd, isExternal, isCurrent }, children) => {
  const attrs = at({ href, 'data-variant': def(variant, 'inline'), target: isExternal && '_blank', rel: isExternal && 'noopener', 'aria-current': isCurrent && 'page' });
  if (!iconStart && !iconEnd) return x(`a.link${attrs}${slot(0)}`, children);
  return x(`a.link${attrs}${slot(0)}`, [iconStart ? Icon({ name: iconStart }) : '', typeof children === 'string' ? x(`span${tx(children)}`) : children, iconEnd ? Icon({ name: iconEnd }) : '']);
};

export const Button = ({ variant, size, type = 'button', href, iconStart, iconEnd, label, isIconOnly, isFullWidth, isDisabled, isLoading, command, commandFor, name, value }, children) => {
  const tag = href ? 'a' : 'button';
  const attrs = at({ href, type: href ? undefined : type, name, value, 'data-variant': def(variant, 'primary'), 'data-size': def(size, 'md'), 'data-icon-only': isIconOnly, 'data-full-width': isFullWidth, 'aria-label': label, disabled: isDisabled, 'aria-busy': isLoading && 'true', command, commandfor: commandFor });
  if (isIconOnly) return x(`${tag}.button${attrs}${slot(0)}`, Icon({ name: iconStart }));
  if (!iconStart && !iconEnd) return x(`${tag}.button${attrs}${tx(children)}`);
  return x(`${tag}.button${attrs}${slot(0)}`, [iconStart ? Icon({ name: iconStart }) : '', x(`span${tx(children)}`), iconEnd ? Icon({ name: iconEnd }) : '']);
};

export const Chip = ({ variant, isSelected, href, icon }, children) => {
  const tag = href ? 'a' : 'button';
  if (variant === 'removable') return x(`a.chip${at({ href, 'data-variant': 'removable', 'aria-label': `Remove filter: ${children}` })}>span${tx(children)}+${slot(0)}`, Icon({ name: 'close' }));
  const attrs = at({ href, type: href ? undefined : 'button', 'aria-pressed': href ? undefined : String(!!isSelected), 'aria-current': href && isSelected ? 'true' : undefined });
  if (icon) return x(`${tag}.chip${attrs}>${slot(0)}+span${tx(children)}`, Icon({ name: icon }));
  return x(`${tag}.chip${attrs}${tx(children)}`);
};

export const Badge = ({ variant, status, label }, children) => variant === 'count'
  ? x(`span.badge[data-variant=count]>span${tx(children)}+span[data-visually-hidden]${tx(label)}`)
  : x(`span.badge${at({ 'data-variant': def(variant, 'status'), 'data-status': def(status, 'neutral') })}${tx(children)}`);

export const Image = ({ src, alt = '', ratio, fit, width, height, isEager }) =>
  x(`img.image${at({ src, alt: alt || true, width, height, 'data-ratio': def(ratio, 'square'), 'data-fit': def(fit, 'contain'), loading: isEager ? 'eager' : 'lazy' })}`);

export const Logo = ({ href = '/', variant, size, label }) =>
  x(`a.logo${at({ href, 'data-variant': def(variant, 'default'), 'data-size': def(size, 'md') })}>img${at({ src: variant === 'inverse' ? '../img/logo-inverse.svg' : '../img/logo.svg', alt: `${label} home`, width: 120, height: 40 })}`);

export const Input = ({ id, name, type = 'text', size, value, placeholder, autocomplete, inputMode, min, max, isRequired, isInvalid, isDisabled, describedBy }) =>
  x(`input.input${at({ id, type, name, value, placeholder, autocomplete, inputmode: inputMode, min, max, required: isRequired, 'aria-invalid': isInvalid && 'true', disabled: isDisabled, 'aria-describedby': describedBy, 'data-size': def(size, 'md') })}`);

export const Select = ({ id, name, options }) =>
  x(`select.select${at({ id, name })}>${slot(0)}`, options.map(o => x(`option${at({ value: o.value, selected: o.isSelected })}${tx(o.label)}`)));

export const Checkbox = ({ id, name, value, isChecked, isDisabled, count }, children) =>
  x(`label.checkbox${at({ for: id })}>input${at({ id, type: 'checkbox', name, value, checked: isChecked, disabled: isDisabled })}+span.checkbox__label${tx(children)}${count !== undefined ? `+span.checkbox__count${tx(`(${count})`)}` : ''}`);

export const Radio = ({ id, name, value, isChecked, isDisabled, count }, children) =>
  x(`label.radio${at({ for: id })}>input${at({ id, type: 'radio', name, value, checked: isChecked, disabled: isDisabled })}+span.radio__label${tx(children)}${count !== undefined ? `+span.radio__count${tx(`(${count})`)}` : ''}`);

export const Price = ({ amount, amountWas, prefix, suffix, size }) =>
  x(`span.price${at({ 'data-size': def(size, 'md') })}>${prefix ? `span.price__prefix${tx(prefix + ' ')}+` : ''}data.price__now${at({ value: amount.toFixed(2) })}${tx(gbp(amount))}${amountWas ? `+span.price__was>span.price__was-label{Was }+s>data${at({ value: amountWas.toFixed(2) })}${tx(gbp(amountWas))}` : ''}${suffix ? `${amountWas ? '^^' : '+'}span.price__suffix${tx(' ' + suffix)}` : ''}`);

export const Rating = ({ value, count, href, size, hasValue }) => {
  if (count === 0) return '';
  const countPart = count === undefined ? '' : href ? `+a.rating__count${at({ href })}${tx(`${count} reviews`)}` : `+span.rating__count${tx(`(${count})`)}`;
  return x(`div.rating${at({ 'data-size': def(size, 'sm'), 'data-has-value': hasValue })}>${hasValue ? `span.rating__value${tx(value)}+` : ''}meter.rating__stars${at({ min: 0, max: 5, value })}${tx(`${value} out of 5 stars`)}${countPart}`);
};

export const EnergyRating = ({ grade, href, size }) =>
  x(`a.energy-rating${at({ href, 'data-grade': grade, 'data-size': def(size, 'sm'), 'aria-label': `Energy rating ${grade}, view energy label` })}${tx(grade)}`);

export const FieldMessage = ({ id, status, isLive }, children) => {
  const attrs = at({ id, 'data-status': def(status, 'neutral'), 'aria-live': isLive && 'polite' });
  if (status === 'danger') return x(`p.field-message${attrs}>${slot(0)}+span[data-visually-hidden]{Error: }+span${tx(children)}`, Icon({ name: 'warning' }));
  if (status === 'success') return x(`p.field-message${attrs}>${slot(0)}+span${tx(children)}`, Icon({ name: 'check' }));
  return x(`p.field-message${attrs}${tx(children)}`);
};

export const Textarea = ({ id, name, rows = 4, value, autocomplete, maxLength, isRequired, isInvalid, isDisabled, describedBy }) =>
  x(`textarea.textarea${at({ id, name, rows, autocomplete, maxlength: maxLength, required: isRequired, 'aria-invalid': isInvalid && 'true', disabled: isDisabled, 'aria-describedby': describedBy })}${value ? tx(value) : ''}`);

export const Switch = ({ id, name, value = 'on', isChecked, isDisabled, describedBy }, children) =>
  x(`label.switch${at({ for: id })}>span.switch__label${tx(children)}+input${at({ id, type: 'checkbox', role: 'switch', name, value, checked: isChecked, disabled: isDisabled, 'aria-describedby': describedBy })}`);

// Grid props to data attributes: spanMd -> data-span-md, span2xl -> data-span-2xl, hideBelow -> data-hide-below.
const gridData = o => Object.fromEntries(Object.entries(o).map(([k, v]) => ['data-' + k.replace(/(Sm|Md|Lg|Xl|2xl)$/, m => '-' + m.toLowerCase()).replace(/[A-Z]/g, c => '-' + c.toLowerCase()), v]));
export const Grid = ({ as = 'div', gap, query, ...rest }, children) =>
  x(`${as}.grid${at({ 'data-gap': def(gap, 'md'), 'data-query': def(query, 'screen'), ...gridData(rest) })}>${slot(0)}`, children);
export const GridItem = ({ as = 'div', ...rest }, children) =>
  x(`${as}.grid__item${at(gridData(rest))}>${slot(0)}`, children);
