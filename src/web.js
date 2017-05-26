require('dotenv-safe').config();

const app = require('express')();
app.disable('x-powered-by');

require('@dnode/middlewares')(app, []);

const controller = process.env.CONTROLLER || 'tipOfTheDay';
const maxdome = require('@dnode/request-maxdome').getRequestBuilder({
  maxdomeOptions: {
    apikey: process.env.MAXDOME_APIKEY,
    appid: process.env.MAXDOME_APPID,
    hostname: process.env.MAXDOME_HOSTNAME,
    protocol: process.env.MAXDOME_PROTOCOL,
  }
});

require('@dnode/controllers')(app, [
  require(`./controllers/${controller}`)({ maxdome }),
]);

if (module.parent) {
  module.exports = app;
} else {
  app.listen(process.env.PORT);
}
