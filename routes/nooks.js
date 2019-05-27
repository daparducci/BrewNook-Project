var express = require('express');
var router = express.Router();
var nooksCtrl = require('../controllers/nooks');


/* GET users listing. */
router.get('/nooks', nooksCtrl.index);
router.get('/nooks/new', nooksCtrl.new);
router.post('/', nooksCtrl.create);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
