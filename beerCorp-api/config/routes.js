/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  'GET /all-users' : {
    controller: 'UserController',
    action: 'find',
  },

  'POST /create-user' : {
    controller: 'UserController',
    action: 'create',
  },

  'GET /user/:pseudo' : {
    controller: 'UserController',
    action: 'findByPseudo',
  },

  'GET /user/sent-invitations/:pseudo' : {
    controller: 'UserController',
    action: 'findSentInvitations',
  },

  'GET /user/received-invitations/:pseudo' : {
    controller: 'UserController',
    action: 'findReceivedInvitations',
  },

  'GET /user/friends/:pseudo' : {
    controller: 'FriendsController',
    action: 'findFriends',
  },

  'POST /user/befriend' : {
    controller: 'FriendsController',
    action: 'create',
  },

  'GET /user/bars/:pseudo' : {
    controller: 'BarController',
    action: 'find',
  },

  'GET /login': {
      controller: 'AuthController',
      action: 'login'
  },

  'POST /login': {
      controller: 'AuthController',
      action: 'process'
  },

  'POST /logout': {
      controller: 'AuthController',
      action: 'logout'
  },

  'GET /bar/:name' : {
    controller: 'BarController',
    action: 'findByName',
  },

  'POST /bar/create' : {
    controller: 'BarController',
    action: 'create',
  },

};
