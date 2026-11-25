// forms-gallery: every form component and its variations on one page, for checking
// states the shop and news sites don't show. Written from the same docs as the other sites.
import fs from 'node:fs';
import { x, slot, tx, Heading, Text, Link, Button, Input, Select, Checkbox, Radio, Switch, Textarea, FieldMessage, Grid, GridItem } from './foundations.mjs';
import { FormField, Fieldset, InputGroup, PasswordInput, DateInput, CharacterCount, AddressLookup, Form, OptionCard, SearchBar, QuantitySelector } from './components.mjs';

// One labelled example.
const eg = (label, content) => x(`div.gallery__example>${slot(0)}+${slot(1)}`,
  Text({ as: 'p', size: 'sm', isMuted: true }, label), Array.isArray(content) ? content.join('') : content);

const section = (id, title, examples) => x(`section.page__section[aria-labelledby=${id}-title]>${slot(0)}+div.gallery__examples>${slot(1)}`,
  Heading({ id: `${id}-title`, level: 2, size: 'lg' }, title), examples);

const sortOptions = [['relevance', 'Relevance'], ['price-asc', 'Price: low to high'], ['newest', 'Newest']].map(([value, label], i) => ({ value, label, isSelected: i === 0 }));

const sections = [
  ['input', 'Input', [
    eg('Default, with a label from Form Field', FormField({ id: 'g-name', label: 'Full name' }, Input({ id: 'g-name', name: 'name', autocomplete: 'name' }))),
    eg('Small and large', [FormField({ id: 'g-sm', label: 'Small' }, Input({ id: 'g-sm', name: 'small', size: 'sm' })), FormField({ id: 'g-lg', label: 'Large' }, Input({ id: 'g-lg', name: 'large', size: 'lg' }))]),
    eg('With a placeholder', FormField({ id: 'g-postcode', label: 'Postcode' }, Input({ id: 'g-postcode', name: 'postcode', autocomplete: 'postal-code', placeholder: 'e.g. SW1A 1AA' }))),
    eg('Invalid', FormField({ id: 'g-invalid', label: 'Postcode', error: 'Enter a valid UK postcode' }, Input({ id: 'g-invalid', name: 'postcode2', isInvalid: true, value: 'LS99 9ZZ', describedBy: 'g-invalid-error' }))),
    eg('Disabled', FormField({ id: 'g-disabled', label: 'Account number' }, Input({ id: 'g-disabled', name: 'account', value: '1234 5678', isDisabled: true }))),
  ]],
  ['select', 'Select', [
    eg('Default', FormField({ id: 'g-sort', label: 'Sort by' }, Select({ id: 'g-sort', name: 'sort', options: sortOptions }))),
    eg('Inline, as used on the listing toolbar', FormField({ id: 'g-sort-inline', label: 'Sort by', layout: 'inline' }, Select({ id: 'g-sort-inline', name: 'sort2', options: sortOptions }))),
  ]],
  ['textarea', 'Textarea', [
    eg('Default', FormField({ id: 'g-instructions', label: 'Delivery instructions' }, Textarea({ id: 'g-instructions', name: 'instructions', rows: 3 }))),
    eg('Invalid', FormField({ id: 'g-review', label: 'Your review', error: 'Enter your review' }, Textarea({ id: 'g-review', name: 'review', rows: 4, isInvalid: true, describedBy: 'g-review-error' }))),
  ]],
  ['choice', 'Checkbox and radio', [
    eg('Checkboxes, with result counts', [Checkbox({ id: 'g-brand-1', name: 'brand', value: 'samsung', count: 42 }, 'Samsung'), Checkbox({ id: 'g-brand-2', name: 'brand', value: 'lg', count: 31, isChecked: true }, 'LG'), Checkbox({ id: 'g-brand-3', name: 'brand', value: 'sony', isDisabled: true }, 'Sony')].join('')),
    eg('Radios', [Radio({ id: 'g-rating-4', name: 'rating', value: '4', count: 96 }, '4 stars and up'), Radio({ id: 'g-rating-3', name: 'rating', value: '3', count: 140, isChecked: true }, '3 stars and up')].join('')),
  ]],
  ['switch', 'Switch', [
    eg('Off and on', [Switch({ id: 'g-sw-1', name: 'emailOffers' }, 'Email me offers and news'), Switch({ id: 'g-sw-2', name: 'smsUpdates', isChecked: true }, 'Text me delivery updates'), Switch({ id: 'g-sw-3', name: 'post', isDisabled: true }, 'Post (not available)')].join('')),
  ]],
  ['field-message', 'Field Message', [
    eg('Hint, error and success', [FieldMessage({ id: 'g-fm-hint' }, "We'll text you delivery updates."), FieldMessage({ id: 'g-fm-error', status: 'danger' }, 'Enter a valid UK postcode'), FieldMessage({ id: 'g-fm-ok', status: 'success', isLive: true }, 'Promo code SAVE10 applied')].join('')),
  ]],
  ['form-field', 'Form Field', [
    eg('With a hint', FormField({ id: 'g-phone', label: 'Mobile number', hint: "We'll text you delivery updates." }, Input({ id: 'g-phone', type: 'tel', name: 'phone', autocomplete: 'tel', describedBy: 'g-phone-hint' }))),
    eg('With an error', FormField({ id: 'g-email', label: 'Email address', error: 'Enter an email address in the correct format, like name@example.com' }, Input({ id: 'g-email', type: 'email', name: 'email', value: 'sam@example', isInvalid: true, describedBy: 'g-email-error' }))),
  ]],
  ['fieldset', 'Fieldset', [
    eg('Radio group with a hint', Fieldset({ id: 'g-contact', legend: 'How should we send delivery updates?', hint: "We'll only contact you about this order." }, [Radio({ id: 'g-contact-email', name: 'contact', value: 'email', isChecked: true }, 'Email'), Radio({ id: 'g-contact-sms', name: 'contact', value: 'sms' }, 'Text message')])),
    eg('Checkbox group with an error', Fieldset({ id: 'g-services', legend: 'Which services do you need?', error: 'Select at least one service' }, [Checkbox({ id: 'g-services-install', name: 'services', value: 'install' }, 'Installation'), Checkbox({ id: 'g-services-recycle', name: 'services', value: 'recycle' }, 'Recycle my old appliance')])),
    eg('Inline', Fieldset({ id: 'g-gift', legend: 'Is this order a gift?', layout: 'inline' }, [Radio({ id: 'g-gift-yes', name: 'gift', value: 'yes' }, 'Yes'), Radio({ id: 'g-gift-no', name: 'gift', value: 'no', isChecked: true }, 'No')])),
  ]],
  ['input-group', 'Input Group', [
    eg('Prefix', FormField({ id: 'g-min', label: 'Min price (£)' }, InputGroup({ prefix: '£' }, Input({ id: 'g-min', type: 'number', name: 'priceMin', min: 0, inputMode: 'numeric' })))),
    eg('Suffix', FormField({ id: 'g-height', label: 'Height (cm)' }, InputGroup({ suffix: 'cm' }, Input({ id: 'g-height', type: 'number', name: 'height', min: 0, inputMode: 'decimal' })))),
    eg('With a button', FormField({ id: 'g-promo', label: 'Promo code' }, InputGroup({}, Input({ id: 'g-promo', name: 'promo', autocomplete: 'off' }), Button({ type: 'submit', variant: 'secondary' }, 'Apply')))),
  ]],
  ['password-input', 'Password Input', [
    eg('Sign in', FormField({ id: 'g-password', label: 'Password' }, PasswordInput({ id: 'g-password', isRequired: true }))),
    eg('New password, with rules', FormField({ id: 'g-new-password', label: 'Create a password' }, PasswordInput({ id: 'g-new-password', autocomplete: 'new-password', isRequired: true, requirements: ['At least 8 characters', 'At least one number', 'At least one capital letter'] }))),
  ]],
  ['date-input', 'Date Input', [
    eg('Date of birth', DateInput({ id: 'g-dob', name: 'dob', legend: 'What is your date of birth?', hint: 'For example, 27 3 1990', isBirthDate: true })),
    eg('With an error on one part', DateInput({ id: 'g-dob2', name: 'dob2', legend: 'What is your date of birth?', error: 'Date of birth must include a year', value: { day: '27', month: '3' }, invalidParts: ['year'], isBirthDate: true })),
  ]],
  ['character-count', 'Character Count', [
    eg('Under the limit', CharacterCount({ id: 'g-cc', name: 'instructions2', label: 'Delivery instructions (optional)', hint: 'For example, leave with the neighbour at number 12', maxLength: 100, rows: 3 })),
    eg('Over the limit', CharacterCount({ id: 'g-cc2', name: 'instructions3', label: 'Delivery instructions (optional)', error: 'Delivery instructions must be 100 characters or fewer', maxLength: 100, rows: 3, value: 'Please leave the parcel with my neighbour at number 12, and if they are out then the side gate is unlocked so it can go behind the bins.' })),
  ]],
  ['address-lookup', 'Address Lookup', [
    eg('Postcode search', AddressLookup({ id: 'g-address', legend: 'Delivery address' })),
    eg('Addresses found', AddressLookup({ id: 'g-address2', legend: 'Delivery address', postcode: 'LS1 6AZ', addresses: [{ value: 'a1', label: '1 Briggate, Leeds' }, { value: 'a2', label: '2 Briggate, Leeds' }] })),
    eg('Postcode not found, manual fields open', AddressLookup({ id: 'g-address3', legend: 'Delivery address', postcode: 'LS99 9ZZ', error: "We couldn't find an address for that postcode", isManual: true })),
  ]],
  ['option-card', 'Option Card', [
    eg('Radio cards', Fieldset({ id: 'g-fulfil', legend: 'How would you like to get it?' }, [
      OptionCard({ id: 'g-oc-1', name: 'fulfil', value: 'delivery', icon: 'truck', title: 'Delivery', description: 'Get it tomorrow, 7am to 7pm', price: 3.95, isChecked: true }),
      OptionCard({ id: 'g-oc-2', name: 'fulfil', value: 'collection', icon: 'store', title: 'Click & Collect', description: 'Check stock in your local store', price: 0 })])),
    eg('Checkbox card with a badge', OptionCard({ id: 'g-oc-3', name: 'addons', value: 'install', type: 'checkbox', title: '3 year protection plan', description: 'Covers breakdowns and accidental damage', price: 79, badge: 'Most popular' })),
    eg('Expanding when chosen', Fieldset({ id: 'g-collect', legend: 'Where would you like to collect it?' },
      OptionCard({ id: 'g-oc-4', name: 'collect', value: 'store', icon: 'store', title: 'Click & Collect', description: 'Free, ready in 1 hour at selected stores', price: 0, isChecked: true },
        FormField({ id: 'g-collect-postcode', label: 'Enter your postcode' }, InputGroup({}, Input({ id: 'g-collect-postcode', name: 'postcode3', autocomplete: 'postal-code' }), Button({ type: 'submit', variant: 'secondary' }, 'Check stores')))))),
  ]],
  ['quantity-selector', 'Quantity Selector', [
    eg('At the minimum, so minus is disabled', QuantitySelector({ id: 'g-qty', value: 1, min: 1, max: 10 })),
    eg('Mid range', QuantitySelector({ id: 'g-qty2', name: 'quantity2', value: 3, min: 1, max: 10 })),
  ]],
  ['search-bar', 'Search Bar', [
    // One per page: its input is always id="q", so two would clash.
    eg('On a results page, with the query in it', SearchBar({ action: 'index.html', placeholder: 'What are you looking for?', value: 'washing machine' })),
  ]],
  ['form', 'Form', [
    eg('With an error summary', Form({ action: 'index.html', errors: [{ fieldId: 'g-f-name', message: 'Enter your full name' }, { fieldId: 'g-f-email', message: 'Enter an email address in the correct format, like name@example.com' }], submitLabel: 'Save details', cancelLabel: 'Cancel', cancelHref: 'index.html' }, [
      FormField({ id: 'g-f-name', label: 'Full name', error: 'Enter your full name' }, Input({ id: 'g-f-name', name: 'name2', autocomplete: 'name', isRequired: true, isInvalid: true, describedBy: 'g-f-name-error' })),
      FormField({ id: 'g-f-email', label: 'Email address', error: 'Enter an email address in the correct format, like name@example.com' }, Input({ id: 'g-f-email', type: 'email', name: 'email2', autocomplete: 'email', value: 'sam@example', isRequired: true, isInvalid: true, describedBy: 'g-f-email-error' })),
    ])),
  ]],
];

