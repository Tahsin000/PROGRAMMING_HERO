const first = { a:2 };
const second = { a:2 };
const third = second;
// if(third === second) dd('they are same');
// else dd('deferent')

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

dd(firstString === secondString)








function dd (x, y){console.log(x, y)};