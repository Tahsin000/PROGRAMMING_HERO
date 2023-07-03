import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useCard from "../../../hooks/useCard";
import useCheckUser from "../../../hooks/useCheckUser";

const Class = ({ classItem }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const [userChecker] = useCheckUser();
  // const {classImage, className, instructor, availableSeats, price } = classItem;
  const { user } = useAuth();
  const [ card , refetch] = useCard();
  const[disable, setDisable] = useState(false)
  const { _id, image, instructorName, availableSeats, price, name } = classItem;

  
  // const [, refetch] = useCard();

  const handleSelect = (classItem) => {
    if (user && user.email){
      const cartItem = {classItemId: _id, name, image, price, email:user.email, instructorName, availableSeats}
      
      setDisable(true);
    console.log(cartItem);
    axios.post(`https://summer-camp-server-ten-iota.vercel.app/carts`, cartItem, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        if (data.insertedId) {
          refetch(); // refetch cart to update the number of items in the
          Swal.fire({
            icon: 'success',
            title: 'Class added on the card',
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    } else {
      navigate("/login", {state: {from: location}})
    }
    
    // Handle course selection logic here
  };
  return (
    <div className={`bg-white rounded-lg shadow-lg p-5 ${availableSeats == 0 ? 'opacity-30' : ''}`}>
      <div className="grid md:grid-cols-2 gap-5">
        <img
          src={image}
          alt={image}
          className="md:h-full object-cover mb-4 rounded-md"
        />
        <div className="flex flex-col max-md:justify-center justify-end">
          <h3 className="font-semibold mb-2 text-3xl">{name}</h3>
          <p className="text-gray-600 mb-2 text-xl">{instructorName}</p>
          <p className="text-gray-600 mb-2">
            Available Seats: {availableSeats}
          </p>
          <p className="text-gray-600 mb-2">Price: ${price}</p>
          <button 
          disabled={userChecker === "admin" || userChecker === "instructor" || availableSeats == 0 || disable || card.find(item => item.classItemId === _id)}
          className="btn-secondary" onClick={() => handleSelect(classItem)}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class;
