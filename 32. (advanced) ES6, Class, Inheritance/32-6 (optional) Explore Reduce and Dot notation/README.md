# Explore Reduce and Dot notation

### notation.js

```jsx
const student = {
  name: "Kolim Uddin",
  age: 15,
  class: "Ten",
  marks: {
    math: 78,
    physics: 89,
    chemistry: 65,
  },
};
const chemistry = student.marks.chemistry;
const subject = "chemistry";
const chemistry1 = student.marks[subject];
console.log(chemistry1);
```

### reduce.js

```jsx
const numbers = [12, 23, 34, 45, 56, 67, 78, 89];

// .reduce (accmulatorFunction, initial value)
const total = numbers.reduce((previous, current) => previous + current);

console.log(total);
```
