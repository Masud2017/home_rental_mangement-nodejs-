var express = require('express');
var router = express.Router();
var User = require('../models/User');

/**
 * POST
 * signup
 */


router.post('/', async function (req, res, next) {
    let body = req.body;

    try {
        await User.create({name : body.name,email : body.email, password : body.password});
    } catch(err) {
        throw err;
    }
  // res.render('index', { title: 'Express' });
});

module.exports = router;
