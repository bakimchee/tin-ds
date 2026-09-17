# Address Lookup

Finds a UK address from a postcode. People enter a postcode, press "Find address" and choose from a list. They can also type the address in themselves. Used for the delivery address at checkout and for adding an address to an account.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | — | Fieldset `id` and prefix for field ids, such as `{id}-postcode`. Required. |
| legend | string | `Address` | Group legend. |
| headingLevel | `1`–`4` | — | Passed to [fieldset.md](../components/fieldset.md). |
| postcode | string | — | Postcode already entered. |
| addresses | `{ value, label }[]` | — | Results for the postcode. Shows the address select when set. |
| error | string | — | Postcode error, such as "We couldn't find an address for that postcode". |
| isManual | boolean | `false` | Opens the manual address fields. Renders `open` on the `details`. |

## Variations

### Postcode search

```emmet
div.address-lookup>Fieldset#address[legend="Delivery address"]>FormField[id=address-postcode label=Postcode]>InputGroup>Input#address-postcode[name=postcode autocomplete=postal-code]+Button[type=submit variant=secondary name=action value=findAddress]{Find address}^^details.address-lookup__manual>summary{Enter address manually}+FormField[id=address-line1 label="Address line 1"]>Input#address-line1[name=addressLine1 autocomplete=address-line1]^FormField[id=address-line2 label="Address line 2 (optional)"]>Input#address-line2[name=addressLine2 autocomplete=address-line2]^FormField[id=address-town label="Town or city"]>Input#address-town[name=town autocomplete=address-level2]
```

### Addresses found

```emmet
div.address-lookup>Fieldset#address[legend="Delivery address"]>FormField[id=address-postcode label=Postcode]>InputGroup>Input#address-postcode[name=postcode autocomplete=postal-code value="LS1 6AZ"]+Button[type=submit variant=secondary name=action value=findAddress]{Find address}^^FormField[id=address-select label="Select your address"]>Select#address-select[name=addressId]^details.address-lookup__manual>summary{Enter address manually}
```

### Postcode error

```emmet
div.address-lookup>Fieldset#address[legend="Delivery address"]>FormField[id=address-postcode label=Postcode error="We couldn't find an address for that postcode"]>InputGroup>Input#address-postcode[name=postcode autocomplete=postal-code value="LS99 9ZZ" isInvalid describedBy=address-postcode-error]+Button[type=submit variant=secondary name=action value=findAddress]{Find address}^^details.address-lookup__manual[open]>summary{Enter address manually}
```

## Examples

- **Checkout**: step 2 of [checkout-form.md](checkout-form.md), with `headingLevel=2`.
- **Account**: adding a new address book entry.
- **Billing address**: shown when it differs from the delivery address.

## Notes

- Works without JavaScript. "Find address" submits the form with `action=findAddress` and the page comes back with `addresses`. With JavaScript the list loads in place.
- The first option of the select is "12 addresses found". Choosing an address fills the manual fields, so they can be checked.
- In "Addresses found" and "Postcode error", the manual `details` holds the same fields as in "Postcode search".
- If the lookup fails, open the manual fields with `isManual`.
- Uses [fieldset.md](../components/fieldset.md), [form-field.md](../components/form-field.md), [input-group.md](../components/input-group.md), [input.md](../components/input.md), [button.md](../components/button.md) and [select.md](../components/select.md).
