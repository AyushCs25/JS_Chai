const balance=new Number(100);      // Guaranteed that balance will be of 'Number' type
console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2))

const otherNumber=123.8966
// console.log(otherNumber.toPrecision(4));

const hundreds=1000000
// console.log(hundreds.toLocaleString());          // Default set to US standard

// ++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++ 

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.2));
// console.log(Math.sqrt(25));
// console.log(Math.max(4,3,6,7));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10)+1))

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) + min)

