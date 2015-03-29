/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  findUserbyPseudo:function(req,res)
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
  }
};
