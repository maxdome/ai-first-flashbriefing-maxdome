require('dotenv').config({ silent: true });

const { app } = require('dexpress');
app.enable('trust proxy');
const maxdome = require('drequest-maxdome').getRequestBuilder();
require('dcontrollers')(app, [
  require('./controller')({ maxdome }),
]);
