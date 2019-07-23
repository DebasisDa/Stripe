const stripe = require("stripe")("sk_test_MaaQ0qA6SyQzY2enxSHEwsDT00Yv34XWfr");

stripe.subscriptions.retrieve(
  'sub_FUF0gA9dmcDjvE',
  function(err, subscription) {
    // asynchronously called
    if(err){
        console.log(err);
    }else{
        console.log(subscription);
    }
  }
);
