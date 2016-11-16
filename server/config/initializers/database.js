'use strict';

var mongoose = require('mongoose');

module.exports = function (url) {

    mongoose.connect(url);

    mongoose.connection.on('connected', function(){
        console.log('Mongoose is now connected to the database. ');
    });

    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose is now disconnected from database. ');
    });

    mongoose.connection.on('error', function(){
        console.log('Internal error, please try later', erro);
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            process.exit(0);
        });
    });

    mongoose.set('debug', true);

};