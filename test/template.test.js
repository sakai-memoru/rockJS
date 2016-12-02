var expect    = require("chai").expect;
var template = require("../main/template");

describe("template wrapper test", function() {
  it("merge return", function() {
    var templ = '{{subject}} is {{name}}.';
    var opts  = {
      subject : 'The robot',
      name : 'momo'
    };
    expect(template.merge(templ,opts)).to.equal('The robot is momo.');
  });
});
