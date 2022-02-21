//export 는 public 과 비슷한 개념
const calc = {
  addTwoNumber : (a=0, b=0) => {
    return a + b;
  },
  
  subTwoNumber : (a=0, b=0) => {
    return a - b;
  }
}

//exports.addTowNumber = addTowNumber;
//exports.subTwoNumber = subTwoNumber;

module.exports = calc;