var fs = require('fs');

fs.readFile('./hello.js', 'utf-8', function (err, result) {
    console.log('file read completed..');
    console.log(result);
});

console.log('async code...');