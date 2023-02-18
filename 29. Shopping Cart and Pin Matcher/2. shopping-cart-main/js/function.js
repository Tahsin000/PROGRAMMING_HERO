function cartPriceUpdate(){
    subtotal.innerText = parseInt(document.getElementById('casePrice').innerText) + parseInt(document.getElementById('mobilePrice').innerText);
    tex.innerText = (parseInt(document.getElementById('subtotal').innerText) * 0.05).toFixed(2);
    total.innerText = parseFloat(subtotal.innerText) + parseFloat(tex.innerText);
}

function isTargetZero(a, b, c){
    a.innerText = '00';
    b.value = '0';
    c.style.opacity = '0.65';
}

function addEvents(eventID, eventName, check){
    eventID.addEventListener(eventName, (event)=>{
        if (event.target.value == 0){
            if (check === 'caseInputValue'){
                isTargetZero(casePrice, eventID, caseImg)
                cartPriceUpdate();
            }
            else{
                isTargetZero(mobilePrice, mobileInputvalue, mobileImg);
                cartPriceUpdate();
            }
        }
        else{
            if (check === 'caseInputValue'){
                casePrice.innerText = caseProductPrice * event.target.value;
                caseImg.style.opacity = '1';
                cartPriceUpdate();
            }
            else{
                mobilePrice.innerText = productPrice * event.target.value;
                mobileImg.style.opacity = '1';
                cartPriceUpdate();
            }
        }
    });
}
function addEventchangePluse(changeingValue, check){
    if (check == 'mobileInputvalue'){
        changeingValue.value = parseInt(changeingValue.value) + 1;
        mobilePrice.innerText = productPrice * changeingValue.value;
    }
    else{
        changeingValue.value = parseInt(changeingValue.value) + 1;
        casePrice.innerText = caseProductPrice * changeingValue.value;
    }
}
function addEventchangeMinus(changeingValue, check){
    if (check == 'mobileInputvalue'){
        if (changeingValue.value > 0) {
            changeingValue.value = parseInt(changeingValue.value) - 1;
            
            if (changeingValue.value== 0)
                isTargetZero(mobilePrice, mobileInputvalue, mobileImg);
        }
        mobilePrice.innerText = productPrice * changeingValue.value;
    }
    else {
        if (changeingValue.value > 0) {
            changeingValue.value = parseInt(changeingValue.value) - 1;
            
            if (changeingValue.value== 0)
                isTargetZero(casePrice, caseInputValue, caseImg);
        }
        mobilePrice.innerText = productPrice * changeingValue.value;
    }
}