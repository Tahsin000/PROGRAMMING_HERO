## what is javascript event loop?

### [The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

### [video](https://youtu.be/8aGhZQkoFbQ)

```js
function a() {
  console.log("a");
  b();
  console.log("aa");
}
function b() {
  console.log("b");
  d();
  console.log("bb");
}
function d() {
  console.log("d");
  x();
  console.log("dd");
}
function x() {
  console.log("x");
  y();
  console.log("xx");
}
function y() {
  console.log("x");
  z();
  console.log("xx");
}
function z() {
  console.log("z");
  console.log("z");
}
setTimeout(() => {
  console.log("inside timeout");
}, 2000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

a();
```
