var express = require('express');
var router = express.Router();
var UsersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/users', UsersCtrl.index);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
