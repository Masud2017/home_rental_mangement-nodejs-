var express = require('express');
var User = require('../models/User');
const { EmptyResultError } = require('sequelize');
var router = express.Router();

/**
 * POST
 * signup
 */


router.post('/', function(req, res, next) {
  // res.json(req.body)
  User.findOne({where : {
    email : req.body.email
  }}).then (user => {
    if (user) {
      
      req.session.user = user;
      req.session.user.save((err) => {console.log("No error : "+err)});
      console.log(req.session.user);
      console.log("Logged in");
      
    } else {
      console.log('User not found');
      
    }

  }).catch ( err => {
    throw new EmptyResultError(err);
  })
  // res.send("Putki mara khao");
  res.redirect('/users')
  // res.render('index', { title: 'Express' });
});

module.exports = router;
