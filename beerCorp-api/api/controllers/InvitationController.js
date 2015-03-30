/**
 * InvitationController
 *
 * @description :: Server-side logic for managing invitations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    
    /**
     * InvitationController.create()
     */
    create: function (req, res, next) {
        Invitation.create(req.params.all(), function barCreated(err, invitation){
            if (err) return next(err);
            return res.json(invitation);
        });
    },


    /**
     * InvitationController.delete()
     */
    delete: function (req, res) {
        return res.json({
            todo: 'Not implemented yet!'
        });
    },
};
