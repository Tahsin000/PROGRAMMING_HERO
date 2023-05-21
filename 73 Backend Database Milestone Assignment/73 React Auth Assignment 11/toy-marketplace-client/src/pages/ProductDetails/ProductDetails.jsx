import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ProductDetails = () => {
  const loadedData = useLoaderData();

  const [product, setProduct] = useState(loadedData);
  const {
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
    <div className="md:p-20 p-5">
      {/* Picture */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="mb-4">
          <img data-aos="fade-right" data-aos-duration="400"
            src={picture}
            alt="Profile Picture"
            className="rounded-lg aspect-[1/1] md:w-2/3 mr-4 shadow-md"
          />
        </div>

        <div data-aos="fade-left" data-aos-duration="400" className="grid md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <h2 className="text-5xl font-bold py-3">{name}</h2>
          </div>
          <div className="col-span-2">
            <p className="text-gray-500">{sellerName}</p>
          </div>
          <div>
            <p className="font-bold">Seller Email:</p>
            <p>{sellerEmail}</p>
          </div>
          <div>
            <p className="font-bold">Price:</p>
            <p>{price} $</p>
          </div>
          <div>
            <p className="font-bold">Rating:</p>
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
          </div>
          <div>
            <p className="font-bold">Available Quantity:</p>
            <p>{availableQuantity}x</p>
          </div>
          <div className="col-span-2">
            <p className="font-bold">Detail Description:</p>
            <p>{detailDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
