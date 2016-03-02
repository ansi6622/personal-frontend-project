var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var ORDERS_FILE = path.join(__dirname, 'orders.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


var knex = require('knex')(require('./knexfile')['development']);

app.get('/items', function(req,res,next){
  knex.select().table('items').then(function(rows) {
    res.json(rows);3
  }).catch(function (err) {
    next(new Error(err));
  });
});

app.post('/new-orders', function(req,res,next){
  knex('orders').insert({'name': req.body.name, 'option': req.body.option, 'price': req.body.price})
    .then(function(res){
    }).then(function(){
    knex('orders').then(function (results) {
      res.json(results);
      console.log(results);
    }).then(function(){
      knex('orders').del().then(function(res){})
    })
  })
});

app.post('/inventory', function(req,res,next){
  knex('inventory').insert({'name': req.body.name, 'type': req.body.type, 'count': req.body.count})
    .then(function(res){
    }).then(function(){
    knex('inventory').then(function (results) {
      res.json(results);
      console.log(results);
    })
  })
});


app.get('/api/orders', function(req, res){
  fs.readFile(ORDERS_FILE, function(err, data){
    if(err){
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/orders', function(req, res){
  fs.readFile(ORDERS_FILE, function(err, data){
    if(err){
      console.error(err);
      process.exit(1);
    }
    var orders = JSON.parse(data);

    var newOrder = {
      id: Date.now(),
      item:{
        name: req.body.name,
        option: req.body.option,
        price: req.body.price
      }
    };
    orders.push(newOrder);
    fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2),
      function(er){
        if(er){
          console.error(err);
          process.exit(1);
        }
        res.json(orders);
      })
  })
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});