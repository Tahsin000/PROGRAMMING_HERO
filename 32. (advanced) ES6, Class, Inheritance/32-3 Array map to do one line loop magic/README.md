# Array map to do one line loop magic

```jsx
const numbers = [1, 3, 5, 6, 7];
const output = [];

function getDoubles(numbers) {
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}
const doubleIt = (number) => number * 2;

const makeDouble = numbers.map(doubleIt);

const fiveTimes = [1, 2, 3, 4, 5].map((x) => x * 5);

const result = getDoubles(numbers);

console.log(fiveTimes);
```
