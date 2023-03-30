import React from 'react';
import { removeLocalData } from '../Utilities/Utilities';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let quentity = 0;

    for (const food of cart){
        food.quentity = food.quentity || 1;
        total += food.price * food.quentity;
        quentity += food.quentity;
        console.log(food);
    }

    const tax = (total * 7) / 100;
    const grandTotal = total + tax;

    return (
        <div>
             <div className="card">
                <div className="card-body">
                    <h4 className="text-center card-title">Order Summary</h4>
                    <h6 className="card-text">Selected Items: {quentity}</h6>
                    <h6>Total Price: ${total}</h6>
                    <h6>Tax: ${tax}</h6>
                    <h5>Grand Total: ${grandTotal}</h5>
                </div>
             <button onClick={()=>removeLocalData()}>Clear all</button>
             </div>
        </div>
    );
};

export default Cart;