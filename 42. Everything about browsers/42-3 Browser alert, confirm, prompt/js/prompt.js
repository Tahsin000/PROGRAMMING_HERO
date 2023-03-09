const showAlert = ()=>{
    alert('Hello world');
}

const lendMoney = ()=>{
    const result = confirm('will you lend me 500 taka');
    console.log(result);
    if (result === true){
        alert('Tui amar jan er dosto!!!');
    } else {
        alert('DGN...toke ajke e block maira dimu');
    }
}
const getInfo = ()=>{
    const name = prompt('Tell me your name ??');
    if (name === null) alert('name na dile kam nai');
    else alert(`your name is ${name}`);
}