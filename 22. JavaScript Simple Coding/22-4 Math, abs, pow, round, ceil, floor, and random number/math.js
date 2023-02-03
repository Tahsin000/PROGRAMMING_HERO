// ____________ Math.pow ____________
var num1 = 2;
var num2 = 3;
let power = Math.pow(num1, num2);
console.log(power);

// ____________ Math.abs ____________
num1 = 10;
num2 = 30;
var gap = Math.abs(num1 - num2);
console.log(gap);

// ____________ Math.round ____________
num1 = 12.08;
console.log(Math.round(num1));

// ____________ Math.ceil ____________
num1 = 12.45660;
console.log(Math.ceil(num1));

// ____________ Math.floor ____________
num1 = 12.98;
console.log(Math.floor(num1));

// ____________ Math.random ____________
num1 = 100;
var n = 20;
for(let i=0; i<n; i++){
    console.log(Math.round(Math.random() * num1));
}