var fs = require('fs');
var path = require('path');

console.log('Tes 1');
fs.readFile(path.join(path.dirname(__filename), 'tes.txt'), 'utf8', function(error, contents) {
  console.log(contents);
});
fs.readFile('./tes.txt', 'utf8', function(error, contents) {
  console.log(contents);
});
console.log('Tes 3');
