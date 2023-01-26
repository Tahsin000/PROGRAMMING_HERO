// var fruits = ['Apple', 'Banana', 'Orange'];
// var findFruit = prompt("search any index of fruit ['Apple', 'Banana', 'Orange'] ");
// var fruitRemove = prompt("Remove frui in the fruits array [" + fruits + "]");

var num1 = parseInt(prompt('Enter the 1st numner : '));
var num2 = parseInt(prompt('Enter the 2nd numner : '));
var num3 = parseInt(prompt('Enter the 3th numner : '));
var large_number = Number.MIN_VALUE;
if (large_number <= num1) large_number = num1;
if (large_number <= num2) large_number = num2;
if (large_number <= num3) large_number = num3;
var Isosceles = (num1 == num2) ? 1 : (num1 == num3) ? 1 : (num2 == num3) ? 1 : 0;
if (Isosceles) Isosceles = 'Isosceles'
else Isosceles = 'not Isosceles'  
document.getElementById("demo").innerHTML = large_number;
document.getElementById("demo1").innerHTML = Isosceles;
/*



*/ 