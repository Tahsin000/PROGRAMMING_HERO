# **Intro to JSON, JSON Structure, parse, stringifyPreviousNext**

```jsx
const user = {
    id: 1,
    name: 'Gorib Aamir',
    job: 'actor',
}

// JavaScript Object Notation (JSON);
const stringify = JSON.stringify(user)
// console.log(stringify);

const shop = {
    owner : 'Alia',
    address: {
        street:'kpchukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products : ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
```