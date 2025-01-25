// Objects by Constructor

// const tinderUser = {}    ------> Singleton Object
const tinderUser = new Object();   // -----> Non-Singleton Object
tinderUser.name="Anand";
tinderUser.email="handsomeHunk@yahoo.com";
tinderUser.isLoggedIn= false;
// console.log(tinderUser);

const regularUser={
    email:"smartreferee22@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayush",         // Nested Objects
            lastname: "Choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1={1: "a",2: "b"}
const obj2={3: "c",4: "d"}

// const obj3= {obj1, obj2}   -----> Not practically efficient
// const obj3= Object.assign(obj1, obj2)       // First element in the assign method is 'Target' and rest are 'Source'.

const obj3= {...obj1, ...obj2};     // 'Spread' operator used for adding all the objects to the 'Target' element.------> Efficient
// console.log(obj3);

const users=[
    {
        id: 1,
        email: "ok@gmail.com"
    },
    {
        id: 1,
        email: "ok@gmail.com"
    },
    {
        id: 1,
        email: "ok@gmail.com"
    },
    {
        id: 1,
        email: "ok@gmail.com"
    }
]
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));          // All keys of Object are stored in an Array.------> Very Important
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser));        // It returns array consist of key and their value in a single entry.
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));           // Returns boolean value


const course={
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

//Destructuring

const {courseInstructor: Instructor}= course        // Important
console.log(Instructor);          // we have stored 'courseInstructor' key of 'Course' object in a separated variable.


// ****************************** JSON - JavaScript Object Notation ******************************** //
{
    "name": "Chai_Code",
    "coursename": "JS in Hindi",
    "price": "free"
}