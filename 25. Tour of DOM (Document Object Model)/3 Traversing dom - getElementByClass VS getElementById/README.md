# getElementByClass VS getElementById

```jsx
console.log(document.getElementById("baba").innerHTML);
console.log(document.getElementById("Fruits").innerHTML);
console.log(document.getElementById("Places").innerHTML);

const Important = document.getElementsByClassName("important");
for (let place of Important) {
  console.log(place.innerText);
}
```
