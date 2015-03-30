/**
 * BarController
 *
 * @description :: Server-side logic for managing bars
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

   /**
   * BarController.findByName()
   */
    findByName:function(req,res)
    {
        var id = req.param('id');
        Bar.findOne({name:id})
            .exec(function(err,bar){
                if(err)
                    res.json({error:err});
                if(bar === undefined)
                    res.notFound();
                else
                    res.json({notFound:false,barData:bar});
            });
      },


    /**
     * BarController.create()
     */
    create: function (req, res, next) {
        Bar.create(req.params.all(), function barCreated(err, bar){
            if (err) return next(err);
            return res.json(bar);
        });
    },


    /**
    * BarController.delete()
    */
    delete: function (req, res) {
        return res.json({
            todo: 'Not implemented yet!'
        });
    },
};
