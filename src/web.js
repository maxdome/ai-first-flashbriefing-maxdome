require('dotenv-safe').config();

require('dcontrollers')(require('dexpress')(), [
  require(`./controllers/${process.env.CONTROLLER || 'tipOfTheDay'}`)({
    maxdome: require('drequest-maxdome').getRequestBuilder(),
  }),
]);
