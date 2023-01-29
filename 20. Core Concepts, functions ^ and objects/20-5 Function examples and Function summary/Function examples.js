/*
function functionName(parameters){

}
functionName(parameters values);
*/ 
function getAverage (assigment1, assigment2, assigment3){
    const total = assigment1 + assigment2 + assigment3;
    const average = total / 3;
    return average;
}
const assigment1 = 70;
const assigment2 = 80;
const assigment3 = 90;
var myAverage = getAverage(assigment1, assigment2, assigment3);
console.log(myAverage);
