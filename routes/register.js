var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var User = require('../models/User');

/**
 * POST
 * signup
 */


router.post('/', async function (req, res, next) {
    let body = req.body;
    console.log(body);
    let hashed_password = null;
    let salt = bcrypt.genSaltSync(10);
    

    hashed_password = await bcrypt.hash(body.password,salt);

    try {
        await User.create({name : body.name,email : body.email, password : hashed_password});
    } catch(err) {
        throw err;
    }
  // res.render('index', { title: 'Express' });
  res.send("Registration is done");
});

module.exports = router;
