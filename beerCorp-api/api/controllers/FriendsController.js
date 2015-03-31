/**
 * FriendsController
 *
 * @description :: Server-side logic for managing friends
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    /**
     * FriendsController.create()
     */
    create: function (req, res, next) {
        Friends.find({
            user: req.param('user'),
            friend: req.param('friend'),
        }).exec(function(err,friends){
                if(err)
                    res.json({error:err});
                if(friends === undefined){
                    Friends.findOrCreate(req.params.all(), function friendsCreated(err, friends){
                        if (err) return next(err);
                        return res.json(friends);
                    });
                } else
                    return res.json({ok:'Friendship already registered'});
        });
    },


    /**
     * UserController.findFriends()
     */
    findFriends:function(req,res)
    {
        var id = req.param('pseudo');
        Friends.find({user:id})
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
