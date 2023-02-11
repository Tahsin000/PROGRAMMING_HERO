# Different ways to use addEventListener on a button

```jsx
// option 1: directly set on the
// option 2: add onclick function
// option: 3
function makeRed() {
  const bg = document.body.style;
  bg.backgroundColor = "red";
}
const makeBlue = document.getElementById("makeBlue");
makeBlue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

const makePurple = document.getElementById("makePurple");
makePurple.onclick = function () {
  document.body.style.backgroundColor = "purple";
};

document.getElementById("makeGoldenrod").addEventListener("click", () => {
  document.body.style.backgroundColor = "goldenrod";
});
```
