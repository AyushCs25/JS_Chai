// array

// const myArr= [1,2,3,4,5,true, "Ayush"]
// console.log(myArr[2]);

// JavaScript array-copy operations create shallow copies.
//  Shallow Copy -> Copy whose properties share the same reference. As a result, when you change either the source or the copy, you may 
//  also cause the other object to change too.
//  Deep Copy -> A deep copy of an object is a copy whose properties do not share the same references.

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);

// myArr2.push(5)
// console.log(myArr2);

// myArr2.unshift(9);          // Time Complexity high
// console.log(myArr2);

// myArr2.shift();
// console.log(myArr2);

// console.log(myArr2.indexOf(9));

// const newArr= myArr2.join()
// console.log(newArr);
// console.log(typeof newArr);     // String type

// Slice, Splice
console.log("A ",myArr2);
const myn1 = myArr2.slice(1,3)
console.log(myn1)
console.log("B ",myArr2);

console.log("C ",myArr2);
const myn2 = myArr2.splice(1,3)
console.log(myn2)
console.log("D ",myArr2);