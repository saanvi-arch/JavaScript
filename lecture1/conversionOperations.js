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

// non primitive type : array , objects , functions 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
// the values of id and anotherId is same bhut it will show false because symbol is use to assign unique values

const heros = ["sita" , "ram" , "gita"]
let myobj = {
    name: "rita",
    age:22
}

const myFun = function(){
    console.log("hello world ")
}
// we can declare our function in a variable aslo 

// number => number
// null => object
// String => string 
// bigInt => bigint 
// undefined => undefined 
// boolean => boolean
// symbol => symbol
// function => function
// array => object
// object => object