 const Member = require('../models/member');
 const Nook = require('../models/nook');

 module.exports = {
    index,
    new: newNook,
    create
 };
function create(req, res) {
  var nook = new Nook(req.body);
  console.log('working');
  nook.save(function(err) {
    err? res.render('nooks/new') : res.redirect('nooks/index');
  })
  

  res.redirect('nooks/index');
}

function newNook(req, res) {
  res.render('nooks/new');
}

function index(req, res, next) {
    // res.render('nooks/index');
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name;
    // Default to sorting by name
    
    Nook.find(modelQuery).exec(function(err, members) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('nooks/index', {
        members,
        member: req.user,
        name: req.query.name,
        
      });
    });
  }
 