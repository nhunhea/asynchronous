var fs = require('fs');

console.log('Tes 1');
fs.readFile('tes.txt', 'utf8', function(error, contents){
    console.log(contents);
});
console.log('Tes 3');
