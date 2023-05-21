import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user, setLoading, titleChange } = useContext(AuthContext);

  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  //   const navigate = useNavigate();
  const RowItems = (
    <>
      <br />
      <br />
      <br />
      <br />
    </>
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://toy-house-ten.vercel.app/my_products/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);

  //   const {
  //     _id,
  //     picture,
  //     name,
  //     sellerName,
  //     sellerEmail,
  //     price,
  //     rating,
  //     availableQuantity,
  //     detailDescription,
  //   } = product;

  titleChange('My Toys')

  const handleSort = e => {
    e.preventDefault();
    const sort = e.target.value;
    console.log(sort);
    
    const sortedToys = [...products].sort((a, b) => {
      if (sort === 'Low') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    })
    console.log(sortedToys)
    setProducts(sortedToys);

    // const searchResult = LoadedData.filter(product => product.name.toUpperCase().includes(search.toUpperCase()));
    // setProducts(searchResult);
  }
  return (
    <div className="py-20">
      <h2 data-aos="fade-up" data-aos-duration="500" className="md:text-5xl text-3xl font-bold mb-10 text-center text-[#301755]">
        YOUR TOYS: {products.length}
      </h2>
      <form className="py-5 flex justify-end max-md:px-3">
        <select
          onChange={handleSort}
          name="sort"
          className="px-2 py-1 border border-gray-300 rounded"
        >
          <option value="">Select an option</option>
          <option value="Low">{`Low > High`}</option>
          <option value="High">{`Low < High`}</option>
        </select>
      </form>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>picture</th>
              <th>Toy ID</th>
              <th>Toy NAME</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <MyToysRow
                product={product}
                products={products}
                setProducts={setProducts}
                key={index}
                index={index}
              />
            ))}
            {products.length < 5 && [...Array(5)].map((e, i) => RowItems)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
