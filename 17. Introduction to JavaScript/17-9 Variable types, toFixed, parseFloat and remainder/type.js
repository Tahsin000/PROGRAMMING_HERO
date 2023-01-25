var price = 100;
console.log(typeof price);

var price = '100';
console.log(typeof price);

var price = true;
console.log(typeof price);

var romantic ;
console.log(romantic);

/*  1. javascript data typing
    2. primitive values
        a. number
        b. string 
        c. boolean
        d. undefined
        e. null
    3. non-primitive 
        a. object
        b. array
        c. function

*/ 
/*
     ::: Floating number :::
*/
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1) // string return kore
sum = parseFloat(sum);
console.log(sum); 
/*
     ::: remainder number :::
*/
var mangoes = 11;
var person = 2;
console.log(mangoes%person);