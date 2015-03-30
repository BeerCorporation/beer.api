// api/services/passport.js

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
 bcrypt = require('bcrypt');
 
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
        usernameField: 'pseudo',
        passwordField: 'password'
    },
    function(pseudo, password, done) {
        User.findOne({ pseudo: pseudo }).exec(function(err, user) {
            if(err) { return done(err); }
            if(!user) { return done(null, false, { message: 'Unknown user ' + pseudo }); }
            bcrypt.compare(password, user.password, function(err, res) {
                if(!res) return done(null, false, {message: 'Invalid Password'});
                return done(null, user);
            });
        });
    }
));
