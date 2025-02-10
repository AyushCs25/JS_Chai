const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const item in myObject) {               // 'for-in' loop is used for printing elements of object
    // console.log(myObject[item]);
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

// Major difference between for-in loop and for-of loop is:
// for-of : It takes direct value of keys in loop by which it is defined
// for-in : It takes only keys of the object which is defined in the loop

const map=new Map()             // Map is not iterable....
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
    // console.log(key);     // ----> Not print anything.
}