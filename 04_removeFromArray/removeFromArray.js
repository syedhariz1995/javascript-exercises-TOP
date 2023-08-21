const removeFromArray = function(arr, ...toRemove) {
    return arr.filter(element => !toRemove.includes(element))
    
};

console.log(removeFromArray([1, 2, 3, 4], 3))
console.log(removeFromArray([1, 2, 3, 4], 3, 2))
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"))
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"))
console.log(removeFromArray([1, 2, 3, 4], 7, 2))
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))
console.log(removeFromArray([1, 2, 3], "1", 3))

// Do not edit below this line
module.exports = removeFromArray;
