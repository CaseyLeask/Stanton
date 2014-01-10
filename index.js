var fs = require("fs");
var glob = require("glob")
var test_files = glob.sync("data/*.dat");

test_files.forEach(function(file) {
  var stream = fs.createReadStream(file);
  stream.setEncoding('utf8');
  stream.on('data', function(data) {
    console.log(file);
    console.log(data);
  });
});
