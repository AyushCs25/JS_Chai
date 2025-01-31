// const user = {
//     username : "ayush",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);        // this-> refers the current context
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username="hitesh"          // We changed the context of user here.
// user.welcomeMessage()

// console.log(this);      //Outside, there is no context, so empty bracket will be printed because of node window.--> {}, But, in case of browser window, there is 'window' object that is present.

// *************************************************************************************************************************//
// const chai=function(){
//     let username="Ayush";
//     console.log(this.username);             //------> prints 'undefined' as 'this' keyword for user-defined values work only on objects.
// }

const chai = () => {
    let username="ayush"
    console.log(this.username);
}
chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));

// Implicit Return statement
const addTwo = (num1,num2) =>  (num1 + num2)            // (No 'return' keyword here)
console.log(addTwo(3,4));

const objReturn = () => ({username: "ayush"})           // to return object, we must have to use parentheses-().
console.log(objReturn());