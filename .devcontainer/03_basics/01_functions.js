

function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName();             // Without parentheses -> Reference
                        // With parantheses -> Execution
                        
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    return number1+number2;
}

// addTwoNumbers(3,7);       // return 10
// addTwoNumbers(3,"7");       // return 37    // Note: In definition of function, we add parameters in function.. In function calling, we pass arguments as parameters of function.

const result= addTwoNumbers(5,7);
// console.log("Result: ", result);

function loginUserMessage(username = "Ayush"){          // 'Ayush' is set as default username if any username is not provided --> Important
    console.log(`${username} just logged in`);
}
loginUserMessage("Hari Om");

function calculateCartPrice(val1, val2, ...num1){           // ... -> 'Rest' operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));       // 200 is assigned to val1, 400 is assigned to val2 nd rest are in array by 'Rest' operator.

const user={
    username: "ayush",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
}
// handleObject(user);         // Passed 'user' as an argument in 'anyObject' parameter.
handleObject({
    username: "Sam",            // Objects are directly passed in the function.
    price: 399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));