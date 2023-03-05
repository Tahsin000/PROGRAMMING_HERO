print5();
print10();

for (let index = 0; index < 5; index++) {
    console.log(i);
}
console.log('outside', i);

function print5(){
    console.log('inside print5', 5);
}

var print10 = ()=>{
    console.log('inside print10', 10);
}