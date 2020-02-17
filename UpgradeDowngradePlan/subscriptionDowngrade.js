var stripe = require('stripe')('sk_test_SwfmewLuMrTtIw4j1gzpXvFG');

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

let a = new Date();
a.addDays(10);
let b = new Date(a/1000).getTime();

stripe.subscriptions.update(
  'sub_FnPjrGmHS5idAN',{
    plan: 'PremiumPlan',
    prorate : true       // Remaining amount will compromise with next billing invoice.
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















// const stripe = require('stripe')('sk_test_SwfmewLuMrTtIw4j1gzpXvFG');

// (async () => {
//   const subscription = await stripe.subscriptions.create({
//     customer: 'cus_4fdAW5ftNQow1a',
//     items: [{plan: 'plan_CBb6IXqvTLXp3f'}],
//     billing_cycle_anchor: 1569484939,
//   });
// })();
