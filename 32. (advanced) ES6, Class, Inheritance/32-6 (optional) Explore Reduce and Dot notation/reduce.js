const numbers = [12, 23, 34, 45, 56, 67, 78, 89];

// .reduce (accmulatorFunction, initial value)
const total = numbers.reduce( (previous, current)=> previous + current);

console.log(total);