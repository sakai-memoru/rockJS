// ./main/template.js
var template = require('./main/template.js');

var execute_ = function(){
  var result = template.merge();
  console.log(result);
}

var TemplateApp = function(){};
TemplateApp.prototype.execute = execute_;

module.exports = new TemplateApp();

// debug
// var templateApp = new TemplateApp();
// templateApp.execute();
