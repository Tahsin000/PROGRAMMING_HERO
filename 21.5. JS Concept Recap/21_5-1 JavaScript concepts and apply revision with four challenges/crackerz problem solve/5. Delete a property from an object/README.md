# Delete a property from an object

```jsx
const deleteProperty = (arr) => {
  var temp = Object.keys(arr[0]);
  var ObjectKeys = temp[0];
  var arrSecondElement = arr[1];
  var ans;
  ObjectKeys === arrSecondElement ? (ans = "YES") : (ans = "NO");
  return ans;
};
```
