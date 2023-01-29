var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the property name,
var penCount = shoppingCart.pen;

// alternative system
var penCount2 = shoppingCart["pen"];


var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(penCount2);
console.log(propertyValues);

