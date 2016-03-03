var express = require('express');
var router = express.Router();

var knex = require('knex')(require('../knexfile')['development']);

router.get('/items', function(req,res,next){
  knex.select().table('items').then(function(rows) {
    res.json(rows);
  }).catch(function (err) {
    next(new Error(err));
  });
});


router.post('/insert-item', function(req,res,next){

  knex('items').insert(req.body)
    .then(function(res){
    }).then(function(){

    res.redirect('/#/inventory');
    //res.json(200);
    //knex('items').then(function (results) {
    //  console.log(results);
    //  res.json(results);
    //
    //})
  })
});

module.exports = router;