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
        const newQuentity = parseInt(quentity) + 1;
        shoppingCart[id] = newQuentity;
    } else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

export {addtoDB};