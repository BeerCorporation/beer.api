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
        var id = req.param('id');
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
};
