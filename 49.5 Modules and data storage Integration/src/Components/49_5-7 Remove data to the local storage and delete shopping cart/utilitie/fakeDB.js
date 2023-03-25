const addtoDB = (id)=>{
    let shoppingCart;
    const shoredCart = localStorage.getItem('shopping-cart');
    if(shoredCart){
        shoppingCart = JSON.parse(shoredCart);
    } else {
        shoppingCart={};
    }

    const quentity = shoppingCart[id];
    if (quentity){
        const newQuentity = quentity + 1;
        shoppingCart[id] = newQuentity;
    } else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
const removeFromDB = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}
const DeletShoppingCart = ()=>{
    localStorage.removeItem('shopping-cart');
}

export {addtoDB, removeFromDB, DeletShoppingCart};