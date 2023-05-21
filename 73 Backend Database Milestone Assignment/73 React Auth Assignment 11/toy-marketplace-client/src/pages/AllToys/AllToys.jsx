import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";
import AllToysRow from "./AllToysRow";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { AuthContext } from "../../Providers/AuthProviders";

const AllToys = () => {
  const LoadedData = useLoaderData();
  const [products, setProducts] = useState(LoadedData)
  const {titleChange} = useContext(AuthContext);

  titleChange('All Toys')
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    const searchResult = LoadedData.filter(product => product.name.toUpperCase().includes(search.toUpperCase()));
    setProducts(searchResult);
  }

  return (
    <div className="py-20">
      <h2 data-aos="fade-up" data-aos-duration="500" className="md:text-5xl text-3xl font-bold mb-10 text-center text-[#301755]">
        TOYS {products.length}
      </h2>
      <form onSubmit={handleSearch} className="max-md:px-3 my-5 md:flex justify-end ">
        <div className="relative md:w-1/3">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            name="search"
            className="block w-full p-4 pl-10 text-sm border-[1px] rounded-lg bg-gray-50 focus:ring-[#DB2458] focus:border-[#DB2458]"
            placeholder="Search Toy Name..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-[#DB2458] hover:bg-[#b81644] focus:ring-4 focus:outline-none focus:ring-[#da0e48] font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>picture</th>
              <th>Toy NAME</th>
              <th>Seller</th>
              <th>Email</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <AllToysRow product={product} index={index} key={index} />
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {
             products.map((product, index) => <AllToysCard key={index} product={product} /> )
        }
      </div> */}
    </div>
  );
};

export default AllToys;
