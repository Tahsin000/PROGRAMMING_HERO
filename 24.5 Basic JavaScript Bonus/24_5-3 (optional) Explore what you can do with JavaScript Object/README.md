# **Explore what you can do with JavaScript ObjectPreviousNext**

### object

```jsx
const nayok = {
  name: "Sakib khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friend: ["Apu", "Raaz", "Salman", "aamir"],
  act: function () {
    console.log("acting like sakib khan");
  },
  car: {
    brand: "tesla",
    price: 50000000,
    made: 2025,
    manufactuer: {
      name: "tesla",
      ceo: "Elon mask",
      country: "USA",
    },
  },
};
nayok.act();
```

### array

```jsx
const product = [
  { name: "phone", price: 12000 },
  { name: "laptop", price: 32000 },
];

const products = {
  0: 15,
  1: 20,
  2: 21,
};
```

### arguments

```jsx
function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments[3]);
}
add(12, 13, 14, 15);
```
