const fun = (friends) => {
    const arr=[];
    for(const friend of friends){
        if (friend.length % 2 == 0){
            arr.push(friend)
        }
    }
    return arr;
}
const friends = ['sakib', 'rafi', 'ifti', 'Rahat', 'tahsin', 'jibon', 'jumman', 'miskat', 'jubair', 'nimure'];
const result = fun(friends);
console.log(result);