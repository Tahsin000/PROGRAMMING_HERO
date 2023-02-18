const casePriceClear = document.getElementById('casePriceClear');
const casePrice = document.getElementById('casePrice');
const caseInputValue = document.getElementById('caseInputValur');
const caseImg = document.getElementById('caseImg');
const caseProductPrice = 59;
const subtotal = document.getElementById('subtotal');
const tex = document.getElementById('tex');
const total = document.getElementById('total');
const caseMinus = document.getElementById('caseMinus');
const casePlus = document.getElementById('casePlus');

casePriceClear.addEventListener('click', ()=>{
    isTargetZero(casePrice, caseInputValue, caseImg)
    cartPriceUpdate();
});

addEvents(caseInputValue, 'click', 'caseInputValue');
addEvents(caseInputValue, 'keyup', 'caseInputValue');


casePlus.addEventListener('click', ()=>{
    addEventchangePluse(caseInputValue, 'caseInputValue');
    caseImg.style.opacity = '1';
    cartPriceUpdate();
});
caseMinus.addEventListener('click', (event)=>{
    addEventchangeMinus(caseInputValue, 'caseInputValue');
    if (!(event.target.value)){
        cartPriceUpdate();
    }

});

// caseInputValue.addEventListener('click', (event)=>{
//     if (event.target.value == 0){
//         isTargetZero(casePrice, caseInputValue, caseImg)
//         cartPriceUpdate();
//     }
//     else{
//         casePrice.innerText = caseProductPrice * event.target.value;
//         caseImg.style.opacity = '1';
//         cartPriceUpdate();
//     }
// });

// caseInputValue.addEventListener('keyup', (event)=>{
//     if (event.target.value == 0){
//         isTargetZero(casePrice, caseInputValue, caseImg)
//         cartPriceUpdate();
//     }
//     else{
//         casePrice.innerText = caseProductPrice * event.target.value;
//         caseImg.style.opacity = '1';
//         cartPriceUpdate();
//     }
// });
