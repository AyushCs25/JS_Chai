var c = 300
let a = 300         // Global Scope

if (true) {
    let a = 10          // Block Scope
    const b = 20
    var c = 30
    console.log("Inner: ", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);


