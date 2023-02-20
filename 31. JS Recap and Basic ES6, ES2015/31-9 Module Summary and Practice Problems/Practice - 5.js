const fun = (nums) => {
    let sum = 0;
    for(const num of nums){
        sum += Math.pow(num, 2);
    }
    return (sum / nums.length);
}
const nums = [2, 3, 4, 5, 6];
const result = fun(nums).toFixed(2);

console.log(result);
