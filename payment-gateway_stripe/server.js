
// replace with your stripe public and secret keys
const keyPublishable = 'pk_test_2c43hbCPxQk2qHRygT6O41tQ00SmmlpIgI';
const keySecret = 'sk_test_MaaQ0qA6SyQzY2enxSHEwsDT00Yv34XWfr';


const app = require("express")();
const stripe = require("stripe")(keySecret);
const pug = require('pug');
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')

// GET http://localhost:3000/
app.get("/", ((req, res) => {
    res.render("index",{keyPublishable: keyPublishable}); // render the view file : views/index.pug
}));

// POST http://localhost:3000/charge
app.post("/charge", function(req, res) {

    let amount = 5*100; // 500 cents means $5 

    // create a customer 
    stripe.customers.create({
        email: req.body.stripeEmail, // customer email, which user need to enter while making payment
        source: req.body.stripeToken // token for the given card
    })
    .then(customer =>
        stripe.charges.create({ // charge the customer
        amount,
        description: "Sample Charge",
            currency: "usd",
            customer: customer.id
        }))
    .then(charge =>{
        console.log(charge)
    }); // render the charge view: views/charge.pug

});

// app listening on port 3000
app.listen(3000, () => {
    console.log(`App is running at: http://localhost:3000/`);
});