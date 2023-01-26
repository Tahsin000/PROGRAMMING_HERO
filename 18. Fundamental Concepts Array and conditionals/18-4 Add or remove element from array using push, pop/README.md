# **Add or remove element from array using push, popPreviousNext**

1. use push to add element to an array as the last element array
2. use pop to get last element
3. pop elements save in element variable

-------------------- TASK--------------------

1. how to add first element in array in javascript ?
2. how to remove first element in array in javascript ?

```jsx
var number = [78, 45, 98, 45];
// use push to add element to an array as the last element array
number.push(12);
console.log(number);

var friend = ["balem", "kalam", "salam"];
friend.push("gelam");
friend.push("pailam");
console.log(friend);

// use pop to get last element
number.pop();
console.log(number);

// pop elements save in element variable
var element = number.pop();
console.log(element);

/*
    
    --------------------- TASK-------------------- 
    1. how to add first element in array in javascript ?
    2. how to remove first element in array in javascript ?

*/

// 1. how to add first element in array in javascript ?

var fruits = ["banana", "Orange", "Apple", "Mango"];

// add element in array position of first
fruits.unshift("grapes");
console.log(fruits);

// remove element in array position of first
fruits.shift();
console.log(fruits);
```
