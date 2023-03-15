# 44-3 Array methods map filter find forEach
### topic 
1. array-method.js 
    ``` javascript
    const products = [
        {name: 'laptop', price:32000, brand: 'lenovo', color:'silver'},
        {name: 'phone', price:7000, brand: 'iPhone', color:'golden'},
        {name: 'watch', price:3000, brand: 'casio', color:'yellow'},
        {name: 'sungalss', price:300, brand: 'ribon', color:'black'},
        {name: 'camera', price:9000, brand: 'canon', color:'gray'},
    ]
    ```
    - kivabe ar ekta variable er product er just brand gula rakhbo
    ``` javascript
    const brands = products.map(product => product.brand);
    console.log(brands);
    ```
    - just price gula lagbe 
    ```javascript
    const prices = product.map(product => product.price);
    console.log(prices);
    ```
    - loop korbo kito return korbo na forEach
    ```javascript 
    products.forEach(product => console.log(product));
    ```
    - filter is multiple answer return if it is find 
    ``` javascript
    const cheap = products.filter(product => product.price < 5000);
    console.log(cheap);
    ```
    - find is single value return if it is find
    ``` javascript
    const cheap = products.find(product => product.price < 5000);
    console.log(cheap);
    ```