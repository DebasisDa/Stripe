const stripe = require("stripe")("sk_test_SwfmewLuMrTtIw4j1gzpXvFG");

stripe.subscriptions.create({
  customer: "cus_FnPipiW8Wr4o3X",
  items: [
    {
      plan: "DefaultPlan",
    },
  ]
}, function(err, subscription) {
    // asynchronously called
    if(err){
        console.log(err);
    }else{
        console.log(subscription.status);
        let start = new Date(subscription.start);
        let start_date = new Date(subscription.start_date);
        console.log('=========================>>>>>>');
        console.log('status :: ', subscription.status);
        console.log('start :: ', start);
        console.log('start_date :: ', start_date);
        console.log('=========================>>>>>>');
    }
  }
);
