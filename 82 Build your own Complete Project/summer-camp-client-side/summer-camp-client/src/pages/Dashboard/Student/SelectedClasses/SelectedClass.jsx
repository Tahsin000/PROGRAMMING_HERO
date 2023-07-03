import React from 'react';

import axios from 'axios';
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from 'sweetalert2';

const SelectedClass = ({cardItem, index, refetch}) => {
  
  // const [, refetch] = useCard();

    const {_id, image , name, email, price, instructorName, availableSeats}  = cardItem;
    const handleDelete = (_id) => {
      console.log(_id);

      axios
        .delete(`https://summer-camp-server-ten-iota.vercel.app/carts/${_id}`)
        .then((res) => {
          console.log(res);
          if (res.deletedCount) {
          }
          Swal.fire(
            'Deleted!',
            'class has been deleted.',
            'success'
          )
          refetch();
          
          
        })
        .catch((error) => console.log(error));


    }
    return (
        <tr>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <img className='mask mask-squircle w-12 h-12'
              src={image}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </td>
        <td>
          <p className="font-semibold">{name}</p>
          <p className="text-sm opacity-[75%]">{instructorName}</p>
        </td>
        <td>{availableSeats}</td>
        <td className='text-right'>$ {price}</td>
        <td className="flex gap-2">
          <div className="btn btn-sm rounded-full text-[1.25rem] bg-secondary text-[#fff]"> <FaMoneyCheckAlt/> </div>
          <div onClick={()=>handleDelete(_id)} className="btn btn-sm rounded-full text-[1.25rem] bg-primary text-[#fff]"> <MdDeleteOutline /> </div>
        </td>
      </tr>
    );
};

export default SelectedClass;