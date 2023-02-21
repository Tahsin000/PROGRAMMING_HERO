const numbers = [12, 23, 34, 45, 56, 67, 78, 89];
// condition fillup korle single element dekhabe
const Find = numbers.find(x => x%2 === 0);
const filterAll = numbers.filter(x => x%2 === 0);

console.log(filterAll);