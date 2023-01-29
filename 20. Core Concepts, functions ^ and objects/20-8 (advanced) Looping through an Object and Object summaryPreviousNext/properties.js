var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi:32,
    kazi: 14
}

const keys = Object.keys(shoppingCart);
const values = Object.values(shoppingCart);
// console.log(keys + " " + values);

for(var i = 0; i<keys.length; i++){
    console.log(keys[i], values[i]);
}

// for in propertyName
for(var propertyName in shoppingCart){
    console.log(propertyName);
}

// for in propertyValues
for(var propertyName in shoppingCart){
    console.log(shoppingCart[propertyName]);
}