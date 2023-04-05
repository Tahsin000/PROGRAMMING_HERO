import { getShoppingCart } from "../utilities/fakedb";

const CartProducesLoader = async() =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, you have to use async await

    const storedCart = getShoppingCart();
    const saveCart = [];

    console.log(storedCart);
    for(const id in storedCart){
        const addProduct = products.find(pd=> pd.id === id);
        if (addProduct){
            const quantity = storedCart[id];
            addProduct.quantity = quantity;
            saveCart.push(addProduct);
        }
    }
    // console.log(products);
    return saveCart;
}

export default CartProducesLoader; 