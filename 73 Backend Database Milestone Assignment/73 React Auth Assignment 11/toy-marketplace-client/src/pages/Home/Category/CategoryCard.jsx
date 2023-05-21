import React from "react";
import { Link } from "react-router-dom";
import Rating from 'react-rating';

const CategoryCard = ({product}) => {
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
    <div data-aos="zoom-in" data-aos-duration="400" className="bg-white rounded-lg shadow p-4 border-[1px] border-[301755]">
      <img src={picture} className="aspect-[1/1] mb-4 w-full rounded-md" />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">Price: ${price}</p>
      {/* <p className="text-gray-600 mb-2">Rating: {rating}</p> */}
      <p className="text-gray-600 mb-2">Rating: {rating}
      
      <Rating
        emptySymbol={<span className="text-gray-300">☆</span>}
        fullSymbol={<span className="text-yellow-400">★</span>}
        fractions={2}
        initialRating={rating}
        readonly
      />
      </p>
      <p className="text-gray-600">Available Quantity: {availableQuantity}</p>
      <Link to={`products/details/${_id}`} className="btn border-0 bg-[#DB2458] hover:bg-[#a61c43] mt-4">View Details</Link>
    </div>
  );
};

export default CategoryCard;
