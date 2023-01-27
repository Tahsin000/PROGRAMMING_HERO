# **if-else and array related practice problemsPreviousNext**

![Page 2.png](images/Page%202.png)

```jsx
var fruits = ["Apple", "Banana", "Orange"];
var findFruit = prompt(
  "search any index of fruit ['Apple', 'Banana', 'Orange'] "
);
var fruitRemove = prompt("Remove frui in the fruits array [" + fruits + "]");
var searchFruit = fruits.indexOf(findFruit);
fruits[searchFruit] = "Mango";
var findFruitRemove = fruits.indexOf(fruitRemove);
fruits[findFruitRemove] = "Watermelon";
document.getElementById("demo").innerHTML = "index number is: " + searchFruit;
document.getElementById("demo1").innerHTML = fruits;
```

![Page 3.png](images/Page%203.png)

```jsx
var examNumber = [];
var result = [];
var n = parseInt(prompt("How many friend ? "));
for (let i = 0; i < n; i++) {
  var m = parseInt(prompt("friend " + (i + 1) + " total number :"));
  examNumber.push(m);
}
for (let i = 0; i < n; i++) {
  if (80 <= examNumber[i]) {
    result[i] = "A";
    continue;
  } else if (60 <= examNumber[i]) {
    result[i] = "B";
    continue;
  } else if (50 <= examNumber[i]) {
    result[i] = "C";
    continue;
  } else if (40 <= examNumber[i]) {
    result[i] = "D";
    continue;
  } else {
    result[i] = "F";
    continue;
  }
}

document.getElementById("demo").innerHTML = result;
```

![Page 4.png](images/Page%204.png)

```jsx
// var fruits = ['Apple', 'Banana', 'Orange'];
// var findFruit = prompt("search any index of fruit ['Apple', 'Banana', 'Orange'] ");
// var fruitRemove = prompt("Remove frui in the fruits array [" + fruits + "]");

var num1 = parseInt(prompt("Enter the 1st numner : "));
var num2 = parseInt(prompt("Enter the 2nd numner : "));
var num3 = parseInt(prompt("Enter the 3th numner : "));
var large_number = Number.MIN_VALUE;
if (large_number <= num1) large_number = num1;
if (large_number <= num2) large_number = num2;
if (large_number <= num3) large_number = num3;
var Isosceles = num1 == num2 ? 1 : num1 == num3 ? 1 : num2 == num3 ? 1 : 0;
if (Isosceles) Isosceles = "Isosceles";
else Isosceles = "not Isosceles";
document.getElementById("demo").innerHTML = large_number;
document.getElementById("demo1").innerHTML = Isosceles;
```
