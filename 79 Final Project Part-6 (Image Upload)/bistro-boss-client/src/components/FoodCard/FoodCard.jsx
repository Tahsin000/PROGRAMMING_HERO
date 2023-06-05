import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, category, price, _id } = item;

  const {user} = useContext(AuthContext);

  const [, refetch] = useCart();

  const nevigate = useNavigate();
  const location = useLocation();

  const FaShoppingCart = item =>{
    console.log(item);
    if(user && user.email){
      const cartItem = {MenuItemId: _id, name, image, price, email:user.email}
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers:{
          'content-type':'application/json' 
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch(); // refetch cart to update the number of items in the
          Swal.fire({
            icon: 'success',
            title: 'Food added on the card',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Please login to order the food',
        showConfirmButton: false,
        timer: 1500
      })
      nevigate("/login", {state: {from: location}})
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 absolute right-0 mr-4 mt-4 px-4 text-white rounded-lg text-xl font-semibold">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>FaShoppingCart(item)} className="btn btn-outline border-0 text-[#BB8506] bg-[#E8E8E8] border-[#BB8506] border-b-4 hover:border-[#000] hover:text-[#BB8506] hover:bg-black">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
