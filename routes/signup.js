var express = require('express');
var router = express.Router();
var User = require('../models/User');

/**
 * POST
 * signup
 */
router.get('/', function(req, res, next) {
  request_body = req.body;
  request_body.name;
  res.render('index', { title: 'Express' });
});

module.exports = router;
