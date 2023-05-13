import React from 'react';
import { FaEdit, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const HomeTableRow = ({chocolate, chocolates, setChocolates}) => {
    const {_id, name, country, category, photo} = chocolate;

    const handleDelete = (_id)=>{
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
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              console.log(_id);
              fetch(`https://my-app-server-1g5cvh6yh-tahsin000.vercel.app/chocolate/${_id}`, {
                method:"DELETE"
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    const remainder =  chocolates.filter(chocolate => chocolate._id !== _id);
                    setChocolates(remainder);
                }
              })
            }
          })
    }
    return (
        <tr>
            <td> <img className='w-[80px] rounded-xl shadow-sm' src={photo} alt="" /> </td>
            <td>{name}</td>
            <td>{country}</td>
            <td>{category}</td>
            <td className='flex gap-3'>
                <Link to={`/UpdateChocolate/${_id}`}> <i className='btn'> <FaEdit/> </i> </Link>
                <i className='btn'  onClick={()=> handleDelete(_id)}> <FaTimes/> </i>
            </td>
        </tr>
    );
};

export default HomeTableRow;