export const buildFormsGallery = sites => {
  const out = `${sites}forms-gallery`;
  fs.mkdirSync(out, { recursive: true });
  const jump = x(`nav.gallery__jump[aria-labelledby=jump-title]>${slot(0)}+ul.gallery__jump-list>${slot(1)}`,
    Heading({ id: 'jump-title', level: 2, size: 'sm' }, 'On this page'),
    sections.map(([id, title]) => x(`li>${slot(0)}`, Link({ href: `#${id}-title`, variant: 'subtle' }, title))));
  const body = [
    Heading({ level: 1, size: 'xl' }, 'Forms gallery'),
    Text({ size: 'lg', isMuted: true }, 'Every form component in tin-ds, with the states the shop and news sites do not show: errors, disabled controls, switches and password rules.'),
    jump,
    ...sections.map(([id, title, examples]) => section(id, title, examples)),
  ].join('');
  const html = x(`html[lang=en-GB]>head>meta[charset=utf-8]+meta[name=viewport content="width=device-width, initial-scale=1"]+title{Forms gallery | tin-ds}+link[rel=stylesheet href=../../packages/css/tokens.css]+link[rel=stylesheet href=../../packages/css/breakpoints.css]+link[rel=stylesheet href=../../packages/css/grid.css]+link[rel=stylesheet href=../site.css]^body>main#main.page[data-page=forms-gallery]>${slot(0)}`, body);
  fs.writeFileSync(`${out}/index.html`, `<!DOCTYPE html>\n${html}\n`);
  return 1;
};
