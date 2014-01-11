var check_for_valid_robot = function(x, y, direction) {
  if (typeof x !== "number" ||
      x < 0 ||
      x > 4) {
    throw new Error("x coordinate is not valid");
  }
  if (typeof y !== "number" ||
      y < 0 ||
      y > 4) {
    throw new Error("y coordinate is not valid");
  }
  if (['north', 'east', 'south', 'west'].indexOf(direction) === -1) {
    throw new Error('direction is not valid');
  }
}
exports.place = function place(x, y, direction) {
  check_for_valid_robot(x, y, direction);
  return { x: x,
           y: y,
           direction: direction };
};

exports.left = function left(robot) {
  switch(robot.direction) {
    case 'north':
      robot.direction = 'west';
      break;
    case 'east':
      robot.direction = 'north';
      break;
    case 'south':
      robot.direction = 'east';
      break;
    case 'west':
      robot.direction = 'south';
      break;
  }
};

exports.right = function right(robot) {
  switch(robot.direction) {
    case 'north':
      robot.direction = 'east';
      break;
    case 'east':
      robot.direction = 'south';
      break;
    case 'south':
      robot.direction = 'west';
      break;
    case 'west':
      robot.direction = 'north';
      break;
  }
};

exports.report = function report(robot) {
  return robot.x + "," + robot.y + "," + robot.direction.toUpperCase();
};

exports.move = function move(robot) {
  if (robot.direction === 'north' && robot.y < 4) {
    robot.y += 1;
  } else if (robot.direction === 'east' && robot.x < 4) {
    robot.x += 1;
  } else if (robot.direction === 'south' && robot.y > 0) {
    robot.y -= 1;
  } else if (robot.direction === 'west' && robot.x > 0) {
    robot.x -= 1;
  }
};
