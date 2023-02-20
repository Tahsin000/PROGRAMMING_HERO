const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '01717178282',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
// console.log(phone);
// console.log(color);
// console.log(price);

const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'};
// console.log(age);


const [first, second] = [12, 23, 34, 45];
console.log(first, second);

const nayoks = ['sakib', 'bappi', 'raj']
const [King, lost, notun] = nayoks;
console.log(notun);


function getNames(){
    return ['alim', 'halim'];
}

const [baba, chacha] = getNames();
console.log(chacha);