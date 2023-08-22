const leapYears = function(year) {
    return year % 4 === 0 && (year % 100 !==0 || year % 400 === 0)
};

console.log(leapYears(1996)) // true
console.log(leapYears(1997)) // false
console.log(leapYears(34992)) // true
console.log(leapYears(1900)) // false
console.log(leapYears(1600)) // true
console.log(leapYears(700)) // false

// Do not edit below this line
module.exports = leapYears;
