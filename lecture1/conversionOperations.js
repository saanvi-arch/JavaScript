let score = "33abc"

let valueInNumber = Number(score)

console.log(typeof score)
console.log(valueInNumber) // output will be NaN that is not a number 

// null => 0
// "33" => 33
// "33abc" => NaN
// "undefined" => NaN

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)

console.log(boolIsLoggedIn)

// 1 => true 
// 0 =>false
// "" => false
// "saanvi" =>true
