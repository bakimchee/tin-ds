# Availability

A one-line stock or fulfilment message with an icon, such as "In stock" or "Collect today from Leeds".

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| status | `inStock` \| `lowStock` \| `outOfStock` \| `preOrder` | `inStock` | Sets the icon and colour. |
| method | `delivery` \| `collection` | — | Adds a truck or store icon instead of the status icon. |
| children | string | — | Message, such as "Get it tomorrow" or "Only 3 left". |

## Variations

### In stock

```emmet
p.availability[data-status=inStock]>Icon[name=check]+span{In stock}
```

### Delivery

```emmet
p.availability[data-status=inStock data-method=delivery]>Icon[name=truck]+span{Delivery available, get it tomorrow}
```

### Collection

```emmet
p.availability[data-status=lowStock data-method=collection]>Icon[name=store]+span{Only 3 left at Leeds Briggate}
```

### Out of stock

```emmet
p.availability[data-status=outOfStock]>Icon[name=close]+span{Out of stock}
```

## Examples

- **Product card**: short delivery and collection lines.
- **Product buy box**: after a postcode check.
- **Basket item**: warns when stock has dropped.

## Notes

- Status values are camelCase because they are prop values, not colour tokens.
- Colour maps to `status`: `inStock` success, `lowStock` warning, `outOfStock` danger, `preOrder` info.
- Icon: `truck` or `store` when `method` is set. Otherwise `check` for `inStock`, `warning` for `lowStock`, `close` for `outOfStock` and `calendar` for `preOrder`.
- Uses [icon.md](icon.md).
