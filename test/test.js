var Stanton = require("../lib/stanton.js").Stanton;
var assert  = require("assert");

describe("Stanton", function() {
  it("Should exist", function() {
    assert.equal(true, !!Stanton);
  });

  it("Should return a valid object", function() {
    var robot = new Stanton(0, 0, "north");

    assert.equal(0, robot.x);
    assert.equal(0, robot.y);
    assert.equal("north", robot.direction);
  });
});
