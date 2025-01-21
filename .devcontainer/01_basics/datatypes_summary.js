const id= Symbol('123')
const anotherId= Symbol('123')  // Symbol dataType is used for uniqueness in program

console.log(id===anotherId) //Returns false as both variables have a unique symbol associated with them.

const heros=["AntMan","Iron Man", "Nagraj", "Doga" ]    // Array data type is Non-primitive data type which is referencing to another data type
let myObj = {
    name: "Ayush",      // Object data type in JS is inserted in key-value pairs.
    age: 22,            // Stored inside curly braces
}

const myFunction= function(){
    console.log("Hello World")          // Function in JS
}

console.log(typeof heros);
console.log(typeof myObj)           // All non-primitive data types (Array,Objects) returns 'object' as their "typeof"
console.log(typeof myFunction);       // Except the 'Function' which returns 'function'(object function) as its "typeof"
