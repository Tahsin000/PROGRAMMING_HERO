const numbers= [12, 23, 34, 45, 56, 67];

const bottle = {
    color:'yellow',
    price: 50,
    isCleaned: true,
    capaciry: 1,
};
const keys = Object.keys(bottle);
for(const key of keys){
    dd(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    dd(key, bottle[key]);
}

// advance 
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, values] of pair){
    dd(key, values);
} 




function dd (x, y){console.log(x, y)};

