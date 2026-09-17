# Select

A native drop-down list for choosing one option. Give it a visible label with [form-field.md](form-field.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Connects the select to its label. Required. |
| name | string | — | Form field name. |
| size | `sm` \| `md` \| `lg` | `md` | Height. |
| options | `{ value, label, isSelected }[]` | — | Choices. Each renders an `option`. |
| isRequired | boolean | `false` | Renders `required`. |
| isInvalid | boolean | `false` | Renders `aria-invalid=true`. |
| isDisabled | boolean | `false` | Renders `disabled`. |
| onChange | function | — | Called when the choice changes. |

## Variations

### Default

```emmet
select.select#sort[name=sort]>option[value=relevance selected]{Relevance}+option[value=price-asc]{Price: low to high}+option[value=price-desc]{Price: high to low}+option[value=rating]{Customer rating}
```

## Examples

- **Sort products**: "Relevance", "Price: low to high", "Price: high to low", "Customer rating", "Newest".
- **Checkout title**: "Mr", "Mrs", "Ms", "Mx", "Dr".
- **Products per page**: 30, 60, 90.

## Notes

- Use [radio.md](radio.md) when there are five or fewer options that people should compare.
- Tokens: same as [input.md](input.md).
