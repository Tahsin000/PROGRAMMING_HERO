const mobilePriceClear = document.getElementById('mobilePriceClear');
const mobilePrice = document.getElementById('mobilePrice');
const mobileInputvalue = document.getElementById('mobileInputvalue');
const mobileImg = document.getElementById('mobileImg');
const mobilePlus = document.getElementById('mobilePlus');
const mobileMinus = document.getElementById('mobileMinus');
const productPrice = 1219;
mobilePriceClear.addEventListener('click',()=>{
    isTargetZero(mobilePrice, mobileInputvalue, mobileImg);
    cartPriceUpdate();
});
addEvents(mobileInputvalue, 'click', 'mobileInputvalue')
addEvents(mobileInputvalue, 'keyup', 'mobileInputvalue')

mobilePlus.addEventListener('click', (event)=>{
    addEventchangePluse(mobileInputvalue, 'mobileInputvalue');
    mobileImg.style.opacity = '1';
    cartPriceUpdate();
});
mobileMinus.addEventListener('click', (event)=>{
    addEventchangeMinus(mobileInputvalue, 'mobileInputvalue');
    if (!(event.target.value)){
        cartPriceUpdate();
    }

});

// mobileInputvalue.addEventListener('click',(event)=>{

//     console.log(event.target.value);
//     if (event.target.value == 0){
//         isTargetZero(mobilePrice, mobileInputvalue, mobileImg);
//         cartPriceUpdate();
//     }
//     else{
//         mobilePrice.innerText = productPrice * event.target.value;
//         mobileImg.style.opacity = '1';
//         cartPriceUpdate();
//     }
// });
// mobileInputvalue.addEventListener('keyup',(event)=>{

//     console.log(event.target.value);
//     if (event.target.value == 0){
//         isTargetZero(mobilePrice, mobileInputvalue, mobileImg);
//         cartPriceUpdate();
//     }
//     else{
//         mobilePrice.innerText = productPrice * event.target.value;
//         mobileImg.style.opacity = '1';
//         cartPriceUpdate();
//     }
// });

