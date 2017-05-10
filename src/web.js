require('dotenv-safe').config();

const controller = process.env.CONTROLLER || 'tipOfTheDay';
require('dcontrollers')(
  require('dexpress')(),
  [
    require(`./controllers/${controller}`)({
      maxdome: require('drequest-maxdome').getRequestBuilder(),
    }),
  ]
);
