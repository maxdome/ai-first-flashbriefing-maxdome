require('dotenv-safe').config();

require('dcontrollers')(
  require('dexpress')(),
  [
    require('./controller')({
      maxdome: require('drequest-maxdome').getRequestBuilder(),
    }),
  ]
);
