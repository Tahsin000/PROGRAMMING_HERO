import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useCard from "../../../../hooks/useCard";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";



import { MdDeleteOutline } from "react-icons/md";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  
  const [card, refetch] = useCard();
  const { user } = useAuth();
  const total = card.reduce((sum, item) => parseFloat(item.price) + sum, 0);

  const handleDelete = (_id) => {
    console.log(_id);


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-ten-iota.vercel.app/carts/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0 ){
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: 'Class has been deleted successfully',
                  icon: "success",
                  timer: 1500,
                })
            }
        })
        
      }
    })
  }

  // const filterCard = card.filter(singleCard => singleCard.email === user?.email)

  return (
    <div>
      <div className="relative w-full">
            <SectionTitle className="" title="Selected Classes" />
        </div>
        <Helmet>
        <title>Selected Classes | Inkwell Studio</title>
      </Helmet>
      <div className="grid grid-cols-1 w-full place-items-end ">
        <div className="p-5 shadow-lg rounded-lg grid grid-cols-1 place-items-end gap-2">
          
          <h3 className="text-dm p-1 border rounded-lg border-[gray]">Classes : {card.length}</h3>
            <h3 className="text-lg p-1 border rounded-lg border-[gray]">Total : $ {parseFloat(total).toFixed(2)}</h3>
          <Link className="" to="/dashboard/payment" >
            <button className="btn btn-sm bg-primary text-[#fff]">Pay</button>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class / Instructor</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              // card.map((cardItem, index) => <SelectedClass refetch={refetch} cardItem={cardItem} key={index} index={index}/>)

card.map((cardItem, index)=>  <tr key={index}>
<td>{index + 1}</td>
<td>
  <div className="flex items-center space-x-3">
    <img className='mask mask-squircle w-12 h-12'
      src={cardItem.image}
      alt="Avatar Tailwind CSS Component"
    />
  </div>
</td>
<td>
  <p className="font-semibold">{cardItem?.name}</p>
  <p className="text-sm opacity-[75%]">{cardItem?.instructorName}</p>
</td>
<td>{cardItem?.availableSeats}</td>
<td className='text-right'>$ {cardItem?.price}</td>
<td className="flex gap-2">
  <div onClick={()=>handleDelete(cardItem?._id)} className="btn btn-sm rounded-full text-[1.25rem] bg-primary text-[#fff]"> <MdDeleteOutline /> </div>
</td>
</tr>)
   
            }

            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
