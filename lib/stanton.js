exports.place = function(x, y, direction) {
  return { x: x,
           y: y,
           direction: direction };
};

exports.left = function(robot) {
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

exports.right = function(robot) {
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

exports.report = function(robot) {
  return robot.x + "," + robot.y + "," + robot.direction.toUpperCase();
};
