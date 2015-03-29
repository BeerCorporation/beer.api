/**
* Invitation.js
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
        senderLocationLatitude:{
            type:"float",
            required:true,
            unique: false
        },
        senderLocationLongitude:{
            type:"float",
            required:true,
            unique: false
        },
        receiverLocationLatitude:{
            type:"float",
            required:true,
            unique: false
        },
        receiverLocationLongitude:{
            type:"float",
            required:true,
            unique: false
        },
        status:{
            type:"int",
            required:true,
            unique: false
        },
    }
};
