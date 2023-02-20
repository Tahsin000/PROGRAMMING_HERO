
// function Declaration
function add(first , second){
    return first + second;
}

// function Expression
const add1 = function add1(first, second){
    return first + second;
}
//  function Expression with anonymous function
const add2 = function (first, second){
    return first + second;
}
//  arrow function
const add3 = (first, second) => first + second;

const result = add(10, 20);

// interview question: differences between 
// function declaration, function expression and arrow function

console.log(result);
