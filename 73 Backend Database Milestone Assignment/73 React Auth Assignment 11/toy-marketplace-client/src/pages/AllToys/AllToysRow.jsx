import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit, FaTrashAlt, FaStar, FaDollarSign } from "react-icons/fa";
import Rating from "react-rating";

const AllToysRow = ({ product, index }) => {
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
    <tr data-aos="fade-up" data-aos-duration={(index * 1000) % 100}>
      <td>
        <div className="mask mask-squircle w-20 h-12">
          <img src={picture} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{price} $</td>
      <td>
        <p className="flex items-center gap-2">
          {rating}

          
          <Rating
            emptySymbol={<span className="text-gray-300">☆</span>}
            fullSymbol={<span className="text-yellow-400">★</span>}
            fractions={2}
            initialRating={rating}
            readonly
          />
        </p>
      </td>
      <td>{availableQuantity} x</td>
      <th>
        <Link
          to={`/products/details/${_id}`}
          className="btn border-0 font-normal text-white bg-[#422075] hover:bg-[#1a0a34] btn-sm"
        >
          details
        </Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
