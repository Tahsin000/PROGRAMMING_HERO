import React from "react";
import img1 from '../../../assets/images/special_offer/offer (1).png';
import img2 from '../../../assets/images/special_offer/offer (2).png';
import img3 from '../../../assets/images/special_offer/offer (3).png';

const SpecialOffers = () => {
  const specialOffersData = [
    {
      picture: img1,
      name: "RoboBot",
      price: 10,
      rating: 4.5,
      availableQuantity: 10,
    },
    {
      picture: img2,
      name: "Super Speed Racer",
      price: 15,
      rating: 4.2,
      availableQuantity: 8,
    },
    {
      picture: img3,
      name: "Adventure Explorer",
      price: 15,
      rating: 4.2,
      availableQuantity: 8,
    },
    // Add more special offer data here...
  ];

  return (
    <div className=" py-20">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" data-aos-duration="500" className="md:text-5xl text-3xl font-bold mb-7 text-center text-[#301755] py-5">SPECIAL OFFERS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {specialOffersData.map((offer, index) => (
            <div data-aos="zoom-in-right" data-aos-duration="300" key={index} className="bg-white rounded-lg shadow p-4 border-[1px] border-[301755]">
              <img src={offer.picture} alt={offer.name} className="mb-4 w-full rounded-md" />
              <h3 className="text-xl font-bold mb-2">{offer.name}</h3>
              <p className="text-gray-600 mb-2">Price: ${offer.price}</p>
              <p className="text-gray-600 mb-2">Rating: {offer.rating}</p>
              <p className="text-gray-600">
                Available Quantity: {offer.availableQuantity}
              </p>
              {/* <button className="btn btn-secondary mt-4">View Details</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
