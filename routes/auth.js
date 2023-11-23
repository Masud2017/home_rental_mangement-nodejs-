var express = require('express');
var router = express.Router();

/**
 * POST
 * signup
 */


router.post('/', function(req, res, next) {
    res.json(req.body)
  // res.render('index', { title: 'Express' });
});

module.exports = router;
