 const Member = require('../models/member');
 const Nook = require('../models/nook');
 const Comment = require('../models/comment');

 module.exports = {
    index,
    new: newNook,
    create,
    show,
    addComment,
    deleteComment,
    edit,
    update
 };

 function update(req, res) {
  Nook.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, nook) {
    res.redirect('/nooks');
  })
 }

 function edit(req, res) {
   let member = req.user.id;
   Nook.findById(req.params.id, function(err, nook) {
     res.render('nooks/edit', {nook, member});
   });
 }

 function deleteComment(req, res) {
   let nook;
   Comment.findById(req.params.id, function(err, comment) {
      nook = comment.nook._id;
      comment.delete();
     res.redirect(`/nooks/${nook}`);
   });
 }

 function addComment(req, res) {
   console.log('reqbody: ', req.body);
   var comment = new Comment(req.body);
   comment.user = req.user;
   comment.save(function(err) {
     Nook.find({}).exec(function(err) {
       Nook.findById(req.body.nook)
       .populate('comments')
       .exec(function(err, nook) {
         nook.comments.push(comment);
         nook.save(function(err){
           res.redirect('/nooks');
         })
        });
     });
   });
  
 }
 

function show(req, res) {

  let member = req.user.id;
  console.log(typeof(member), member);
  Nook.findById(req.params.id).populate('comments').exec(function(err, nook) {
    console.log(nook);
    console.log('nookUser: ', nook.user);
    console.log('user_id: ', req.user._id);
    res.render('nooks/show', {nook, member})
  });
  }

function create(req, res) {
  var nook = new Nook(req.body);
  nook.save(function(err) {
    Member.find({}).exec(function(err) {
      Member.findById(req.user._id).exec(function(err) {
        nook.user = req.user;
        nook.save(function(err) {
          err ?
          res.render('nooks/new') : res.redirect('/nooks');
        })
      })
    })
    // if (err){
    //   console.log(err)
    //   res.render('nooks/new')
    })} 
    // res.redirect('/nooks');
  


function newNook(req, res) {
  
  res.render('nooks/new', {member: req.user});
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
        //console.log(nooks);
        //console.log('Members:', members);
        res.render('nooks/index', {
          members,
          member: req.user,
          name: req.query.name,
          nooks
        });
      });
    } )
  }
 