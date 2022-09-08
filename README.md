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
// initialize the client
const payfort = require("payfort-custom-integration");
```

```javascript
// create client
const client = payfort.createClient("development", {
  access_code : "your_access_code",
  merchant_identifier : "your_merchant_identifier",
  passphrase : "your_passphrase"
  purchase_url : "send this only to override default urls"
});

// Default Authorization/Purchase URLs
// Test Environment URL: https://sbcheckout.payfort.com/FortAPI/paymentPage
// Production Environment URL: https://checkout.payfort.com/FortAPI/paymentPage
```

```javascript
// purchase data to be sent to payfort
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
//call payfort API
payfort.sendRequest(client, purchaseData, function(err, response){
  if(err){
      //error stuff
    }
    //handle response
})
```

When you get the callback from payfort you can use the following code to validate the data sent by payfort.

```javascript
// Callback will be a get request so below valiable 'get_request' will the decoded Query Parameters

const get_request = {
  // decoded query params
};
const original_signature = get_request.signature;
delete response.signature;
const new_signature = payfort.createSignature("your_passphrase", get_request);

if(original_signature == new_signature){
  // valid data
}else{
  // invalid data
}
```
