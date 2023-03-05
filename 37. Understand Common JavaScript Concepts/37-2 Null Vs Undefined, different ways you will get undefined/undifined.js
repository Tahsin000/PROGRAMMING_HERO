const x = ' ';
if (x){
    dd('value of x is truthy');
} else {
    dd('value of x is falsy');
}

function dd(x) {console.log(x)};


// optional
const y = null; 
if (!y){
    dd('value of y is falsy');
} else {

}