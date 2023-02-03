// ____________ swap-1 ____________
let first = 5;
let second = 7;
let temp = first;
first = second;
second = temp;
console.log(first, second);

// ____________ swap-1 (Destructuring) ____________
first = 10;
second = 20;
[first, second] = [second, first];
console.log(first, second);
