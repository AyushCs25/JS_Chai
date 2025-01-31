// Immediately Invoked Function Expressions(IIFE)

(function chai(){         // ---> Named IIFE
    console.log(`DB connected.`);
})() ;                                      // first () is for function declaration and second for execution.---> IIFE

// To remove the global scope pollution, we use IIFE6
// After declaring the IIFE and its execution, always put a semi-colon to end its execution and to start another IIFE -----> Important

(  () => {
    console.log(`DB connected two.`);       // Creating function with an arrow function..---> IMPORTANT
} )();

(  (name) => {
    console.log(`DB connected three ${name}`);
} )('ayush');