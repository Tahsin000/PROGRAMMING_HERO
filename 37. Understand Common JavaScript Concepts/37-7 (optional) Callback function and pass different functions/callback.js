function greeting (greetingHandler, name){
    greetingHandler(name);
}
// const name = 'halim mama'
// const numbers = [12, 23, 34, 45, 56];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('good morning', name);
}
function greetingEvening(name){
    console.log('good evening', name);
}

greeting (greetingHandler, 'Tahsin');
greeting (greetingEvening, 'Abrar');