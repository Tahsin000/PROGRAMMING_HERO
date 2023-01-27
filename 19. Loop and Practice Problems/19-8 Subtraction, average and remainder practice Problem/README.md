# **Subtraction, average and remainder practice ProblemPreviousNext**

![Page 2.png](problem/Page%202.png)

```jsx
var momMoney = parseInt(prompt("Please enter mom gave money"));
var price = parseInt(prompt("cost of 1 kg of oranges and 1 kg of apples"));
document.getElementById("demo").innerHTML = momMoney - price;
```

![Page 3.png](problem/Page%203.png)

```jsx
var Mathematics = parseFloat(prompt("Please enter Mathematics number"));
var Biology = parseFloat(prompt("Please enter Biology number"));
var Chemistry = parseFloat(prompt("Please enter Chemistry number"));
var Physics = parseFloat(prompt("Please enter Physics number"));
var Bangla = parseFloat(prompt("Please enter Bangla number"));
var average = Mathematics + Biology + Chemistry + Physics + Bangla;
average /= 5;
// var price = parseInt(prompt("cost of 1 kg of oranges and 1 kg of apples"));
document.getElementById("demo").innerHTML = average.toFixed(2);
```

![Page 4.png](problem/Page%204.png)

```jsx
var first = prompt("Please enter first lines");
var second = prompt("Please enter second lines");

if (first && second) {
  document.getElementById("demo").innerHTML = first + second;
}
```

![Page 5.png](problem/Page%205.png)

```jsx
var num1 = parseInt(prompt("Please enter first number:"));
var remainder = num1 % 5;
if (num1) {
  document.getElementById("demo").innerHTML = remainder;
}
```
