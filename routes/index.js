var express = require('express');
var router = express.Router();

// página inicial
router.get('/', function(req, res) {
  res.render('site_modelo');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/list', function(req, res) {
  res.render('list');
});

router.get('/folder', function(req, res) {
  res.render('folder');
});

router.get('/user', function(req, res) {
  res.render('user');
});

module.exports = router;
