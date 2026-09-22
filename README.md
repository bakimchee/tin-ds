# tin-ds

A text-only design system for e-commerce sites like argos.co.uk and ao.com, and news sites like bbc.co.uk/news and theguardian.com. Every component and pattern is a Markdown file with a description, a prop table and its HTML structure in Emmet. The only code is three CSS files: [tokens.css](tokens.css) for design tokens, [breakpoints.css](breakpoints.css) for screen sizes and [grid.css](grid.css) for layout.

Start with [conventions.md](conventions.md).

## Example sites

Demo sites in [sites/](sites/), built only from these docs. They are a bank of examples of the design system in use.

- [shop-site](sites/shop-site/index.html): an Argos or AO style shop. Home, listing, product, basket, checkout and confirmation.
- [news-site](sites/news-site/index.html): a BBC or Guardian style news site. Front page, article, section and live coverage.

Both share [sites/site.css](sites/site.css), which styles every component and pattern, and the placeholder artwork in `sites/img`. To rebuild them, run `npm install` then `npm run build` in [sites/build](sites/build).

## Checks

[ops/](ops/) checks the docs and the example sites. Run `npm install` then `npm run check:all` in [ops/](ops/):

- Every Emmet block expands, every component named in one exists, and every link resolves.
- Every prop used on a component is in that component's prop table.
- No component uses a pattern, the rule in [conventions.md](conventions.md).
- The example sites are valid HTML.

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
- [avatar.md](components/avatar.md): a person's picture or initials
- [timestamp.md](components/timestamp.md): when something was published or updated
- [byline.md](components/byline.md): who wrote a story
- [figure.md](components/figure.md): picture or video with a caption and credit
- [quote.md](components/quote.md): pull quote and block quote
- [callout.md](components/callout.md): key points, analysis or background box
- [media-player.md](components/media-player.md): video and audio
- [table.md](components/table.md): rows and columns of data
- [comment.md](components/comment.md): one reader comment
- [share-bar.md](components/share-bar.md): share and copy link
- [ad-slot.md](components/ad-slot.md): labelled advertising space

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
- [story-card.md](patterns/story-card.md): a story in a list or grid
- [story-list.md](patterns/story-list.md): a titled block of stories
- [most-read.md](patterns/most-read.md): numbered list of popular stories
- [article-header.md](patterns/article-header.md): headline, standfirst, byline and share
- [article-body.md](patterns/article-body.md): the story itself
- [related-stories.md](patterns/related-stories.md): more on this story and related topics
- [live-blog.md](patterns/live-blog.md): running updates on a live story
- [comment-thread.md](patterns/comment-thread.md): reader comments and the comment box
- [newsletter-signup.md](patterns/newsletter-signup.md): email newsletter block
- [topic-header.md](patterns/topic-header.md): section or topic page header
- [masthead.md](patterns/masthead.md): news site header
- [news-front.md](patterns/news-front.md): news front page
- [article.md](patterns/article.md): news story page
- [news-section.md](patterns/news-section.md): section or topic page
- [live-story.md](patterns/live-story.md): live coverage page
