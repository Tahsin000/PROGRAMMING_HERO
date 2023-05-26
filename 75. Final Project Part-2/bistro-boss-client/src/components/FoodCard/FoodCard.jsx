import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, category, price } = item;

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
          <button className="btn btn-outline border-0 text-[#BB8506] bg-[#E8E8E8] border-[#BB8506] border-b-4 hover:border-[#000] hover:text-[#BB8506] hover:bg-black">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
