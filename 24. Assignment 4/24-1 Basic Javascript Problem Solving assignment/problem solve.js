
/*
_______________________________________________________

    ----- problem-1 statement -----
    3. diye goon
    10. jog korba
    2 diye vaag
    seta theke 5 biyog korba
*/
function mindGame(num){
    return (typeof num === 'number') ? (((num * 3) + 10) / 2) - 5 : 'please provide all valid number'; 
}



/*
_______________________________________________________
----- problem-2 statement -----
    string input hisebe niba
    'even'
    'odd'
    'phero'
    'jack ma'
*/
function evenodd(s){
    return (typeof s === 'string') ? (s.length % 2) ? 'odd' : 'even' : 'please provide all valid number';
}



/*
_______________________________________________________
----- problem-3 statement -----

    input --> songkha
    ans = 7 biyog korba
    if (ans < 7) return ans
    else return (ans * 2);

*/
function isLGSeven (num){
    return (typeof num === 'number') ? ((num - 7) < 7) ? (num - 7) : ((num - 7) * 2): 'please provide all valid number';
}



/*
_______________________________________________________
----- problem-4 statement -----
    age er numbers array ke input hisebe niba
    [1, 45, 13] --> 0 
    [ 12, -2, 0, -15, -11] --> 3
    [-14, -4, -5, 12, 16, 19, -2, -1] --> 5
*/
function findingBadData (age){
    let countBadData = 0;
    for(let i in age){
        (age[i] < 0) ? countBadData++ : 0;
    }
    return (Array.isArray(age)) ? countBadData : 'please provide all valid number';
}


/*
----- problem-5 statement -----
    a *= 21;
    b *= 32;
    c *= 43;
    totalDiamond = a + b + c;
    if (totalDiamond > 2000) return (totalDiamond -= 2000);
    else return (totalDiamond);
*/
function gemsToDiamond(a, b, c){
    let check = ((typeof a === 'number') && (typeof b === 'number') && (typeof c === 'number'));
    a *= 21;
    b *= 32; 
    c *= 43; 
    totalDiamond = a + b + c;
    return (check) ? (totalDiamond > 2000) ? totalDiamond-2000 : totalDiamond: 'please provide all valid number';
}

console.log(gemsToDiamond(100, 5, 1));
