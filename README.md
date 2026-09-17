# tin-ds

A text-only design system for e-commerce sites like argos.co.uk and ao.com. Every component and pattern is a Markdown file with a description, a prop table and its HTML structure in Emmet. The only code is three CSS files: [tokens.css](tokens.css) for design tokens, [breakpoints.css](breakpoints.css) for screen sizes and [grid.css](grid.css) for layout.

Start with [conventions.md](conventions.md).

## Components

Atoms and molecules: single elements, and small groups of them that work as one unit.

- [grid.md](components/grid.md): responsive columns
- [grid-item.md](components/grid-item.md): span, offset, order and visibility per breakpoint
- [icon.md](components/icon.md): symbol next to a label
- [heading.md](components/heading.md): page and section titles
- [text.md](components/text.md): body copy and status text
- [link.md](components/link.md): navigation
- [button.md](components/button.md): actions and call-to-action links
- [chip.md](components/chip.md): quick filters and applied filters
- [badge.md](components/badge.md): offers, flags and counts
- [image.md](components/image.md): images at a fixed ratio
- [logo.md](components/logo.md): brand mark
- [input.md](components/input.md): text box
- [select.md](components/select.md): drop-down
- [checkbox.md](components/checkbox.md): on and off, or pick many
- [radio.md](components/radio.md): pick one
- [textarea.md](components/textarea.md): multi-line text box
- [switch.md](components/switch.md): setting that saves straight away
- [field-message.md](components/field-message.md): hint, error or confirmation text
- [price.md](components/price.md): current and previous price
- [rating.md](components/rating.md): star score
- [energy-rating.md](components/energy-rating.md): A–G energy class
- [form-field.md](components/form-field.md): label, hint, error and control
- [fieldset.md](components/fieldset.md): legend, hint and error for a group of controls
- [input-group.md](components/input-group.md): input with a prefix, suffix or button
- [password-input.md](components/password-input.md): password with show/hide and rules
- [date-input.md](components/date-input.md): day, month and year
- [character-count.md](components/character-count.md): textarea with a length limit
- [search-bar.md](components/search-bar.md): site search
- [quantity-selector.md](components/quantity-selector.md): minus, number, plus
- [breadcrumb.md](components/breadcrumb.md): category path
- [pagination.md](components/pagination.md): result pages
- [accordion.md](components/accordion.md): sections that open and close
- [dialog.md](components/dialog.md): modal and drawer
- [alert.md](components/alert.md): messages
- [availability.md](components/availability.md): stock and fulfilment line
- [card.md](components/card.md): category, promo and content tiles
- [banner.md](components/banner.md): hero and strip promotions
- [carousel.md](components/carousel.md): sideways-scrolling rail
- [product-gallery.md](components/product-gallery.md): product images
- [link-list.md](components/link-list.md): titled list of links
- [spec-list.md](components/spec-list.md): specifications
- [rating-summary.md](components/rating-summary.md): overall rating and breakdown
- [review.md](components/review.md): single review
- [option-card.md](components/option-card.md): delivery, protection and add-on choices
- [progress-steps.md](components/progress-steps.md): checkout progress

## Patterns

Organisms and above: components put together into an experience, from a product card up to a whole page template.

- [form.md](patterns/form.md): error summary, fields, actions and validation rules
- [address-lookup.md](patterns/address-lookup.md): find an address by postcode
- [product-card.md](patterns/product-card.md): product in a grid or rail
- [filter-group.md](patterns/filter-group.md): one product filter
- [basket-item.md](patterns/basket-item.md): trolley line
- [order-summary.md](patterns/order-summary.md): totals and next step
- [usp-bar.md](patterns/usp-bar.md): service promises
- [main-nav.md](patterns/main-nav.md): departments and mega menu
- [site-header.md](patterns/site-header.md): logo, search, account, trolley and navigation
- [site-footer.md](patterns/site-footer.md): links, newsletter and legal text
- [filter-panel.md](patterns/filter-panel.md): all filters
- [listing-toolbar.md](patterns/listing-toolbar.md): count, sort and view
- [product-grid.md](patterns/product-grid.md): products and pagination
- [product-buy-box.md](patterns/product-buy-box.md): price and add to trolley
- [product-info.md](patterns/product-info.md): description, specifications and reviews
- [added-to-basket-dialog.md](patterns/added-to-basket-dialog.md): add-to-trolley confirmation
- [checkout-form.md](patterns/checkout-form.md): details, delivery and payment
- [cookie-banner.md](patterns/cookie-banner.md): cookie consent
- [page.md](patterns/page.md): shared page shell and layout regions
- [home.md](patterns/home.md): home page
- [product-listing.md](patterns/product-listing.md): category and search results page
- [product-detail.md](patterns/product-detail.md): product page
- [basket.md](patterns/basket.md): trolley page
- [checkout.md](patterns/checkout.md): checkout and confirmation pages
