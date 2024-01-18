var express = require('express');
var User = require('../models/User');
const { EmptyResultError } = require('sequelize');
var router = express.Router();

/**
 * POST
 * signup
 */


router.post('/', function(req, res, next) {
  User.findOne({where : {
    email : req.body.email
  }}).then (user => {
    if (user) {
      let session = req.session
      session.user = user.email;
      session.authorized = true;
      session.save();
      // session.user.save((err) => {console.log("No error : "+err)});
      console.log("Logged in");
      console.log("Printing session from auth controller : ",req.session);
      
    } else {
      console.log('User not found');
      
    }

  }).catch ( err => {
    throw new EmptyResultError(err);
  })
  res.send("Putki mara khao");
  // res.redirect('/users')
  // res.render('index', { title: 'Express' });
});

module.exports = router;
