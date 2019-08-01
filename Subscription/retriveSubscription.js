const stripe = require("stripe")("sk_test_SwfmewLuMrTtIw4j1gzpXvFG");

stripe.subscriptions.retrieve(
  'sub_FXdB7HMaM3IowS',
  function(err, subscription) {
    // asynchronously called
    if(err){
        console.log(err);
    }else{
      console.log(subscription.status);
      var theDate = new Date(subscription.created* 1000);
      dateString = theDate.toGMTString();
      console.log(dateString); 

      var d1 = new Date(subscription.current_period_start* 1000);
      var d2 = d1.toGMTString();
      console.log(d2);

      var d3 = new Date(subscription.current_period_end* 1000);
      var d4 = d3.toGMTString();
      console.log(d4);
    }
  }
);
