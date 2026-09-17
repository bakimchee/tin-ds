# Quantity Selector

Sets how many of an item to buy: minus and plus buttons around a number input.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | `id` of the input. Required. |
| name | string | `quantity` | Form field name. |
| label | string | `Quantity` | Visible label. |
| value | number | `1` | Current quantity. |
| min | number | `1` | Lowest quantity. The minus button is disabled at `min`. |
| max | number | `10` | Highest quantity, usually the stock or order limit. The plus button is disabled at `max`. |
| isLabelHidden | boolean | `false` | Adds `data-visually-hidden` to the label. |
| onChange | function | — | Called with the new quantity. |

## Variations

### Default

```emmet
div.quantity-selector>label.quantity-selector__label[for=qty]{Quantity}+div.quantity-selector__controls>Button[variant=secondary size=sm isIconOnly iconStart=minus label="Decrease quantity" isDisabled]+Input#qty[type=number name=quantity value=1 min=1 max=10 inputMode=numeric size=sm]+Button[variant=secondary size=sm isIconOnly iconStart=plus label="Increase quantity"]
```

## Examples

- **Product buy box**: before "Add to trolley".
- **Basket item**: changes the line quantity. Setting it to 0 does not remove the line. Use the remove button for that.

## Notes

- The input can be typed into, and the buttons are a shortcut.
- Without JavaScript, the buttons do nothing and the input still works.
- Uses [button.md](button.md) and [input.md](input.md).
