var express = require('express');
var router = express.Router();
var passport = require('passport');
var NooksCtrl = require('../controllers/nooks');



/* GET home page. */
// router.get('/new', NooksCtrl.new);


router.get('/', function(req, res, next) {
  res.redirect('/nooks');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/nooks',
    failureRedirect : '/nooks'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/nooks');
});

module.exports = router;
