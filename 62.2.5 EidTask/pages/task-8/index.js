/*
Programming Hero
Conditions
1. You can't check it into VS code/ browser terminal
2. You can't take direct help from anyone/ anything
3. You can follow related blog / tutorial

*/ 
function checkValue(value) {
return (value && typeof value !== "undefined") ? console.log("defined") : (value === null)
        ? console.log("null")
        : console.log("undefined");
}

checkValue(null);
checkValue(undefined); checkValue(0);
checkValue(1);
checkValue("hello");

/*
        output
=====================
null
undefined
undefined
defined  
defined 

The given code defines a function called checkValue that takes in a parameter called value. It checks if the value is defined or not and if it's null or not. Based on the result, it logs either "defined", "null", or "undefined" using console.log. The function is called with different arguments to test its functionality.

*/ 