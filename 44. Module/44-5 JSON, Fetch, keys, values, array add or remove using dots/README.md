```javascript
// 1. stringify
const student = {
    name:'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
console.log(studentJSON);


// 2. parse
const studentOBJ = JSON.parse(studentJSON);
console.log(studentOBJ);

// 3. fetch
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));

// 4. pick the kay name in the object
const keyOBJ = Object.keys(student);
console.log(keyOBJ);

// 4. pick the value name in the object
const valueOBJ = Object.values(student);
console.log(valueOBJ);

// 5. For loop
const numbers = [23, 34, 45, 56, 67, 78];
numbers.forEach(element => console.log(element));
numbers.map(element => element * 2);

// 6. FOR OF use an array like object 
const numbers1 = [23, 34, 45, 56, 67, 78];
for(const number of numbers1){
    console.log(number);
}

// 7. FOR IN using an object property
const OBJ = {name: 'tahsin', age: 52, salary:52000};
for(const obj in OBJ){
    console.log(`${obj} = ${OBJ[obj]}`)
}

// 8. copy product array and then add new product
const products = [
    {name: 'laptop', price:32000, brand: 'lenovo', color:'silver'},
    {name: 'phone', price:7000, brand: 'iPhone', color:'golden'},
    {name: 'watch', price:3000, brand: 'casio', color:'yellow'},
    {name: 'sungalss', price:300, brand: 'ribon', color:'black'},
    {name: 'camera', price:9000, brand: 'canon', color:'gray'},
]
const newProduct = [...products, newProduct];

// 9. create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');



```