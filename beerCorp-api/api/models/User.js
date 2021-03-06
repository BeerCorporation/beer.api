/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {

    attributes: {

        pseudo:{
            type:"string", 
            required:true,
            minLength: 2,
            unique: true,
        },
        password:{
            type:"string",
            required:true,
            unique: false
        },
        receivedInvitations: {
            collection:"invitation",
            via:"receiver",
            dominant:true,
        },
        sentInvitations: {
            collection:"invitation",
            via:"sender",
            dominant:true,
        },
        friends: {
            collection:"friends",
            via:"user",
            dominant: true,
        },

        // override default toJSON
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        },
    },

    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    console.log(hash);
                    cb(null, user);
                }
            });
        });
    }
};
