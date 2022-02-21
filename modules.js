//modules은 ESM 참고

const res = require('express/lib/response');
const calc = require('./modules/calculator');

let result = calc.addTwoNumber(3, 5);

console.log(result);

result = calc.subTwoNumber(3, 5);

console.log(result);