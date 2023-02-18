function getPin(){
    const pin = generatePin();
    const pinString = pin +'';
    if (pinString.length === 4){
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', ()=>{
    document.getElementById('display-pin').value = getPin();
});
document.getElementById('calculator').addEventListener('click', (event)=>{
    const num = event.target.innerText;
    const display = document.getElementById('display-type');
    if (isNaN(num)){
        console.log(num);
        if (num === 'C')
            display.value = '';
        else if (num === '<'){
            let value = display.value;
            value = value.substring(0,value.length-1);
            // console.log(value);
            display.value = value;
        }
    }
    else {
       display.value += num;
    }
});