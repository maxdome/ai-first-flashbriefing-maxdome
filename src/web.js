require('dotenv-safe').config();

const app = require('dexpress')();
app.use(require('./middlewares/logging'));
const controller = process.env.CONTROLLER || 'tipOfTheDay';
require('dcontrollers')(app, [
  require(`./controllers/${controller}`)({
    maxdome: require('drequest-maxdome').getRequestBuilder(),
  }),
]);
