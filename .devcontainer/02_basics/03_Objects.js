// singleton -> By literals singletons not formed, singleton formed by Constructor

//object literals

const mySym = Symbol("key1");

const Jsuser = {
    name: "Sahil",
    "full name": "Sahil Choudhary",
    [mySym]: "myKey1",      // To access 'Symbol' outside the object in JS, we use [] in the symbol name to use it. ----> Very Important
    age: 22,
    location: "Bhopal",
    email : "ayushcs22109@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(Jsuser.age);
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);         // Correct Syntax -----> Important

Jsuser.location = "Indore";     // Changes override in the Object
// Object.freeze(Jsuser);          // 'Freeze' method freezes the object by fixing all the values of that object.
Jsuser.location = "Bhagalpur";
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user.");
}

console.log(Jsuser.greeting());     // Without () in greeting function, it will print [Function(Anonymous)] as it can't find the function                               //associated with it

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}.`);         // Use of 'this' keyword
}

console.log(Jsuser.greetingTwo());
