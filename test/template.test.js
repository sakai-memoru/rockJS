var expect    = require("chai").expect;
var template = require("../main/template");

describe("template wrapper test", function() {
  it("merge return", function() {
    expect(template.merge()).to.equal('FIXME□□ merge');
  });
});
