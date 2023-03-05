const first = 2; // 0           -> []   -> {a:1, b:2}
const second = '2'; // false    -> []   -> {a:1, b:2}
// always use === 
// equal comparison doesnt work for non-primitive
if(first == second){
    dd('value are equal')
} else {
    dd('values are not equal');
}
