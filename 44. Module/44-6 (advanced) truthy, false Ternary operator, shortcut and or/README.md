```javascript

// 1. check truthy
let myVar = 5;
if (myVar){
    myVar *= 100;
} else {
    myVar = 0;
}


// 2. check falsy 
let myMoney = 50;
if (!myMoney){
    
}


// 3. 
const money = 80;
let food;
if (money > 100){
    food = 'birayani';
} else {
    food = 'cha biscuit';
}

// 4. ternary operator
let food1 = money > 100 ? 'birayani':'cha biscuit';

// 5. number to string 
const number = 10;
const numToString = number.toString();
console.log(numToString);

// 6. function call using ternary operator
const isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser(): hideUser();

// 7. another shortcut key using && ternary operator
// use && if the left side is true then right side will be executed
isActive && showUser();

// 8. another shortcut key using || ternary operator
// use || if the left side is false then right side will be exec
isActive || hideUser();
```