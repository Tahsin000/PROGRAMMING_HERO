console.log(document.getElementById('baba').innerHTML);
console.log(document.getElementById('Fruits').innerHTML);
console.log(document.getElementById('Places').innerHTML);

const Important = document.getElementsByClassName('important')
for(let place of Important){
    console.log(place.innerText);
}
const someLi = document.querySelectorAll('ul li');
for(let i of someLi){
    console.log(i.innerText);
}
// option-1: getElementsByTagName

// option-2: getElementById

// option-3: getElementsByClassName
