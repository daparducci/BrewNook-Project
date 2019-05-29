var express = require('express');
var router = express.Router();
var nooksCtrl = require('../controllers/nooks');


/* GET users listing. */
router.get('/', nooksCtrl.index);
router.get('/new', nooksCtrl.new);
router.get('/:id/edit', nooksCtrl.edit);
router.get('/:id', nooksCtrl.show);
router.put('/:id', nooksCtrl.update)
router.post('/', nooksCtrl.create);
router.post('/comments', nooksCtrl.addComment);
router.delete('/show/:id', nooksCtrl.deleteComment);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
