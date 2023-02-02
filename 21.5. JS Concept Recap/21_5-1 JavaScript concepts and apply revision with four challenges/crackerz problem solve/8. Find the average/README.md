# Find the average

```jsx
function average(arrOfMarks) {
  var sum = 0;
  for (let i = 0; i < arrOfMarks.length; i++) {
    sum += arrOfMarks[i];
  }
  return Math.round((sum / arrOfMarks.length) * 100) / 100;
}
```
