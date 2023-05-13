import { useState } from 'react'
import { FaPlus, FaEdit, FaTimes } from "react-icons/fa";

import './App.css'
import HomeTableRow from './components/HomeTableRow';
import { Link, useLoaderData } from 'react-router-dom';

function App() {

  const LoadedData = useLoaderData();

  const [chocolates, setChocolates] = useState(LoadedData);

  return (
    <>
      <div className='max-md:p-5 container mx-auto'>
        <h1 className='font-bold text-2xl rounded-lg my-4 bg-[#995D2F] p-3 text-center text-[#fff]'>Chocolate Management System</h1>
        <Link to='/addChocolate' className="my-5 flex p-3 justify-start md:w-1/6 items-center btn btn-outline">
          <p className='px-3'> <FaPlus/> </p>
          <button>New Chocolate</button>
        </Link>
        
        <div className="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Country/Factory</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  chocolates.map(chocolate => <HomeTableRow key={chocolate._id} chocolates={chocolates} setChocolates={setChocolates} chocolate={chocolate}/>)
                }
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
