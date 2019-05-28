 const Member = require('../models/member');
 const Nook = require('../models/nook');

 module.exports = {
    index,
    new: newNook,
    create,
    show
 };

function show(req, res) {
  Nook.findById(req.params.id)
  res.render('nooks/show');
}
function create(req, res) {
  var nook = new Nook(req.body);
  // nook.nook = req.body.nook
  // nook.coffee = req.body.coffee
  // nook.wifi = req.body.wifi
  // nook.space = req.body.space
  // nook.outlets = req.body.outlets
  // nook.hours = req.body.hours
  console.log(nook);
  nook.save(function(err) {
    if (err){
      console.log(err)
      res.render('nooks/new')
    } 
    res.redirect('/nooks');
  })
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
    Nook.find({}, function(err, nooks){

      Nook.find(modelQuery).exec(function(err, members) {
        if (err) return next(err);
        // Passing search values, name & sortKey, for use in the EJS
        console.log(nooks);
        res.render('nooks/index', {
          members,
          member: req.user,
          name: req.query.name,
          nooks
        });
      });
    } )
  }
 