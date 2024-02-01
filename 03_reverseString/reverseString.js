const reverseString = function(string) {
  let stringToArray = string.split('');
  let reversedString = [];
  for (let i = 0; i<string.length ;i++) {
    reversedString.push(stringToArray[stringToArray.length-1])
    stringToArray.pop()
  }
  return reversedString.join('')
};

// split reverse join
//   return string.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
