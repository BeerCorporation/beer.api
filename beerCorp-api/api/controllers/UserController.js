/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * UserController.findByPseudo()
     */
    findByPseudo:function(req,res)
    {
        var id = req.param('pseudo');
        User.findOne({pseudo:id})
            .exec(function(err,user){
                if(err)
                    res.json({error:err});
                if(user === undefined)
                    res.notFound();
                else
                    res.json({notFound:false,userData:user});
            });
    },


    /**
     * UserController.create()
     */
    create: function (req, res, next) {
        User.create(req.params.all(), function userCreated(err, user){
            if (err) return next(err);
            return res.json(user);
        });
    },


    /**
     * UserController.delete()
     */
    delete: function (req, res) {
        return res.json({
            todo: 'Not implemented yet!'
        });
    },

    /**
     * UserController.findSentInvitations()
     */
    findSentInvitations:function(req,res)
    {
        var id = req.param('pseudo');
        User.findOne({pseudo:id})
            .populate('sentInvitations')
            .exec(function(err,sentInvitations){
                if(err)
                    res.json({error:err});
                if(sentInvitations === undefined)
                    res.notFound();
                else
                    res.json({notFound:false,sentInvitationsData:sentInvitations});
            });
    },

    /**
     * UserController.findReceivedInvitations()
     */
    findReceivedInvitations:function(req,res)
    {
        var id = req.param('pseudo');
        User.findOne({pseudo:id})
            .populate('receivedInvitations')
            .exec(function(err,receivedInvitations){
                if(err)
                    res.json({error:err});
                if(receivedInvitations === undefined)
                    res.notFound();
                else
                    res.json({notFound:false, receivedInvitationsData:receivedInvitations});
            });
    },

    /**
     * UserController.findFriends()
     */
    findFriends:function(req,res)
    {
        var id = req.param('pseudo');
        User.findOne({pseudo:id})
            .populate('friends')
            .exec(function(err,friends){
                if(err)
                    res.json({error:err});
                if(friends === undefined)
                    res.notFound();
                else
                    res.json({notFound:false,friendsData:friends});
            });
    },
};
