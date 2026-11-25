# Conventions

The rules every file in tin-ds follows. Read this before any component or pattern file.

## Sections

tin-ds has two sections, based on [atomic design](https://atomicdesign.bradfrost.com/chapter-2/).

1. **components/** are atoms and molecules. An atom is a single element, such as `Button` or `Price`. A molecule is a small group of them working as one unit, such as `FormField` or `SearchBar`. Components use plain HTML and other components.
2. **patterns/** are organisms and above. They put several components together into an experience, such as `ProductCard`, `CheckoutForm` or `SiteHeader`, up to whole page templates such as `Home`. Patterns use components and other patterns.

A component never uses a pattern. The exception is content: a container component such as `Carousel` or `Dialog` can hold a pattern in its `children`, because it doesn't depend on what it holds.

## File template

````
# Name
One paragraph: what it is and when to use it.

## Props
| Prop | Type | Default | Description |

## Variations
### Variation name
```emmet
emmet
```

## Examples
- **Example name** — when and why it is used.

## Notes
Accessibility, behaviour, tokens and anything else.
````

## Emmet

Structure is written in [Emmet](https://docs.emmet.io/abbreviations/syntax/) syntax.

- `lowercase` tags are HTML elements: `button.button[type=button]{Add to trolley}`.
- `PascalCase` tags are other tin-ds components or patterns. `Button[variant=secondary]{Cancel}` means use [button.md](components/button.md) with those props.
- Attributes on a PascalCase tag are its props. A bare attribute sets a boolean prop to `true`: `Button[isFullWidth]`.
- `{text}` or nested `>` content on a PascalCase tag fills its `children` prop.
- Quote attribute values that contain spaces, `?`, `=` or `&`: `[href="/tvs?page=2"]`.
- `*n` repeats an element. `$` inside it is the index: `li*3>Link[href=/page/$]{Page $}`.
- Example text and URLs are placeholders. Replace them with real content.

## Props to HTML

1. The root element gets a class named after the file: `product-card.md` renders `.product-card`.
2. Named parts inside a component get a `component__part` class: `.product-card__title`.
3. Enum props (`variant`, `size`, …) render as data attributes on the root: `variant=primary` renders `data-variant="primary"`. Default values can be left out.
4. Boolean props render as the native attribute when HTML has one (`isDisabled` renders `disabled`), otherwise as an empty data attribute (`isFullWidth` renders `data-full-width`). `false` renders nothing.
5. Native props (`href`, `type`, `name`, `value`, `id`, `src`, `alt`, `min`, `max`, `placeholder`, `autocomplete`) pass straight through, on any component.
6. Responsive props take a breakpoint suffix: `span`, `spanSm`, `spanMd`, `spanLg`, `spanXl`, `span2xl`. The suffix renders as `-sm` to `-2xl`: `spanMd=6` renders `data-span-md="6"`. Prop tables mark these props "Responsive".
7. Text that only screen readers need gets `data-visually-hidden`: `label.search-bar__label[for=q data-visually-hidden]{Search}`. Never use `aria-label` on a plain `div`, `span`, `p` or `ul`. Use hidden text or a heading instead.
8. Event props (`on…`) describe behaviour. Without JavaScript they fall back to the link or form in the markup.

## Prop naming

All props are camelCase and use the same words for the same things.

| Pattern | Use | Examples |
| --- | --- | --- |
| `is` + State | Boolean state. Default `false`. | `isDisabled`, `isOpen`, `isSelected`, `isInvalid`, `isRequired`, `isLoading`, `isFullWidth` |
| `has` + Thing | Boolean that shows or hides a part. Default `false`, or `true` when the part shows in most uses. Turn it off with `=false`. | `hasDivider`, `hasViewAll` |
| `on` + Event | Callback. | `onClick`, `onChange`, `onRemove`, `onAddToBasket` |
| Subject + Detail | Related props share a first word so they group together. | `imageSrc`, `imageAlt`, `iconStart`, `iconEnd`, `priceWas`, `ctaLabel`, `ctaHref` |
| Plural noun | Lists. | `items`, `options`, `images`, `products`, `links` |
| `variant` | Visual style. | `primary`, `secondary` |
| `size` | Scale, always `sm` \| `md` \| `lg`. | |
| `status` | Meaning, always `neutral` \| `info` \| `success` \| `warning` \| `danger`. | |
| `children` | Content between the tags. | |
| `label` | Visible or accessible name of a control. | |
| `legend` | Question for a group of controls. | |
| `hint`, `error` | Help and error text for a field or group. | |
| `title`, `description` | Heading and supporting text of a block. | |
| `level` | Heading level `1`–`6`. | |
| `href`, `…Href` | Link targets. | `href`, `viewAllHref` |
| `value`, `defaultValue`, `min`, `max` | Form values. | |
| Prop + `Sm` \| `Md` \| `Lg` \| `Xl` \| `2xl` | The same prop from that breakpoint up. | `spanMd`, `columnsXl`, `span2xl` |

## Tokens

All visual values live in [tokens.css](packages/css/tokens.css) as CSS variables.

- Two tiers. **Primitive** tokens are raw values (`--color-red-600`). **Semantic** tokens give them a job (`--color-action-primary-background`).
- Names go from general to specific: `--{category}-{concept}-{variant}-{property}-{state}`. Example: `--color-action-primary-background-hover`.
- Components and patterns use semantic tokens only. To re-theme (Argos red, AO green) change the primitives or the brand aliases.

## Breakpoints

Mobile first: each breakpoint applies from its width up, until a larger one takes over.

| Name | From | Typical screen |
| --- | --- | --- |
| `xs` | 0px | Phones |
| `sm` | 640px (`40rem`) | Large phones |
| `md` | 768px (`48rem`) | Tablets |
| `lg` | 1024px (`64rem`) | Laptops |
| `xl` | 1280px (`80rem`) | Desktops |
| `2xl` | 1536px (`96rem`) | Wide screens |

- [breakpoints.css](packages/css/breakpoints.css) holds the widths as variables for reference and scripts. CSS variables don't work inside `@media`, so [grid.css](packages/css/grid.css) repeats the widths. Change both files together.
- Widths are in `rem`, so the layout follows the browser's text size setting.
- Write media queries as `@media (width >= 48rem)`.
- Lay out components with [grid.md](components/grid.md) and [grid-item.md](components/grid-item.md). Components don't set their own widths.
