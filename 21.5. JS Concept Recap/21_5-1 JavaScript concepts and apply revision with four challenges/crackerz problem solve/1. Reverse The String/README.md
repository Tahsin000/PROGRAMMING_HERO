# Reverse The String

```jsx
const reverseMaker = (word) => {
  //Write Your solution Here
  var String = "";
  var n = word.length;
  for (let i = n - 1; i >= 0; i--) {
    String += word[i];
  }
  return String;
};
```
