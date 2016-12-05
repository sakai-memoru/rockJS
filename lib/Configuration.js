var config = require('config');

class Configuration{}
Configuration.prototype.conf = config

module.exports.config = new Configuration().conf;

// debug
var conf = new Configuration().conf;
console.log(conf.get('importantFacts.milk'));
// console.log(config.get('message.csonDocumentaries'));
