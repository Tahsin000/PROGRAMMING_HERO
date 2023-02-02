# Is it Isosceles

```jsx
function checkTriangle(side1, side2, side3){
  return (side1 == side2 && side1 == side3) ? "No" : (side1 == side3) ? "Yes" : (side2 == side3) ? "Yes" : (side1 == side2) ? "Yes" : "No";
}
```
