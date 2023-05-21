import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const AddToys = () => {
  const navigate = useNavigate();

  const {user, titleChange} = useContext(AuthContext);
  
  titleChange('Add Toys');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const picture = form.picture.value;
    const toyname = form.toyname.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.category.value;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const rating = form.rating.value;
    const detailDescription = form.detailDescription.value;
    const user = {
      picture:picture,
      name:toyname,
      sellerName:sellerName,
      sellerEmail:sellerEmail,
      category:category,
      price:price,
      rating:rating,
      availableQuantity:availableQuantity,
      detailDescription:detailDescription,
    };
    console.log(user);

    fetch(`https://toy-house-ten.vercel.app/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "You clicked the button!", "success");
          form.reset();
        }
      });
  };
  return (
    <div className="md:py-10 max-md:p-5 mb-16">
      <h2 className="text-5xl text-center font-bold mb-4 py-5 text-[#301755]">
        ADD TOY
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="mb-4">
            <label htmlFor="pictureURL" className="font-bold">
              Toy Picture URL:
            </label>
            <input
              type="text"
              name="picture"
              className="w-full input px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DB2458]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="font-bold">
              Toy Name:
            </label>
            <input
              type="text"
              name="toyname"
              className="input w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DB2458]"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="mb-4">
            <label htmlFor="sellerName" className="font-bold">
              Seller Name:
            </label>
            <input
              type="text"
              value={user?.displayName}
              name="sellerName"
              className="input w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DB2458]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sellerEmail" className="font-bold">
              Seller Email:
            </label>
            <input
              value={user?.email}
              type="email"
              name="sellerEmail"
              className="input w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DB2458]"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="mb-4">
            <label htmlFor="category" className="font-bold">
              Category:
            </label>
            <select
              name="category"
              className="input w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DB2458]"
              required
            >
              <option disabled selected>Select an option</option>
              <option className="" value="Educational Toys">Educational Toys</option>
              <option className="" value="Outdoor Toys">Outdoor Toys</option>
              <option className="" value="Imaginative Toys">Imaginative Toys</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="font-bold">
              Price:
            </label>
            <input
              type="number"
              name="price"
              className="input w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DB2458]"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="mb-4">
            <label htmlFor="rating" className="font-bold">
              Rating:
            </label>
            <input
              type="text"
              name="rating"
              className="input w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DB2458]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="availableQuantity" className="font-bold">
              Available Quantity:
            </label>
            <input
              type="text"
              name="availableQuantity"
              className="input w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DB2458]"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="detailDescription" className="font-bold">
            Detail Description:
          </label>
          <textarea
            name="detailDescription"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DB2458]"
            required
          />
        </div>
        <div className="flex justify-center py-4">
          <button
            type="submit"
            className="btn border-0 bg-[#DB2458] hover:bg-[#a61c43] text-white py-2 px-4 rounded w-1/3"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
