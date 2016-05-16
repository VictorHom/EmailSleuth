'use strict';

const path = require('path');
const logMiddleware = require('morgan')('dev');

const rootPath = path.join(__dirname, '../../../');
const indexPath = path.join(__dirname, './browser/index.html');

// var env = require(path.join(rootPath, './server/env'));

module.exports = function(app){
  // app.setValue('env', env);
  app.setValue('projectRoot', rootPath);
  app.setValue('indexHTMLPath', indexPath);
  app.setValue('log', logMiddleware);
}
