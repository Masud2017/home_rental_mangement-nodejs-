var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.user = {"name":"masud karim"};
  console.log(req.session.user);
  // req.session.destroy(function() {
  //   console.log("Destroying");
  // })
  res.render('index', { title: 'Express' });
});

module.exports = router;
