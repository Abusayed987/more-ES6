// P:01
const numbers = [12, 23, 34, 454, 65, 6, 67, 8, 79];
const numbersAdd1 = numbers.map(n => n + 1);
// console.log(numbersAdd1);

// P:02.
// const friends = ['Mokbul', 'Mamim', 'Mobbar', 'Modu mollah', 'Mifat', 'Majib'];
// const friend = friends.map(fr=> fr);
// const friendFastLetter = friends.map(f => f[0]) // for first letter
// console.log(friendFastLetter);

// const friends = ['Mokbul', 'Mamim', 'Mobbar', 'Modu mollah', 'Mifat', 'Majib'];
// const friend= friends.map(friend => friend.length)
// console.log(friend);

const friends = ['Mokbul', 'Mamim', 'Mobbar', 'Modu mollah', 'Mifat', 'Majib'];
// const friendFastLetter = friends.map(friend => console.log(friend[0]));

// P:03
const products = [
    { id: 01, name: 'laptop', price: 121212 },
    { id: 01, name: 'laptop', price: 121212 },
    { id: 01, name: 'laptop', price: 121212 },
    { id: 01, name: 'laptop', price: 121212 },
]
// const productItem = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
console.log(items);
// P:04