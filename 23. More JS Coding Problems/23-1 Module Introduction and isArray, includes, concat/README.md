# **Module Introduction and isArray, includes, concatPreviousNext**

```jsx
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id: 121,
    class: 11,
    name: 'Agun',
};
const friends = [13, 14, 15, 16, 17, 18, 20];
function add(num1, num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(Array.isArray(friends));
console.log(typeof add);
// ------------------------------
console.log(friends.includes(20))

// ---------- concat ----------
const newFriendAge = [12, 13, 14, 15, 16];
const allFriends = newFriendAge.concat(friends);
console.log(allFriends);
```