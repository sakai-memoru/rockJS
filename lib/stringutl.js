StringUtl = require('string');

class Str{};

getRegExp_ = (ary_) => {
  var retStr = ary_.join('|');
  return retStr;
}

Str.prototype.getRegExp = getRegExp_;

module.exports = new Str();

// debug
var Strings = new Str();
output = Strings.getRegExp(['momochi','ももち','もも']);
console.log(output);
