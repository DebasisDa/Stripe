const stripe = require("stripe")("sk_test_SwfmewLuMrTtIw4j1gzpXvFG");

stripe.subscriptions.create({
  customer: "cus_Ft2Syvp1GwQ8D2",
  items: [
    {
      plan: "BasicPlan",
    }
  ],
  prorate : true

}, function(err, subscription) {
    // asynchronously called
    if(err){
        console.log(err);
    }else{
        console.log(subscription.status);
        let date = new Date(subscription.start);
        console.log(date);
    }
  }
);
