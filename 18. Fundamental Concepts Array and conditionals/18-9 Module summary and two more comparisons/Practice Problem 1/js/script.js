var fruits = ['Apple', 'Banana', 'Orange'];
var findFruit = prompt("search any index of fruit ['Apple', 'Banana', 'Orange'] ");
var fruitRemove = prompt("Remove frui in the fruits array [" + fruits + "]");
var searchFruit = fruits.indexOf(findFruit);
fruits[searchFruit] = 'Mango';
var findFruitRemove = fruits.indexOf(fruitRemove);
fruits[findFruitRemove] = 'Watermelon';
document.getElementById("demo").innerHTML = "index number is: " + searchFruit;
document.getElementById("demo1").innerHTML = fruits;
/*



*/ 