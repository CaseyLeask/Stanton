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

  it("Should move correctly", function() {
    var robot = Stanton.place(0, 0, "north");

    Stanton.move(robot);

    assert.equal("0,1,NORTH", Stanton.report(robot));
  });

  it("Should not run over the north edge", function() {
    var robot = Stanton.place(0, 4, "north");

    Stanton.move(robot);

    assert.equal("0,4,NORTH", Stanton.report(robot));
  });

  it("Should not run over the east edge", function() {
    var robot = Stanton.place(4, 0, "east");

    Stanton.move(robot);

    assert.equal("4,0,EAST", Stanton.report(robot));
  });

  it("Should not run over the south edge", function() {
    var robot = Stanton.place(0, 0, "south");

    Stanton.move(robot);

    assert.equal("0,0,SOUTH", Stanton.report(robot));
  });

  it("Should not run over the west edge", function() {
    var robot = Stanton.place(0, 4, "west");

    Stanton.move(robot);

    assert.equal("0,4,WEST", Stanton.report(robot));
  });
});
