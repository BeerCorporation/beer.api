/**
* Bar.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        name:{
            type:"string", 
            required:true,
            minLength: 2
        },
        latitude:{
            type:"float",
            required:true,
            unique: false
        },
        longitude:{
            type:"float",
            required:true,
            unique: false
        },
    }
};
