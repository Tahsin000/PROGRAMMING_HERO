var isGraduated = true;
var salary = 75000;
var cars = 0;

if (isGraduated == true && salary > 50000 && cars >= 1){
    console.log('Eso biye kore feli');
}
else {
    console.log('tor kopale biye nai');
}

if (isGraduated === true || salary > 50000){
    console.log('Eso prem kore')
}
else {
    console.log('tomar friend er mobile number dao');
}

if (isGraduated === true && salary > 50000 || cars >= 1){
    console.log('Eso prem kore')
}
else {
    console.log('tomar friend er mobile number dao');
}