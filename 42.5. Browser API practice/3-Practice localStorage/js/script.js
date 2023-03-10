const getElementID = (id) =>{
    return document.getElementById(id);
}
const singleNameSave=()=>{
    const userInputName = getElementID('userInputName').value;
    localStorage.setItem('name', userInputName);
    getElementID('userInputName').value= '';
}
const singleNameDelete=()=>{
    const userInputName = getElementID('userInputName').value;
    (localStorage.getItem('name') === userInputName) ? localStorage.removeItem('name'): 1 ;
    // console.log(localStorage.getItem('name') === userInputName);
    getElementID('userInputName').value= '';
}
const singleEmailSave=()=>{
    const userInputEmail = getElementID('userInputEmail').value;
    localStorage.setItem('email', userInputEmail);
    getElementID('userInputEmail').value= '';
}
const singleEmailDelete=()=>{
    const userInputEmail = getElementID('userInputEmail').value;
    (localStorage.getItem('email') === userInputEmail) ? localStorage.removeItem('name'): 1 ;
    // console.log(localStorage.getItem('name') === userInputEmail);
    getElementID('userInputEmail').value= '';
}
const singleMsgSave =()=>{
    const userInputMsg = getElementID('userInputMsg').value;
    localStorage.setItem('message', userInputMsg);
    getElementID('userInputMsg').value= '';
}
const singleMsgDelete=()=>{
    const userInputMsg = getElementID('userInputMsg').value;
    (localStorage.getItem('message') === userInputMsg) ? localStorage.removeItem('name'): 1 ;
    // console.log(localStorage.getItem('name') === userInputMsg);
    getElementID('userInputMsg').value= '';
}
const getCartinfo = () =>{
    let cart = {};
    if (localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    return cart;
}
const AllSave = () =>{
    const cart = getCartinfo();
    const userName = getElementID('userInputName').value;
    const userEmail = getElementID('userInputEmail').value;
    const userMsg = getElementID('userInputMsg').value;
    cart.name = userName;
    cart.email = userEmail;
    cart.msg = userMsg;
    const convertObjToString = JSON.stringify(cart);
    console.log(convertObjToString);
    localStorage.setItem('cart',convertObjToString);
}
const showAllInfo = () =>{
    const cart = getCartinfo();
    if (Object.keys(cart).length){
        getElementID('userInputName').value = cart.name;
        getElementID('userInputEmail').value = cart.email;
        getElementID('userInputMsg').value = cart.msg;
    }
}
const AllClear=()=>{
    getElementID('userInputName').value ='';
    getElementID('userInputEmail').value ='';
    getElementID('userInputMsg').value ='';
    localStorage.clear();
}
showAllInfo();