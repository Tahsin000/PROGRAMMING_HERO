# **Find the cheapest phone from an array of phone objectsPreviousNext**

```jsx
const phones = [
    {
        name: 'samsung',
        camera: 12,
        storage: '32gb',
        price: 36000,
        color: 'silver'
    },
    {
        name: 'walton',
        camera: 10,
        storage: '32gb',
        price: 22000,
        color: 'silver'
    },
    {
        name: 'iphone',
        camera: 10,
        storage: '64gb',
        price: 82000,
        color: 'red'
    },
    {
        name: 'Xaomi',
        camera: 10,
        storage: '32gb',
        price: 52000,
        color: 'silver'
    },
    {
        name: 'Oppo',
        camera: 10,
        storage: '32gb',
        price: 20000,
        color: 'silver'
    },
    {
        name: 'Nokia',
        camera: 10,
        storage: '32gb',
        price: 44000,
        color: 'silver'
    },
    {
        name: 'HTC',
        camera: 10,
        storage: '32gb',
        price: 62000,
        color: 'silver'
    }
];

function cheapestPhone(phones){
    let temp = Number.MAX_VALUE;
    let phoneInfo;
    for(let i=0; i<phones.length; i++){
        if (phones[i].price < temp) temp = phones[i].price, phoneInfo = phones[i];
    }
    return phoneInfo;
}
const mySelection = cheapestPhone(phones);

console.log(mySelection);
```