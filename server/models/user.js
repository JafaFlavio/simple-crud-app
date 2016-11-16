'use strict';

module.exports = function(){

    const mongoose = require('mongoose');

    var UserSchema = mongoose.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName:  {
            type: String,
            required: true
        }
    });

    return mongoose.model('User', UserSchema);

};