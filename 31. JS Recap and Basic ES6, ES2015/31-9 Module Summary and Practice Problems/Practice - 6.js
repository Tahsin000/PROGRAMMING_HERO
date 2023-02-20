const fun = (num1, num2) => {
    return Math.max(...num1, ...num2);
}
const num1 = [2, 3, 4, 5, 6];
const num2 = [7, 5, 3, 9, 120];
const result = fun(num1, num2);

console.log(result);

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 
console.log(newCars);