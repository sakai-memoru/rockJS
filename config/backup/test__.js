var fs = require('fs');
var CSON = require('cson');
module.exports = {
  message: CSON.parse(fs.readFileSync('./config/message.cson'))
}
