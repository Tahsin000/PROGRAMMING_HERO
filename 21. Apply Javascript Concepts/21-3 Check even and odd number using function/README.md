# Check even and odd number using function

```jsx
function myInputdigit() {
  var Km = document.getElementById("ans");
  var digit = document.getElementById("digit").value;
  var ans = digit % 2 ? "Odd number" : "Event number";
  Km.value = ans;
}
```
