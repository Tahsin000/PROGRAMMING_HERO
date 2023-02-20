const max = Math.max(12, 23, 34, 45, 56);
// console.log(max);
const numbers = [12, 23, 34, 45];
const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);


