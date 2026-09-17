# Checkout Form

The checkout steps as one form on one page: your details, delivery address, delivery method and payment. It is a [form.md](form.md), and each step is a numbered [fieldset.md](../components/fieldset.md).

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| action | string | `/checkout` | Form action, `method=post`. |
| errors | `{ fieldId, message }[]` | — | Passed to the form's error summary. Each field shows its own error too. |
| address | `AddressLookup` | — | Postcode, found addresses and errors for step 2. |
| deliveryOptions | `OptionCard[]` | — | Delivery methods and dates. |
| paymentOptions | `OptionCard[]` | — | Card, PayPal, Klarna and similar. |
| isGuest | boolean | `true` | Shows "Sign in for faster checkout". |

## Variations

### Default

```emmet
form.form.checkout-form[action=/checkout method=post novalidate]>Text>Link[href="/account/sign-in?next=/checkout"]{Sign in for faster checkout}^Fieldset#step-details[legend="1. Your details" headingLevel=2]>FormField[id=name label="Full name"]>Input#name[name=name autocomplete=name isRequired]^FormField[id=email label="Email address" hint="For your order confirmation"]>Input#email[type=email name=email autocomplete=email isRequired describedBy=email-hint]^FormField[id=phone label="Mobile number" hint="For delivery updates"]>Input#phone[type=tel name=phone autocomplete=tel isRequired describedBy=phone-hint]^^AddressLookup#address[legend="2. Delivery address" headingLevel=2]+Fieldset#step-delivery[legend="3. Delivery method" headingLevel=2]>OptionCard[id=delivery-standard name=deliveryMethod value=standard icon=truck title="Standard delivery" description="3 to 5 working days" price=0 isChecked]+OptionCard[id=delivery-next name=deliveryMethod value=next-day icon=truck title="Next day delivery" description="Order by 10pm, tomorrow 7am to 7pm" price=3.95]+OptionCard[id=delivery-slot name=deliveryMethod value=slot icon=calendar title="Choose a day" description="Pick a date and time slot" price=5.95]+CharacterCount[id=instructions name=instructions label="Delivery instructions (optional)" maxLength=100 rows=3]^Fieldset#step-payment[legend="4. Payment" headingLevel=2]>OptionCard[id=pay-card name=paymentMethod value=card title="Debit or credit card" isChecked]+OptionCard[id=pay-paypal name=paymentMethod value=paypal title=PayPal]+OptionCard[id=pay-klarna name=paymentMethod value=klarna title="Klarna, pay in 3" description="Three interest-free payments"]^Checkbox#marketing[name=marketing value=yes]{Email me offers and news}+div.form__actions>Button[type=submit variant=primary size=lg isFullWidth iconStart=lock]{Place order and pay}^Text[size=sm isMuted]{By placing your order you agree to our }>Link[href=/terms]{terms and conditions}
```

### With errors

```emmet
form.form.checkout-form[action=/checkout method=post novalidate]>Alert[status=danger title="There is a problem"]>ul.alert__list>(li>Link[href=#email]{Enter your email address})+(li>Link[href=#address-postcode]{Enter a valid UK postcode})^^Fieldset#step-details[legend="1. Your details" headingLevel=2]>FormField[id=email label="Email address" error="Enter your email address"]>Input#email[type=email name=email autocomplete=email isRequired isInvalid describedBy=email-error]^^AddressLookup#address[legend="2. Delivery address" headingLevel=2 postcode="LS99 9ZZ" error="Enter a valid UK postcode"]
```

## Examples

- **Guest checkout**: every step shown in order, with the order summary in the sidebar.
- **Signed-in checkout**: details and address filled in, and a "Change" link on each.
- **Click & Collect**: the address step is replaced by a store choice using `OptionCard`.

## Notes

- Validation follows [form.md](form.md). The server checks the form and returns `errors`.
- "Find address" submits the same form with `action=findAddress`. The page comes back with everything already entered still filled in.
- Card details are entered on the payment provider's secure page after "Place order and pay".
- Uses [form.md](form.md), [fieldset.md](../components/fieldset.md), [form-field.md](../components/form-field.md), [input.md](../components/input.md), [address-lookup.md](address-lookup.md), [option-card.md](../components/option-card.md), [character-count.md](../components/character-count.md), [checkbox.md](../components/checkbox.md), [button.md](../components/button.md), [text.md](../components/text.md), [link.md](../components/link.md) and [alert.md](../components/alert.md).
