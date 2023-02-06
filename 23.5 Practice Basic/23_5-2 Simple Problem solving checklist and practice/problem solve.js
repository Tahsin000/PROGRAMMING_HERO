// 1. feet to inch
function feetToInch(feet){
    return feet * 12;
}

// 2. centimeter to meter
function centimeterToMeter(centimeter){
    return centimeter / 100;
}
// 3. count paper
// book1 ---> 100
// book2---> 200
// book3 ----> 300
function paperRequirements(a, b, c){
    return ((a*100) + (b * 200) + (c * 300));
}


var tmpName = [45, 87, 96, 11, 63, -56, 71, 28] ;
function bestFriend(names){
    let name = '';
    let tmp = Number.MIN_VALUE;
    for(let i=0; i<names.length; i++){
        if(names[i].length >= tmp){
            tmp = names[i].length;
            name = names[i];
        }
    }
    return name;
}

//4. ['sajid','mamun','kamal','jubayer bin rased', 'Chinku'];

// 5. [45, 87, 96, 11, 63, -56, 71, 28];
function onlyPositive(Numbers){
    let tmpNumbers=[];
    for(let i=0; i<Numbers.length; i++){
        if (Numbers[i]< 0) break;
        else tmpNumbers.push(Numbers[i]);
    }
    return tmpNumbers;
}

console.log(onlyPositive(tmpName));
