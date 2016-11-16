'use strict';

module.exports = function(app) {

    var controller = app.controllers.user;

    app.route('/users')
        .get(controller.getAllUsers)
        .post(controller.setUser);

    app.route('/users/:id')
        .get(controller.getUser)
        .delete(controller.removeUser);

};