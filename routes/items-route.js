var express = require('express');
var router = express.Router();

var knex = require('knex')(require('../knexfile')['production']);

router.get('/get-items', function(req, res, next){
  knex.select().table('items').then(function(rows) {
    res.json(rows);
  }).catch(function (err) {
    next(new Error(err));
  });
});

router.post('/insert-item', function(req, res, next){
  knex('items').insert(req.body)
    .then(function(res){
    }).then(function(){
    res.redirect('/#/inventory');
  }).catch(function (err) {
    next(new Error(err));
  });
});

module.exports = router;