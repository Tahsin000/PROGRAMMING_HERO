const products = [
    {name: 'laptop', price:32000, brand: 'lenovo', color:'silver'},
    {name: 'phone', price:7000, brand: 'iPhone', color:'golden'},
    {name: 'watch', price:3000, brand: 'casio', color:'yellow'},
    {name: 'sungalss', price:300, brand: 'ribon', color:'black'},
    {name: 'camera', price:9000, brand: 'canon', color:'gray'},
]
const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);

const cheap = products.find(product => product.price < 5000);
console.log(cheap);