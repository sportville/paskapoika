var express = require('express');
var router = express.Router();

var Foods = require('../models/foods');

router.get('/', function(req, res, next) {
  Foods.findOne({ _id: req.params.id }, function(err, foods) {
    res.render('test', { title: foods.name });
  });
});

module.exports = router;
