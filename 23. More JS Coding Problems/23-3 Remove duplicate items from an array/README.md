# Remove duplicate items from an array

```jsx
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babu', 'dabul', 'abul'];

function removeDuplicate(names){
    const unique = [];
    var n = names.length;
    for(let i=0; i<n; i++){
        if (!(unique.includes(names[i]))) unique.push(names[i]);
    }
    return unique;
}
console.log(removeDuplicate(names));
```