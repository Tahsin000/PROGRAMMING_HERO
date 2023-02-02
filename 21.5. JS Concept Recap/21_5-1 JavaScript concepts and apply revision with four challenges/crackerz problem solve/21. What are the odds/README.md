# What are the odds

```jsx
function findOddSum(arrOfNumbers) {
  var sum = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    arrOfNumbers[i] % 2 ? (sum += arrOfNumbers[i]) : 0;
  }
  return sum;
}
```
