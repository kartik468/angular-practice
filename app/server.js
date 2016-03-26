'use strict';
var express = require('express'),
    app = express();

// app.configure(function() {
app.use(express.static(__dirname + '/'));
// });

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
});

app.get('/orders', function(req, res) {
    res.json(orders);
});


app.listen(8081);

console.log('Express is listening at port 8081');

var customers = [
    { 'id': 1, 'joined': '2000-12-02', 'name': "Kartik", 'city': "Nanded", 'orderTotal': 1, 'orders': [{ 'id': 1, 'product': 'shoes1', 'total': 9.9 }, { 'id': 12, 'product': 'temp', 'total': 9.9 }] },
    { 'id': 2, 'joined': '2001-12-02', 'name': "Sam", 'city': "Kinwat", 'orderTotal': 3, 'orders': [{ 'id': 1, 'product': 'shoes2', 'total': 9.9 }] },
    { 'id': 3, 'joined': '2002-12-02', 'name': "Rohan", 'city': "Palghar", 'orderTotal': 11, 'orders': [{ 'id': 1, 'product': 'shoes3', 'total': 9.9 }, { 'id': 1, 'product': 'banana', 'total': 19.9 }] },
    { 'id': 4, 'joined': '2003-12-02', 'name': "Hitesh", 'city': "Palghar", 'orderTotal': 12, 'orders': [{ 'id': 1, 'product': 'shoes4', 'total': 9.9 }] }
];

var orders = [
    { product: 'Shoes', total: 10 },
    { product: 'Baseball', total: 9.9 },
    { product: 'Bat', total: 9.9 },
    { product: 'Headphones', total: 50 },
    { product: 'Kindle', total: 10 },
    { product: 'Spotify subscription', total: 20 }
];
