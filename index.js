var fs = require('fs'),
  glob = require('glob'),
  LineByLineReader = require('line-by-line'),
  test_files = glob.sync('data/*.dat'),
  Transform = require('stream').Transform,
  Stanton = require('./lib/stanton.js');

test_files.forEach(function(file) {
  var line_reader = new LineByLineReader(file),
    ts = new Transform,
    robot = Stanton.place(-1, -1, 'north');
  
  ts.setEncoding('utf8');
  ts._transform = function(chunk, encoding, callback) {
    var instructions = chunk.toString().split(/\s|,/);

    switch(instructions[0]) {
      case 'PLACE':
        robot = Stanton.place(parseInt(instructions[1], 10),
                              parseInt(instructions[2], 10),
                              instructions[3].toLowerCase());
        break;
      case 'MOVE':
        Stanton.move(robot);
        break;
      case 'LEFT':
        Stanton.left(robot);
        break;
      case 'RIGHT':
        Stanton.right(robot);
        break;
      case 'REPORT':
        ts.push(Stanton.report(robot) + "\n");
        break;
    }
    callback();
  };

  line_reader.on('line', function(line) {
    ts.write(line);
  });

  line_reader.on('end', function(line) {
    ts.end();
    ts.pipe(process.stdout);
  });
});
