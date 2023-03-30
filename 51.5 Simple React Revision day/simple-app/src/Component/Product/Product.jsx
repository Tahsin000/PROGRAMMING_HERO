import React from 'react';

const Product = (props) => {
    const {idMeal, strMeal, strMealThumb, price} = props.foods;
    const eventHandler = props.eventHandler;
    return (
        <div>
            <div className="col">
            <div className="card">
                <img src={strMealThumb} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, autem.</p>
                    <h4>Price: ${price}</h4>
                    <button onClick={()=>{eventHandler(props.foods)}} className='mt-3'>Add to Cart </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Product;