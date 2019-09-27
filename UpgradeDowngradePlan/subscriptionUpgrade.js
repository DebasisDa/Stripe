var stripe = require('stripe')('sk_test_SwfmewLuMrTtIw4j1gzpXvFG');

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

let a = new Date();
a.addDays(10);
let b = new Date(a/1000).getTime();

stripe.subscriptions.update(
  'sub_FrvwTI0r0jyRHf',{
   plan: 'PremiumPlan',
   billing_cycle_anchor:'now'
    // Billing invoice will change to today and pay remaing amount 
    // after compromise old plan data witn new plan data.                    
 },
  function(err, subscription) {
    // asynchronously called
    if(err){
        console.log('============ERROR=============>>>');
        console.log(err);
        console.log('============ERROR=============>>>');
    }else{
        console.log('============SUBSCRIPTION=============>>>');
        console.log(subscription);
        console.log('============SUBSCRIPTION=============>>>');
    }
  }
);