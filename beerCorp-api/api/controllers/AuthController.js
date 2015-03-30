/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');

module.exports = {
    
    login: function(req, res) {
        res.view();
    },
    process: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            console.log(user);
            console.log(err);
            console.log(info);
            if( (err)||(!user) ) {
                return res.send({
                    message: 'login failed'
                });
                res.send(err);
            }
            req.logIn(user, function(err) {
                if(err) res.send(err);
                return res.send({
                    message: 'login successful'
                });
            });
        }) (req, res);
    },

    logout: function(req, res) {
        req.logOut();
        res.send('logout successful');
    }
};

module.exports.blueprints = {
    actions: true,
    rest: true,
    shortcuts: true
};
