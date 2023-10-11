const name = "sita "
const value = 50

// console.log(`Hello my name is ${name} and my repo count is ${value}`); // use this method to display string 

const Name = new String('Gita-rc')

// console.log(Name[0])
// console.log(Name.length);
// console.log(Name.__proto__);
// console.log(Name.toUpperCase());
// console.log(Name.toLowerCase());

// console.log(Name.charAt(2));
// console.log(Name.indexOf('t'));

const newString = Name.substring(0,2);
// console.log(newString);

const anotherString = Name.slice(-8,2);
// console.log(anotherString)

const newstr = "    Gita      "
// console.log(newstr)
// console.log(newstr.trim()) //trim is use to remove extra spaces pr white spaces and line terminators

const url = "https://sita.com/sita%20google";
console.log(url.replace("%20","-"));

console.log(url.includes("sita"));