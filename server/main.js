'use strict';
const chalk = require('chalk');
const server = require('http').createServer();

const createApplication = function() {
  const app = require('./app');
  server.on('request', app); // attach the Express application
};

const startServer = function() {
  const PORT = process.env.PORT || 1337;

  server.listen(PORT, function() {
    console.log(chalk.blue('Server start on port', chalk.magenta(PORT)));
  })
};

createApplication();
startServer();
