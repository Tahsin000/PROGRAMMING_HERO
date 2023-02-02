# Calculate total cost

```jsx
const totalCost = (products) => {
  // let product_01 = products[0].price;
  // let product_02 = products[2].price;
  // let product_03 = products[3].price;
  var n = products.length;
  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += products[i].price;
  }
  return sum;
};
```
