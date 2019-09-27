const stripe = require("stripe")("sk_test_SwfmewLuMrTtIw4j1gzpXvFG");

stripe.subscriptions.del(
'sub_Ft2aZHHnLRIt0l',
function(err, subscription) {
    // asynchronously called
    if(err){
        console.log(err);
    }else{
        console.log('Subscription deleted....');
    }
  }
);
