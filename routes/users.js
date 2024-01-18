var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  if (req.session.authorized) {
    console.log(user);
    res.send("User is authenticated");
  } else {
    res.send('respond with a resource');
  }

});

module.exports = router;
