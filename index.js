
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors())

let store = {
    customers: [{
        name: "John Doe",
        birthday: "January 1, 2000"
    }]
}

let address = 4000;

app.use((req, _res, next) => {
    req.store = store
    next()
})

app.get('/customers', routes.customers.getCustomers);
app.get('/customers/:id', routes.customers.getCustomer);
app.post('/customers', routes.customers.addCustomer);
app.put('/customers/:id', routes.customers.editCustomer);
app.delete('/customers/:id', routes.customers.removeCustomer);


app.listen(address, function () {
    console.log('Listening on port 4000')
  })