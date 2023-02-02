# Can you find out who will get the delicious cake (Part II)

```jsx
function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
  return marksOfJim > marksOfDela
    ? "Jim"
    : marksOfDela > marksOfChinku
    ? "Dela"
    : "Chinku";
}
```
