# **Calculate the total cost of the products in a shopping cartPreviousNext**

```jsx
const shoppingCart = [
    {
        name: 'shoe',
        price: 1200,
        quantity: 2,
    },
    {
        name: 'shirt',
        price: 2200,
        quantity: 5,
    },
    {
        name: 'pant',
        price: 3700,
        quantity: 4,
    },
    {
        name: 'belt',
        price: 600,
        quantity: 3,
    },
];

function totalCost(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        sum += products[i].price * products[i].quantity;;
    }
    return sum;
}
console.log(totalCost(shoppingCart));
```