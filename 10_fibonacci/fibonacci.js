const fibonacci = function(num) {
    if (num < 0 ) return "OOPS"
    if (num === 0) return 0
  
   let first = 1;
   let second = 0;
  
   for (i = 2; i <= num; i++){
    let current = first + second
    second = first
    first = current
   }
   return first
  }
  
  
  console.log(fibonacci(4))
  console.log(fibonacci(6))
  console.log(fibonacci(10))
  console.log(fibonacci(15))
  console.log(fibonacci(25))
  console.log(fibonacci(-25))
  console.log(fibonacci("1"))
  console.log(fibonacci("2"))
  console.log(fibonacci("8"))


// Do not edit below this line
module.exports = fibonacci;
