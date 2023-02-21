const numbers = [12, 23, 34, 45, 56, 67, 78, 89];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 20);
const even = numbers.filter(num => num % 2 === 0);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 23000},
    // {id: 5, name: 'laptop', price: 45000},
]
const expensive = products.filter(x => x.price > 50000);


console.log(expensive); 