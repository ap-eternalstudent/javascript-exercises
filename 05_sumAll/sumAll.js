const sumAll = function(firstNumber,secondNumber) {
  let sum = 0;
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number' || firstNumber < 0 || secondNumber < 0 ){
    return 'ERROR'
  } else {
    if (firstNumber < secondNumber) {
      for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
      }
    } else if (firstNumber > secondNumber){
      for (let i = secondNumber; i <= firstNumber; i++) {
        sum += i;
      }
    } else {
      return 'ERROR'
    }
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
