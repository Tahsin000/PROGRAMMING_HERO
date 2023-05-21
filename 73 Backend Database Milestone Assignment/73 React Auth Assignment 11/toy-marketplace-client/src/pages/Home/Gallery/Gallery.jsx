import React from "react";
import img1 from '../../../assets/images/gallery/image1.png';
import img2 from '../../../assets/images/gallery/image2.png';
import img3 from '../../../assets/images/gallery/image3.png';
import img4 from '../../../assets/images/gallery/image4.png';
import img5 from '../../../assets/images/gallery/image5.png';
import img6 from '../../../assets/images/gallery/image6.png';
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" data-aos-duration="500" className="text-5xl font-bold text-[#301755] text-center mb-8 py-5">
          GALLERY
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center place-content-center">
          <span data-aos="zoom-out-right" data-aos-duration="400">
            <GalleryCard title="Action Figures" img={img1} /> 
          </span>
          <span data-aos="zoom-out-right" data-aos-duration="450">
            <GalleryCard title="Munchkin Figures" img={img2} />
          </span>
          <span data-aos="zoom-out-right" data-aos-duration="500">
            <GalleryCard title="Minions Figures" img={img3} />
          </span>
          <span data-aos="zoom-out-right" data-aos-duration="550">
            <GalleryCard title="Stuffed Animals" img={img4} />
          </span>
          <span data-aos="zoom-out-right" data-aos-duration="600">
            <GalleryCard title="Abacus Figures" img={img5} />
          </span>
          <span data-aos="zoom-out-right" data-aos-duration="650">
            <GalleryCard title="Building Blocks" img={img6} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
