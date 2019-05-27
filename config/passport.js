var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const Member = require('../models/member');

var GoogleStrategy = require('passport-google-oauth20').Strategy;
// new code below
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
    //a Member has logged in with OAuth....
    Member.findOne({'googleId': profile.id}, function(err, member) {
        if(err) return cb(err);
        if(member) {
            return cb(null, member);
        } else {
            var newMember = new Member({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });
            newMember.save(function(err) {
                if(err) return cb(err);
                return cb(null, newMember);
            })
        }
    })
}
));

passport.serializeUser(function(member, done) {
    done(null, member.id);
});

passport.deserializeUser(function(id, done) {
    Member.findById(id, function(err, member) {
        done(err, member);
    })
})