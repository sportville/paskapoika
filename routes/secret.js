var express = require('express');
var router = express.Router();
var secretKey = 'terve';

// POST
/*
router.post('/', function (req, res) {
  var secret = req.body.secret;
  res.end('Password: ' + secret);
});
*/

router.post('/', function (req, res) {
  var secret = req.body.secret;
  var user = {};
  user.authorised = secret === secretKey ? true : false;
  res.render('secret', user);
});

router.get('/:key', function (req, res) {
  var secret = req.params.key;
  var user = {};
  user.authorised = secret === secretKey ? true : false;
  res.render('secret', user);
});

router.get('/', function (req, res, next) {
if (!req.params.key) { next(); }
  var user = {
    authorised: false
  };
  res.render('secret', user);
});

// WTF if (!req.params.key) { next(); }

module.exports = router;
