// p:01
const numbers = [12, 23, 65, 87, 89, 90, 86, 6543, 32];
const bigNumberOne = numbers.find(num => num > 100);
// console.log(bigNumberOne);


// p:02
const products = [
    { id: 01, name: 'laptop', price: 10002 },
    { id: 01, name: 'laptop', price: 100 },
    { id: 01, name: 'laptop', price: 10000 },
    { id: 01, name: 'laptop', price: 100000 },
];
const productOne = products.find(x => x.price > 100);
console.log(productOne);

// p:03
const itemsPrice = products.find(product => product.price > 1000);
console.log(itemsPrice);


const allNumbers = [12, 23, 65, 87, 89, 90, 86, 6543, 32];
const big = allNumbers.find(num => num > 20);
console.log(big);


