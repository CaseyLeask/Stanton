exports.place = function place(x, y, direction) {
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
  return robot.x + "," + robot.y + "," + robot.direction.toUpperCase() + "\n";
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
