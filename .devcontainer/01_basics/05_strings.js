const name="Ayush Choudhary"
const lcQues=88

// console.log(name+" "+lcQues)
console.log(`Hello, my name is ${name} and total questions I have done on my Leetcode account is ${lcQues}. `)
//  A professional way to display concatenated output with all variables attached to it.

const gameName=new String('mingle-game')         // Creates a String object that has all letters as key-value pairs.

// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);

// console.log(gameName.charAt(2));

// const anotherString = gameName.slice(-9,4);
// console.log(anotherString);

// const newString = "        AYush           ";
// const newStr = newString.trim()
// console.log(newStr);

const url= "https://google.com/ayush%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes("ayush"));

console.log(gameName.split('-'));
