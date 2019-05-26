 const Nook = require('../models/nook');

 module.exports = {
    index,
    create
 };

function create(req, res) {
  res.render('nooks/new');
}

function index(req, res, next) {
    
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name;
    // Default to sorting by name
    
    Nook.find(modelQuery).exec(function(err, users) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('nooks/index', {
        users,
        user: req.user,
        name: req.query.name,
        
      });
    });
  }
 