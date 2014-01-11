var Stanton = require("../lib/stanton.js");
  expect  = require('chai').expect;

describe("Stanton", function() {
  var robot;

  beforeEach(function() {
    robot = Stanton.place(0, 0, "north");
  });

  it("Should return a valid object", function() {
    expect(robot).to.be.a('Object');
    expect(robot.x).to.equal(0);
    expect(robot.y).to.equal(0);
    expect(robot.direction).to.equal("north");
  });

  it("Should validate x coordinate", function() {
    expect(function() {
      Stanton.place(-1, 0, "north");
    }).to.throw("x coordinate is not valid");
  });

  it("Should validate y coordinate", function() {
    expect(function() {
      Stanton.place(0, -1, "north");
    }).to.throw("y coordinate is not valid");
  });

  it("Should validate direction", function() {
    expect(function() {
      Stanton.place(0, 0, "invalid");
    }).to.throw("direction is not valid");
  });

  it("Should turn left correctly", function() {
    Stanton.left(robot);

    expect(robot.direction).to.equal("west");
  });

  it("Should turn right correctly", function() {
    Stanton.right(robot);

    expect(robot.direction).to.equal("east");
  });

  it("Should report correctly", function() {
    expect(Stanton.report(robot)).to.equal("0,0,NORTH");
  });

  it("Should move correctly", function() {
    Stanton.move(robot);

    expect(Stanton.report(robot)).to.equal("0,1,NORTH");
  });

  it("Should not run over the north edge", function() {
    robot = Stanton.place(0, 4, "north");

    Stanton.move(robot);

    expect(Stanton.report(robot)).to.equal("0,4,NORTH");
  });

  it("Should not run over the east edge", function() {
    robot = Stanton.place(4, 0, "east");

    Stanton.move(robot);

    expect(Stanton.report(robot)).to.equal("4,0,EAST");
  });

  it("Should not run over the south edge", function() {
    robot = Stanton.place(0, 0, "south");

    Stanton.move(robot);

    expect(Stanton.report(robot)).to.equal("0,0,SOUTH");
  });

  it("Should not run over the west edge", function() {
    robot = Stanton.place(0, 4, "west");

    Stanton.move(robot);

    expect(Stanton.report(robot)).to.equal("0,4,WEST");
  });
});
