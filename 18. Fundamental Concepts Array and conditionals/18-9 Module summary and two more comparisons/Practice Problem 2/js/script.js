// var fruits = ['Apple', 'Banana', 'Orange'];
// var findFruit = prompt("search any index of fruit ['Apple', 'Banana', 'Orange'] ");
// var fruitRemove = prompt("Remove frui in the fruits array [" + fruits + "]");

var examNumber = [];
var result = [];
var n = parseInt(prompt("How many friend ? "));
for(let i = 0; i<n; i++){
    var m = parseInt(prompt("friend " + (i+1) + " total number :"));
    examNumber.push(m);
}
for(let i = 0; i<n; i++){
    if (80 <= examNumber[i]) {
        result[i] = 'A';
        continue;
    }
    else if (60 <= examNumber[i]){
        result[i] = 'B';
        continue;
    }
    else if (50 <= examNumber[i]){
        result[i] = 'C';
        continue;
    }
    else if (40 <= examNumber[i]){
        result[i] = 'D';
        continue;
    }
    else{
        result[i] = 'F';
        continue;
    }
}

document.getElementById("demo").innerHTML = result;
/*



*/ 