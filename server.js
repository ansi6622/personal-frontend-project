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

var itemsRoute = require('./routes/items');
app.use('/', itemsRoute);



//app.get('/items', function(req,res,next){
//  knex.select().table('items').then(function(rows) {
//    res.json(rows);
//  }).catch(function (err) {
//    next(new Error(err));
//  });
//});
//
//app.post('/insert-item', function(req,res,next){
//
//  knex('items').insert(req.body)
//    .then(function(res){
//    }).then(function(){
//
//    res.redirect('/#/inventory');
//    //res.json(200);
//    //knex('items').then(function (results) {
//    //  console.log(results);
//    //  res.json(results);
//    //
//    //})
//  })
//});

//router.post('/remove-item/:id', function(req, res, next) {
//  knex('items')
//    .where('id', req.params.id)
//    .del().then(function(res){
//  }).then(function(){
//    //knex('humans').then(function (results) {
//    //
//    //  res.redirect('/');
//    //
//    //})
//  })
//});







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