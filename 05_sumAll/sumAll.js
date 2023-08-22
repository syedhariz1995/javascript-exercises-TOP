const sumAll = function(start, end) {
    let sum = 0

    if(start < 0 || end < 0) return "ERROR"
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"
    

    if(start > end){
        const temp = start
        start = end
        end = temp
    }
    
    for(i = start; i <= end ; i++){
        sum+= start
        start++
    }
    return sum
};

console.log(sumAll(1, 4))
console.log(sumAll(1, 4000))
console.log(sumAll(123, 1))
console.log(sumAll(-10, 4))
console.log(sumAll(10, "90"))
console.log(sumAll(10, [90, 1]))

// Do not edit below this line
module.exports = sumAll;
