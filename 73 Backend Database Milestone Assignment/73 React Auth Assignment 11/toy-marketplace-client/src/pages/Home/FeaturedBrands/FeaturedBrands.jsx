import React from "react";
import img1 from '../../../assets/images/featured_brands/featured_brands (1).png'
import img2 from '../../../assets/images/featured_brands/featured_brands (2).png'
import img3 from '../../../assets/images/featured_brands/featured_brands (3).png'
import img4 from '../../../assets/images/featured_brands/featured_brands (4).png'

const FeaturedBrands = () => {
  return (
    <section className="py-20">
      <h2 data-aos="fade-up" data-aos-duration="500" className="md:text-5xl text-3xl font-semibold mb-7 text-center py-5">FEATURED BRANDS</h2>
      <div className="grid grid-cols-4 gap-5 place-content-center place-items-center">
        <div data-aos="fade-up" data-aos-duration="400" className="bg-white p-4 shadow-md md:w-40 rounded-md">
          <img src={img1} alt="Brand 1" className="w-full" />
        </div>
        <div data-aos="fade-up" data-aos-duration="600" className="bg-white p-4 shadow-md md:w-40 rounded-md">
          <img src={img2} alt="Brand 2" className="w-full" />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" className="bg-white p-4 shadow-md md:w-40 rounded-md">
          <img src={img3} alt="Brand 3" className="w-full" />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="bg-white p-4 shadow-md md:w-40 rounded-md">
          <img src={img4} alt="Brand 4" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
