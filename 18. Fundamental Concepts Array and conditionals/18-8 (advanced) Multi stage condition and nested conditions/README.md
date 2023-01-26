# Multi stage condition and nested conditions

## multiple-stage-conditions.js

```jsx
var money = 100;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money){
    console.log('Dan Dan danish khamu')
}
else if(butterBread < money){
    console.log('Butter bon khamu');
}
else if (toastBiscuit < money){
    console.log('chubai chubai toast biscuit khamu');
}
else{
    console.log('khali cha e sasther jonno valo');
}
```

## math.js

```jsx
var math = true;
var geometry = true;
var straightLine = true;
if (math == true){
    if (geometry == true){
        if (straightLine == true){

        }else{
            console.log('baka pothe cholba na')
        }
    }
    else{
        console.log('pithagorous hoite parba na');
    }
}
else{

}
```