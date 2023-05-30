import React from "react";

const Recommend = ({Rec}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="w-full">
        <img
          src={Rec.img}
          alt="Shoes"
          className="rounded-xl w-full aspect-[1/1]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{Rec.title}</h2>
        <p className="text-[0.75rem]">{Rec.subTitle}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-[#BB8506] border-b-4 hover:bg-[#BB8506] hover:border-[#BB8506]">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
