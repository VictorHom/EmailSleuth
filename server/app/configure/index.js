'use strict';

module.exports = function(app){
  app.setValue = app.set.bind(app);

  app.getValue = function(path){
    return app.get(path);
  };

  require('./app-variables')(app);

  // Logging middleware, set as applicaiton
  // variable inside of server/app/congifure/app-variables.js

  app.use(app.getValue('log'));
  require('./static-middleware')(app);
  require('./parsing-middleware')(app);

};
