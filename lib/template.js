var Mustache = require('mustache');

var Template = function(){};

var merge_ = function(templ_,param_){
  var output = Mustache.render(templ_, param_);
  return output;
}

Template.prototype.merge = merge_;

module.exports = new Template();

// debug
// var templ  = "{{role}} is {{name}}"
// var opts   =  {
//   role: "Assistant AI",
//   name: "momocha"
// };
// var template = new Template();
// result = template.merge(templ,opts);
// console.log(result);
