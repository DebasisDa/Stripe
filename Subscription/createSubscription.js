const stripe = require("stripe")("sk_test_MaaQ0qA6SyQzY2enxSHEwsDT00Yv34XWfr");

stripe.subscriptions.create({
  customer: "cus_FTsi0jLTSW125D",
  items: [
    {
      plan: "plan_FUHLD4JwmbRU1H",
    },
  ]
}, function(err, subscription) {
    // asynchronously called
    if(err){
        console.log(err);
    }else{
        console.log(subscription);
    }
  }
);
