// p:01
const numbers = [12, 23, 65, 87, 89, 90, 86, 6543, 32];
const even = numbers.filter(num => num % 2 === 0);
// console.log(even);

// p:02
const products = [
    { id: 01, name: 'laptop', price: 10002 },
    { id: 01, name: 'laptop', price: 100 },
    { id: 01, name: 'laptop', price: 10000 },
    { id: 01, name: 'laptop', price: 100000 },
];
// const itemsPrice = products.filter(product => product.price > 1000);
// console.log(itemsPrice);
// p:03
const itemsPrice = products.filter(product => product.price < 1000);
// console.log(itemsPrice);
// p:04 
const allNumbers = [12, 23, 65, 87, 89, 90, 86, 6543, 32];
const big = allNumbers.filter(num => num < 20);
console.log(big);
