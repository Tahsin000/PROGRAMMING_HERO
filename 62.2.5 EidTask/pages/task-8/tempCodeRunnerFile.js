ole.log('start');
const promisel = new Promise((resolve, reject) => { console.log(1) resolve()
})
promisel.then(res => { console.log(2) })
consol