# Map string array, array of objects map, foreach

```jsx
const numbers = [12, 23, 34, 45];
const half = numbers.map((n) => n / 2);
const thirds = numbers.map((n) => n / 2);
console.log(thirds);

const friends = ["tom hanks", "tom cruise", "tom brady", "tom solaiman"];
const firstLetters = friends.map((friend) => friend[0]);

const nameLength = friends.map((x) => x.length);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 2, name: "mobile", price: 80000 },
  { id: 3, name: "watch", price: 35000 },
  { id: 4, name: "tablet", price: 23000 },
  // {id: 5, name: 'laptop', price: 45000},
];
const items = products.map((x) => x.name);
const price = products.map((x) => x.price);

// forEach
friends.forEach((x) => console.log(x));

console.log(price);
```
