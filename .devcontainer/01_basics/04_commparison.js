// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)

console.log("2">1)
console.log("02">1)

// Here JS allows this comparison as it automatically coonverts the string data type to the other type by which it is comparing
// Typescript is a language in which this type of comparison is not allowed. This is more a strict type language.

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)      //It gives a true value. The reason is that an equality check == and comparisons > < >= <= work differently.
                            // Comparisons convert null to a number, treating it as 0. That's why null>=0 is true and null>0 is false.

// console.log(undefined == 0)
// console.log(undefined > 0);
// console.log(undefined < 0);     // All three are false

// Strict check ===   -> Also checks data type here
console.log("2" === 2);



