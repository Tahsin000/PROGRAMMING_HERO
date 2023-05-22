import React, { useEffect, useRef, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const searchRef = useRef();
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState();

  const [asc, setAsc] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);

  const handleInputChange =() =>{
    setSearch(searchRef.current.value);
  }

  return (
    <div className="my-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-500">Service</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable. {services.length}
        </p>

        <div className="py-10">
          <input
            type="text"
            ref={searchRef}
            onChange={handleInputChange}
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            onClick={handleInputChange}
            className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        <button className="btn btn-primary" onClick={() => setAsc(!asc)}>
          {asc ? "Price: High to to Low" : "Price: Low to High"}
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-24 gap-5 place-items-center">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
