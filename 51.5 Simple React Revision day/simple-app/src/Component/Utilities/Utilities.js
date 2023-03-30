
const addToCart = (id)=>{
    let shoppingCart = getShoppingCart();
    const quentity = shoppingCart[id];
    if (!quentity){
        shoppingCart[id] = 1;
    } else {
        shoppingCart[id] = quentity + 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const getShoppingCart = () =>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart){
        shoppingCart = JSON.parse(storedCart);
    } 
    return shoppingCart;
}
const removeLocalData = () =>{
    localStorage.clear();
    location.reload();
}
export {addToCart, getShoppingCart, removeLocalData} ;
