# Calculate Sum of all numbers of an array

```jsx
var n = parseInt(prompt("Enter array size : "));
var sum = 0;
for (let i = 0; i < n; i++) {
  var input = parseInt(prompt("Enter " + i + 1 + " Element values:"));
  sum += input;
}
var ans = (document.getElementById("digit").value = sum);
```
