// ./main/template.js
var template = require('./main/template.js');

var execute_ = function(){
  var templ = '{{subject}} is {{name}}. ';
  var opts  = {
    subject : 'The robot',
    name : 'momo'
  };

  var result = template.merge(templ,opts);
  console.log(result);
}

var TemplateApp = function(){};
TemplateApp.prototype.execute = execute_;

module.exports = new TemplateApp();

// debug
// var templateApp = new TemplateApp();
// templateApp.execute();
