// 'Reduce' method in JS

const arr1 = [1,2,3,4];

const myTotal1 = arr1.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and curral: ${currval}`);
    return acc + currval
}, 0)

const myTotal2 = arr1.reduce( (acc,cur) => (acc+cur),0 )

console.log(myTotal2);

const shoppingCart = [
    {
       itemName: "Javascript" ,
       price: 999
    },
    {
       itemName: "Py" ,
       price: 599
    },
    {
       itemName: "Mobile Development" ,
       price: 1999
    },
    {
       itemName: "Data Science" ,
       price: 12999
    }
]
const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);
