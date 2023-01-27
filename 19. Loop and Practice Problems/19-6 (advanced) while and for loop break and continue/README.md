# **(advanced) while and for loop break and continuePreviousNext**

### break.js

```jsx
for (let i=0; i<=20; i++){
    console.log(i);
    if (i >= 10) break; 
}

var roastGiven = 0;
while(roastGiven < 10){
    console.log('Roast Den, gift item ansi');
    if (roastGiven > 4) break;
    roastGiven++;
}

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98]
for(let i = 0; i<numbers.length; i++){
    if (numbers[i] > 100) break;
    console.log(numbers[i]);
}
```

### continue.js

```jsx
for (let i=0; i<=20; i++){
    console.log(i);
    if (i >= 10) continue; 
}

var roastGiven = 0;
while(roastGiven < 10){
    console.log('Roast Den, gift item ansi');
    if (roastGiven > 4) continue;
    roastGiven++;
}

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98]
for(let i = 0; i<numbers.length; i++){
    if (numbers[i] > 100) continue;
    console.log(numbers[i]);
}

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98]
for(let i = 0; i<numbers.length; i++){
    if (numbers[i] > 100) continue;
    console.log(numbers[i]);
}
```