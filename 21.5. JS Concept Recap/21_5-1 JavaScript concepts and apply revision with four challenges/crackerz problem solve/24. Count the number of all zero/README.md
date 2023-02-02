# Count the number of all zero

```jsx
function countZeros(binary_num) {
  count = 0;
  for (let i = 0; i < binary_num.length; i++) {
    if (binary_num[i] === "0") count++;
  }
  return count;
}
```
