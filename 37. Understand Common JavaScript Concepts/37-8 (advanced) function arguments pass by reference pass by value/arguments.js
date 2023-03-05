// array like object 

function sum(a, b, c){ 
    console.log(typeof arguments);
    console.log(args);
    const result = a + b + c; 
    return result;
}
const total = sum (45, 89, 12, 45, 98, 56);
console.log(total);