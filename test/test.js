var Stanton = require("../lib/stanton.js");
var assert  = require("assert");

describe("Stanton", function() {
  it("Should exist", function() {
    assert.equal(true, !!Stanton);
  });

  it("Should return a valid object", function() {
    var robot = Stanton.place(0, 0, "north");

    assert.equal(0, robot.x);
    assert.equal(0, robot.y);
    assert.equal("north", robot.direction);
  });

  it("Should turn left correctly", function() {
    var robot = Stanton.place(0, 0, "north");

    Stanton.left(robot);

    assert.equal('west', robot.direction);
  });

  it("Should turn right correctly", function() {
    var robot = Stanton.place(0, 0, "north");

    Stanton.right(robot);

    assert.equal('east', robot.direction);
  });

  it("Should report correctly", function() {
    var robot = Stanton.place(0, 0, "north");

    assert.equal("0,0,NORTH", Stanton.report(robot));
  });
});
