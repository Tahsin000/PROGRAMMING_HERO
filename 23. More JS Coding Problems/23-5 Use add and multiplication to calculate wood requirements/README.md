# **Use add and multiplication to calculate wood requirementsPreviousNext**

```jsx
/*
    fixed: per item wood requirements
    1. chair -->    3 cft
    2. table -->    10 cft
    3. bed -->      50 cft

    vary: quantity
*/ 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const preChairWood = 3;
    const preTableWood = 10;
    const preBedWood = 50;

    const chairWood = preChairWood * chairQuantity;
    const tableWood = preTableWood * tableQuantity;
    const bedWood = preBedWood * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(0, 2, 1);
console.log(totalWood);
```