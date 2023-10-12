const add = function(num1, num2) {
	 return num1 + num2
};

console.log(add(0,0))
console.log(add(2,2))
console.log(add(2,6))





const subtract = function(num1, num2) {
	return num1 - num2
};

console.log(subtract(10,4))







const sum = function(arr) {
  let sum = 0
	for(i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
};

console.log(sum([]))
console.log(sum([7]))
console.log(sum([7,11]))
console.log(sum([1, 3, 5, 7, 9]))






const multiply = function(arr) {
  let times = 1
	for(i = 0; i < arr.length; i++){
    times *= arr[i]
  }
  return times
};

console.log(multiply([2,4]))
console.log(multiply([2, 4, 6, 8, 10, 12, 14]))






const power = function(num1, num2) {
	return Math.pow(num1,num2)
};

console.log(power(4,3))






const factorial = function(num) {
	if(num === 0 || num === 1){
    return 1
  }

  for(let i = num - 1; i >= 1; i--){
    num *= i
  }
  return num
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
