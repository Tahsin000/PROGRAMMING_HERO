# **Module Introduction and Basic ES6 RecapPreviousNext**

```jsx
// var let const
// break up with var

const numbers = [12, 23, 34, 45];
let salary = 450;

salary = 455;

//2. default parameters
function calculateSalary(salary, tex = 0.25, bonus = 0){
    const remaining = salary - salary * tex;
    const total = remaining + bonus;
    return total
}

const elementHtml = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`

// 3. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax +bonus;

// 4. Spread 
const ages = [12, 23, 34, 45, 67, 78];
const newAges = [...ages, 22, 24, 23];

//destructuring 
const {x, y, ...c} = {x: 45, y: 12, z: 33, name: 'Sakib Al Hasan', salary: 450000};
const [a, b, ...r] = [12, 23, 34, 45, 56];
console.log(r);
```