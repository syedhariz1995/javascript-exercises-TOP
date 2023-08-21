const repeatString = function (str, num) {
  let newStr = "";
  if (num < 0) {
    return "ERROR";
  }

  for (i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
};

console.log(repeatString("hey", 3));
console.log(repeatString("hey", 10));
console.log(repeatString("hey", 1));
console.log(repeatString("hey", 0));
console.log(repeatString("hey", -1));
console.log(repeatString("hey", Math.random()));
console.log(repeatString("", 10));

// Do not edit below this line
module.exports = repeatString;
