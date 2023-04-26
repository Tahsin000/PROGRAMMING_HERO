/*
Programming Hero
Conditions
1. You can't check it into VS code/ browser terminal
2. You can't take direct help from anyone/ anything
3. You can follow JS promise related blog / tutorial

========================================
        Snippet-1
*/
console.log('start');
const promisel = new Promise((resolve, reject) => { console.log(1)
})
promisel.then(res => { console.log(2) })
console.log('end');
/*
=========================================
        Snippet-2
=========================================
console.log('start');
const promisel = new Promise((resolve, reject) => { console.log(1) resolve()
})
promisel.then(res => { console.log(2) })
console.log('end');
*/ 