import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="py-20">
      <div className=" Featured-item bg-fixed text-white ">
        <SectionTitle
          heading={"Featured Item"}
          subHeading={"---Check it out---"}
        />
        <div className="md:flex justify-center items-center py-20 px-36 pt-12 gap-10">
          <div>
            <img className="rounded-lg shadow-md" src={featured} alt="" />
          </div>
          <div>
            <p>Aug 20, 2029</p>
            <p className="uppercase">where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              optio! Iusto rem explicabo quaerat placeat laudantium, at earum
              quas doloribus perspiciatis reprehenderit vitae eveniet corporis
              fugiat recusandae aut odio laboriosam, natus amet! Fugit maxime
              natus nesciunt consectetur aspernatur nostrum amet cumque, vel
              nemo, optio repellendus delectus beatae sunt! Ratione, neque?
            </p>
            <button className="btn btn-outline border-0 border-b-4 border-white text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
