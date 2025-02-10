// for
// 'break'---> Kisi bhi control flow se bahar nikalne ke liye hm 'break' keyword ka use krte hn.
let myArray=["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

for (let index = 0; index < 15; index++) {
    if (index==5){
        console.log("Detected 5");
        continue;
    }

    console.log(`Value of index is ${index}`)
}