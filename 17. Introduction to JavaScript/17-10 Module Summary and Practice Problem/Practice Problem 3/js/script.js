var first = prompt("Please enter first lines");
var second = prompt("Please enter second lines");

if (first && second){
  document.getElementById("demo").innerHTML = (first + second);
}