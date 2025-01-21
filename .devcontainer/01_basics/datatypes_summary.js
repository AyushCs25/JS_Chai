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


/*  ************************************************************************ */
// Stack(Primitive) and Heap(Non-Primitive) Meomry in JS

let myYoutubename = "ayushChoudhary"
anotherName = "Sahil"

console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email : "userOne@gmail.com",
    upi : "97575@ybl"
}
let userTwo=userOne
userTwo.email="ayushcs22109@gmail.com"          // Changing the value in userTwo email also changes the value in userOne email, as both are
                                                // representing same reference. (Stored in Heap Memory)

console.log(userOne.email)
console.log(userTwo.email)
