require('dotenv').config({ silent: true });

const { app } = require('dexpress');
const maxdome = require('drequest-maxdome').getRequestBuilder();
require('dcontrollers')(app, [
  require('./controller')({ maxdome }),
]);
