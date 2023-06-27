import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MenageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = () =>{
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
             
              axiosSecure.delete(`/menu/${item._id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
                console.log('delete res', res.data);
              })
            }
          })
    }

    return (
        <div className="w-full px-10">
             <Helmet>
                <title>Bistro Boss | Menage Items</title>
            </Helmet>
            <SectionTitle heading={"Menage All Items"} subHeading={"---Hurry up---"} />
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Category</th>
        <th>price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item, index) => <tr key={item._id}>
            <td>
              {index + 1}
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
                </div>
              </div>
            </td>
            <td>
              {item.category}
            </td>
            <td className='text-right'>$ {item.price}</td>
            <td>
              <button className="btn btn-ghost btn-xs">details</button>
            </td>
            <td>
            <button onClick={()=> handleDelete(item)} class="btn btn-ghost btn-md bg-red-600 text-white"> <FaTrashAlt /> </button>
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MenageItems;