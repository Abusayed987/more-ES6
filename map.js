// p:01 make double----------------------------
const numbers = [1, 2, 3, 4, 5];
const doubleFn = num => num * 2;
const double = numbers.map(doubleFn);
// console.log(double);

// p:02 get sum 5 ------------------------------
const numbers2 = [21, 23, 43, 45, 56, 67, 78, 78];
const getAdd5Fn = num => num + 5;
const getAdd5WithMap = numbers2.map(getAdd5Fn);
// console.log(getAdd5WithMap);

// p:03 divided by 2 ---------------------------------
const numbers3 = [12, 23, 65, 87, 89, 90, 86, 6543, 32];
const dividedByMap = numbers3.map(num => num / 2);
// console.log(dividedByMap);

// p:04 make threebled-----------------------------------------
const threebledByMap = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10].map(x => x * 3);
console.log(threebledByMap);
