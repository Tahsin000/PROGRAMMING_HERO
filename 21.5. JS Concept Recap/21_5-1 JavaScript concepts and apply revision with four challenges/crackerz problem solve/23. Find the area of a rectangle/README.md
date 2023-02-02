# Find the second largest.

```jsx
function secondLargest(numbers) {
  var sortElement = numbers.sort(function (a, b) {
    return b - a;
  });
  return sortElement[1];
}
```
