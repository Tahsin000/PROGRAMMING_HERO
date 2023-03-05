
// 1.
let c ;
dd(c);

// 2.
function result(a, b){
    const total = a+ b;
}
dd(result());

// 3.
function third(a, b, c, d){
    const total = a+b+c+d;
    console.log(a, b, c, d);
}
dd(third(1, 2));

// 4. 
function noNegative(a, b){
    if(a < 0 || b< 0){
        return
    } else {
        return a + b;
    }
}
const total = noNegative (2,-5); console.log(total);


// 5.
const fifth = {id: 2, name: 'ponchom', age: 40} 
console.log(fifth.age, fifth.salary); 


// 6. 
const sixth = [4, 89, 87, 56, 54];
console.log(seven[1], seven[5], seven[200]);



// 7. 
const seven = [4, 89, 87, 56, 54];
delete seven[1];
dd(seven);

// 8. 
const eight = undefined;

// 9. 
const data = {result: [], update: null};

// 10.
console.log(typeof null);


7. 

function dd(x) {console.log(x)};