'use strict';


/* import system properties, as connection url, server port, etc */
const env  = require('../config/env/properties');

/**
 * import dependencies
 */
const http     = require('http');
const app      = require('../config/initializers/app');
const database = require('../config/initializers/database')(env.URL);

/**
 * create a HTTP server
 *  inside create server function, the app module starts.
 */
const server = http.createServer(app);


/* HTTP Events */

/**
 * tell HTTP server in what port its going to listen at
 */
server.listen(env.PORT);

/**
 * call a function that is going to launch
 *  when HTTP server starts to listen
 */
server.on('listening', function () {
   console.log('listening on:',env.PORT);
});


