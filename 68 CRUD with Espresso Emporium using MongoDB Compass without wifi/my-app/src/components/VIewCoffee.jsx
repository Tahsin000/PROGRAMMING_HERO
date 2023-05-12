import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";


const VIewCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;
    const navigate = useNavigate()

    return (
        <div className='h-screen  flex flex-col justify-center items-center'>
            <div className="card card-side bg-base-100 shadow-xl">
                <Link to="/" className='btn text-xl'> <FaAngleLeft></FaAngleLeft> </Link>
                <figure><img src={photo} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title font-normal"><span className="font-bold">Name:</span> {name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Taste: {taste}</p>
                        <p><small>{details}</small></p>
                </div>
            </div>
        </div>
    );
};

export default VIewCoffee;