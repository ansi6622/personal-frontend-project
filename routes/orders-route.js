var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var ORDERS_FILE = path.join(__dirname, '../orders.json');

router.get('/api/orders', function(req, res){
  fs.readFile(ORDERS_FILE, function(err, data){
    if(err){
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

router.post('/api/orders', function(req, res){
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

module.exports = router;