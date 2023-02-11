# Most common ways to set Event Handlers

```jsx
function handleOnClick() {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Handled by function attached on onclick attribute";
}
function userOnClick() {
  const userInput = document.getElementById("userInput").value;
  document.getElementById("userInput-status").innerText = userInput;
}
function userClearOnClick() {
  document.getElementById("userInput-status").innerText = "";
  document.getElementById("userInput").value = "";
}
```
