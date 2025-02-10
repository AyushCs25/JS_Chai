const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){         // A Callback function is a function without name
//     console.log(val);                   // Each element of coding array is redirected to val.
// } )   

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [              // IMPORTANT
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})