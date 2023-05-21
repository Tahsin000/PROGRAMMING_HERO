import React from "react";
import { Link } from "react-router-dom";

const AllToysCard = ({ product }) => {
  const {
    _id,
    picture,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    detailDescription,
  } = product;
  return (
    <div className="bg-white rounded-lg shadow p-4 border-[1px] border-[301755]">
      <img src={picture} className="mb-4 w-full rounded-md" />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">Price: ${price}</p>
      <p className="text-gray-600 mb-2">Rating: {rating}</p>
      <p className="text-gray-600">Available Quantity: {availableQuantity}</p>
      <Link to={`/products/details/${_id}`} className="btn btn-secondary mt-4">View Details</Link>
    </div>
  );
};

export default AllToysCard;
