// ---------- slice ----------
const friends = [13, 14, 15, 16, 17, 18, 20];
var partial = friends.slice(2, 5);
console.log(partial);

// ---------- splice ----------
// Removes elements from an array
// and, if necessary, inserts new elements in their place,
// returning the deleted elements.
// will change the original array

partial = friends.splice(2, 3, 99, 55, 77);
console.log(partial);
console.log(friends);