# Payfort Custom merchant page integration
## Payfort standard merchant page integration template offers a customizable but rapid way to start accepting payments on your website. However, you can achieve an even greater degree of customization by building your own payment form to accommodate your unique use-case, business logic, or technical requirements.

How does it work in practice?

If you choose the custom merchant page integration route you are responsible to code a form that captures your customer's payment details and that submits these details to our server using defined parameters. You integrate your custom form on your checkout page.

There is no need to change the look and feel of your merchant site. You can customize the iframe to match your site. Simply insert the Amazon Payment Services iframe in the section of your page where you want to accept credit card payments.

In practice, custom merchant page integration works like this:

 * You develop a custom payment form that collects the credit card details including card number, expiry date, CVV number.
 * Your customer fills in their card details in the custom payment form on your checkout page.
 * The Amazon Payment Services server receives the card details and attempts to authorize the customer's payment.
 * Amazon Payment Services sends a confirmation to your checkout page to complete the transaction, this confirmation includes a token.
 * You use the token to complete the Authorization or Purchase operation.

## Install

```javascript
npm install payfort-custom-integration --save
```
And here's some code! :+1:

```javascript
// Initialize the payfort package
const payfort = require("payfort-custom-integration");
```

```javascript
// Create client for payment
const client = await payfort.createClient("development", {
  access_code : "your_access_code",
  merchant_identifier : "your_merchant_identifier",
  passphrase : "your_passphrase",
  purchase_url : "send this only to override default urls"
});
```

```javascript
// Purchase data object sample
const purchaseData = {
  "amount": data.amount,
  "command" : "PURCHASE", // PURCHASE OR AUTHORIZATION
  "currency": data.currency,
  "customer_email": data.email,
  "customer_name": data.name,
  "language": "en",
  "return_url": "https://your_website.com/callback-page",
  "merchant_reference": data.order_id
};
```

```javascript
//Send payment request
const response = await payfort.sendRequest(client, purchaseData);
//response.body will be the hole form page which you can design as per you web page.
```


## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

## Advertise for Job/Work Contract

I am open for a good job or work contract. You can contact me directly on my email ([bera.ujjwal@hotmail.com](mailto:bera.ujjwal@hotmail.com 'bera.ujjwal@hotmail.com')) or on my skype `ujjwalbera`.

## Buy me a Coffee

Hi! I'm Ujjwal Bera, I'm an open source enthusiast and devote my free time to building projects in this field.

I'm the creator and maintainer of [payfort](https://github.com/beraujjwal/payfort-custom-integration/blob/master/README.md), [MNode](https://github.com/beraujjwal/mnodejs/blob/main/README.md) and [SNode](https://github.com/beraujjwal/snode/blob/main/README.md).

I'm doing my best to provide you a good experience when using my apps, so if you like what I'm doing and wish to say "thanks!", You can appreciate me or my hard work and time spent to create this helpful structure with buying me a coffee.

<a href="https://www.buymeacoffee.com/beraujjwalu" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>