// --------- Fibonacci Series ---------
// output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

var num = [0, 1], n = 10;
for(let i=1; i<n; i++){
  num[i+1] = (num[i] + num[i-1]);
}
for(let i=0; i<n; i++){
  console.log(num[i]);
}
