'use strict';

/**
 * import dependencies
 */
const express      = require('express');
const load         = require('express-load');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const path         = require('path');

/**
 * initialize Express application
 */
const app = express();

/**
 * setup views folder and view engine
 */
app.set('views','server/views');
app.set('view engine', 'ejs');

/* Express middle-wares */

/**
 * show in console every single request and status
 */
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

/**
 * use client folder as default
 */
app.use('/', express.static(path.resolve('client')));

/**
 * load all routes, controllers and models into app
 */
load('models', { cwd: "server" })
    .then('controllers')
    .then('routes')
    .into(app);

/**
 * export app as a module
 *  this allows other modules use this Express app
 */
module.exports = app;