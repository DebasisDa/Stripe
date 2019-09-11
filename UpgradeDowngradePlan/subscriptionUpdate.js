const stripe = require("stripe")("sk_test_SwfmewLuMrTtIw4j1gzpXvFG");

stripe.subscriptions.retrieve(
  'sub_Fn1QWxB8eJDDDH',
  function(err, subscription) {
    // asynchronously called
    if(err){
        console.log(err);
    }else{
      console.log(subscription.status);
      let theDate = new Date(subscription.created* 1000);
      created = theDate.toGMTString();

      var d1 = new Date(subscription.current_period_start* 1000);
      var current_period_start = d1.toGMTString();

      var d3 = new Date(subscription.current_period_end* 1000);
      var current_period_end = d3.toGMTString();
      
      console.log('===========================================>>>');
      console.log('created => ', created);
      console.log('current_period_start => ', current_period_start);
      console.log('current_period_end => ',current_period_end);
      console.log('amount => ',(subscription.plan.amount)/100);
      console.log('cuurency => ',subscription.plan.currency);
      console.log('interval => ',subscription.plan.interval);
      console.log('==============================================>>>');
    }
  }
);