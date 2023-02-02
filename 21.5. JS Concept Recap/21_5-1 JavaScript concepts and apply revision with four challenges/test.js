function findLeapYear(arrOfYears){
  var year=[];
  for(let i=0; i<arrOfYears.length; i++){
    (checkLeapYear(arrOfYears[i])) ? year.push(arrOfYears[i]): 0;
  }
  return year;
}
function checkLeapYear(year){
    return ((year%4== 0 && year % 100 != 0) || (year % 400) == 0);
}
var arr = [2023,2024,2025,2028,2030];
console.log(findLeapYear(arr));