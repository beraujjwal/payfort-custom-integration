/*
  Parameters Submission: https://sbcheckout.payfort.com/FortAPI/paymentPage
  Capture Operation: https://sbpaymentservices.payfort.com/FortAPI/paymentApi
  Void authorization operation: https://sbpaymentservices.payfort.com/FortAPI/paymentApi
  Refund operation: https://sbpaymentservices.payfort.com/FortAPI/paymentApi

  Custom merchant page integration URLs: https://sbcheckout.PayFort.com/FortAPI/paymentPage
  Custom merchant page integration operations: https://sbpaymentservices.payfort.com/FortAPI/paymentApi
*/


const checkoutUrl = {
    development : "https://sbcheckout.payfort.com/FortAPI/paymentPage",
    production  : "https://checkout.payfort.com/FortAPI/paymentPage"
}

const paymentservicesUrl = {
    development : "https://sbpaymentservices.payfort.com/FortAPI/paymentApi",
    production  : "https://paymentservices.payfort.com/FortAPI/paymentApi"
}

exports.checkoutUrl = checkoutUrl;
exports.paymentservicesUrl = paymentservicesUrl;
