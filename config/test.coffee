fs = require('fs')
CSON = require('cson')
module.exports = message : CSON.parse(fs.readFileSync('./config/message.cson'))
