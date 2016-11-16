'use strict';

module.exports = function(app){

    const User = app.models.user;

    var controller = {};

    /***
     * list all users from database
     */
    controller.getAllUsers = function(req, res){

        User.find().exec()
            .then(function(users){
                    res.json(users);
                },
                function(error){
                    console.error(error);
                    res.status(500).json(error);
                });
    };

    /**
     * select one unique user from database
     */
    controller.getUser = function(req, res){

        var _id = req.params.id;

        User.findById(_id).exec()
            .then(function(user){
                    if(!user) throw new Error("Sorry, User not found");
                    res.json(user);
                },
                function(error){
                    console.log(error);
                    res.status(404).json(error);
                });
    };

    /**
     * insert a user into database
     */
    controller.setUser = function (req, res) {

        var _user = new User();

        _user.firstName = req.body.user.firstName;
        _user.lastName = req.body.user.lastName;

        _user.save(function (err, user) {
            if(err) return console.log(err);
            console.log(user);
            res.end();
        });

    };

    controller.removeUser = function (req, res) {

        var _id = req.params.id;

        User.remove({ "_id" : _id }).then(
            function () {
                res.end();
            },
            function (err) {
                return console.log(err);
            }
        )


    };

    return controller;
};