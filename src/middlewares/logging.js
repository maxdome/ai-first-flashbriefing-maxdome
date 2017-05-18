const morgan = require('morgan');

module.exports = morgan('combined', {
  stream: {
    write: (message) => {
      console.log(message.replace('\n', ''));
    }
  }
});
