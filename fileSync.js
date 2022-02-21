// node 의 파일명은 카멜케이스
var fs = require('fs');

var result = fs.readFileSync('./hello.js', 'UTF-8');

console.log('파일을 다 읽어오고 나서 실행되는 라인');


console.log(result);
