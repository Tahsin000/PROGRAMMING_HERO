# Check whether a year is a Leap Year or not (simplified way)

```jsx
function myInputyear() {
  var Km = document.getElementById("ans");
  var year = document.getElementById("year").value;
  var ans;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    ans = "Leap Year";
  } else {
    ans = "Not Leap Year";
  }
  Km.value = ans;
}
```
