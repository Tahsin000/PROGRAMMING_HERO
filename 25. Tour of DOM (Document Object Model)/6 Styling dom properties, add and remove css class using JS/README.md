# dom properties, add and remove css class using JS

```jsx
const sections = document.querySelectorAll("section");
for (const section of sections) {
  // console.log(section.style.border = '2px solid blue')
  section.style.border = "2px solid blue";
  section.style.margin = "2px";
  section.style.borderRadius = "10px";
  section.style.padding = "5px";
  section.style.background = "lightgray";
}
const placesContainer = document.querySelectorAll("#places-container");
// console.log(placesContainer);
for (const places of placesContainer) {
  places.style.background = "yellow";
  places.classList.add("text-center");
  places.classList.remove("large-text");
}
```
