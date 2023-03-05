const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1,
}

const keys = Object.keys(bottle);
dd(keys);
const values = Object.values(bottle);
dd(values);
const pair = Object.entries(bottle);
dd(pair);

// seal
dd (bottle);
delete bottle.isCleaned;
bottle.price = 1000;

dd(bottle);




function dd (x){console.log(x)};

