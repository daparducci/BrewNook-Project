var express = require('express');
var router = express.Router();
var NooksCtrl = require('../controllers/nooks');

/* GET users listing. */
router.get('/nooks', NooksCtrl.index);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
