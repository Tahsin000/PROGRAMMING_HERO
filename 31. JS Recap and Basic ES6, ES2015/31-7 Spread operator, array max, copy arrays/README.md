# \***\*Spread operator, array max, copy arrays\*\***

```jsx
const max = Math.max(12, 23, 34, 45, 56);
// console.log(max);
const numbers = [12, 23, 34, 45];
const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cbb9ba7c-3310-4019-b570-f91dfc87be68/Untitled.png)
