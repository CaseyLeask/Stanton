var fs = require("fs"),
  glob = require("glob"),
  LineByLineReader = require('line-by-line'),
  test_files = glob.sync("data/*.dat");

test_files.forEach(function(file) {
  var line_reader = new LineByLineReader(file);
  line_reader.on('line', function(line) {
    console.log(line);
  });
});
