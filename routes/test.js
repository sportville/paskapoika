var express = require('express');
var router = express.Router();

var Foods = require('../models/foods');

router.get('/', function(req, res, next) {
  Foods.find(function (err, foods) {
    if (err) { console.log(err);}
    res.render('test', { title: foods.name });
  });
});

module.exports = router;
