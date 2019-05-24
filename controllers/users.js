 const User = require('../models/user');

 module.exports = {
    index
 };

//  function index(req, res, next) {
//      User.find(req.query.name).exec(function(err, users) {
//          res.render('users/index', {
//              users,
//              name: req.query.name,
//              user: req.user
//          })
//      })
// };

function index(req, res, next) {
    
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name;
    // Default to sorting by name
    
    User.find(modelQuery).exec(function(err, users) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('users/index', {
        users,
        user: req.user,
        name: req.query.name,
        
      });
    });
  }
 