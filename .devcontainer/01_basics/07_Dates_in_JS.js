// Dates

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);                     // Date is of Object type.

let myCreatedDate=new Date(2025, 4, 25)         // Month starts from 0 in JS
console.log(myCreatedDate.toDateString());      

// let newDate=new Date(2025,4,25,3,0)
// console.log(newDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

let newDate=new Date();
console.log(newDate.getMonth());
console.log(newDate.getDate());

// General use of date and time...
`Today's date is ${newDate.getDate()} of month ${newDate.getMonth()+1}`

newDate.toLocaleString('default', {         // Important method in Date and Time.
    weekday: "long",
})