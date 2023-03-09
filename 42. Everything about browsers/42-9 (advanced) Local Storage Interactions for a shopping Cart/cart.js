const addProduct = ()=>{
    const productName = document.getElementById('product-name');
    const productQuentity = document.getElementById('product-quentity');
    const product = productName.value;
    const quentity = productQuentity.value;
    // setLocalStorage(product, quentity);
    saveLocalStorage(product, quentity);
    setUiList(product, quentity);
    // getLocalStorage();
    productName.value ='';productQuentity.value='';
    // console.log(product, quentity);
}

const setLocalStorage = (key, value)=>{
    localStorage.setItem(key, value);
}

const setUiList = (key, value)=>{
    const ol = document.getElementById('listItem');

    const li = document.createElement('li');
    li.innerHTML = `key: ${key}, value:${value}`;
    ol.appendChild(li);
}

const getStoredShoppingCard = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveLocalStorage = (product, quentity)=>{
    const cart = getStoredShoppingCard();
    cart[product] = quentity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem ('cart', cartStringified);
}

const displayLocalStorage = ()=>{
    const cart = getStoredShoppingCard();
    for(const product in cart){
        setUiList(product, cart[product]);
    }
}
displayLocalStorage();