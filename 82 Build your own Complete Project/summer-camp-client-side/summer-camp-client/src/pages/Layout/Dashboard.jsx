import React from "react";
import { BiSelectMultiple } from "react-icons/bi";
import { FaBars, FaHome, FaRocket, FaUsers } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineBusinessCenter, MdOutlineClass, MdSpaceDashboard } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import useCheckUser from "../../hooks/useCheckUser";
import SwapIcon from "../Shared/SwapIcon/SwapIcon";
import useCard from "../../hooks/useCard";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  // TODO: Load data from the server to have dynamic isAdmin based on data
//   const [isAdmin] = useAdmin();
    const [userChecker]=useCheckUser();
    const {LogOut} = useAuth();
    const [card] = useCard()
    const location = useLocation();

    console.log(userChecker)

    const handleSignOut = ()=>{
      LogOut()
      .then(result => console.log(result.user))
      .catch(error => console.log(error));
      <Navigate to="/" state={{from:location}} replace />
    }

  return (
    <div class="drawer drawer-mobile lg:drawer-open">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden m-5"><FaBars/></label>
    <Outlet />
  </div> 
  <div className="drawer-side md:bg-[#004080] bg-[#004080be] text-[#f1f1f1]">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul class="menu p-4 w-80 h-full  text-base-content dark:text-[#f1f1f1]">
          {
            userChecker === "admin" ? <> 
              <li> <NavLink to="/dashboard/home"> <MdSpaceDashboard />Dashboard</NavLink  > </li>
              <li> <NavLink to="/dashboard/manage_classes"> <MdOutlineClass />Manage Classes</NavLink  > </li>
              <li> <NavLink to="/dashboard/manage_user"> <FaUsers />Manage Users</NavLink  > </li>
            </> : userChecker === "student" ?  <>
            
              <li> 
                <NavLink to="/dashboard/selected_classes"> 

                  <BiSelectMultiple /> Selected Classes
                  <div className="absolute -top-1 right-20">
                    <div className="relative w-17 p-3">
                      <AiOutlineShoppingCart className="text-2xl"/>
                      <div className="absolute inline-flex items-center text-[red] bg-[#fff] justify-center w-4 h-4 p-[9px] text-sm font-bold text-white bg-red-500 border-[2px] border-white rounded-full top-0 right-0 dark:border-gray-900">{card.length}</div>
                    </div>

                  </div>
                 </NavLink  >
                
              </li>
              <li> <NavLink to="/dashboard/enrolled_classes"> <MdOutlineBusinessCenter /> Enrolled Classes </NavLink  > </li>

            </> :
             <>
              <li> <NavLink to="/dashboard/instructor_classes"> <MdOutlineClass/> My Classes </NavLink  > </li>
              <li> <NavLink to="/dashboard/add_class"> <FiPlusSquare/> Add a Class </NavLink  > </li>
           </>
          }

          <div className="divider"></div>
          <li> <NavLink  to="/"> <FaHome /> Home </NavLink  > </li>
          <li> <NavLink  to="/instructors"> <FaRocket /> instructors </NavLink  > </li>
          <li> <NavLink  to="/classes"> <MdOutlineClass /> classes </NavLink  > </li>
          <li> <button onClick={handleSignOut}> <FaPowerOff /> Sign out </button> </li>
          <li><SwapIcon/></li>
        </ul>
  </div>

      {/* 
      
      
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>

    //   -----------------------------
      <div class="drawer-side bg-[#D1A054]">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 h-full  text-base-content">
          {
            isAdmin ? <> 
              <li> <NavLink  to="/dashboard/Home"> <FaHome />  Admin Home </NavLink  > </li>
              <li> <NavLink  to="/dashboard/additem"> <FaWallet /> Add an Item </NavLink  > </li>
              <li> <NavLink  to="/dashboard/manageitems"> <ImSpoonKnife /> Menage Item </NavLink  > </li>
              <li> <NavLink  to="/dashboard/Reservation"> <FaBook /> Menage Bookings </NavLink  > </li>
              <li> <NavLink  to="/dashboard/allusers"> <FaUsers /> All User </NavLink  > </li>
            </> : <>
            
              <li> <NavLink  to="/dashboard/Home"> <FaHome />  User Home </NavLink  > </li>
              <li> <NavLink  to="/dashboard/History"> <FaWallet /> Payment History </NavLink  > </li>
              <li> <NavLink  to="/dashboard/Reservation"> <FaCalendarAlt /> Reservation </NavLink  > </li>
              <li> <NavLink  to="/dashboard/mycart"> <FaShoppingCart /> My Cart </NavLink  > </li>
            </>
          }

          <div className="divider"></div>
          <li> <NavLink  to="/"> <FaHome /> Home </NavLink  > </li>
          <li> <NavLink  to="/menu"> <FaBars /> Our Menu </NavLink  > </li>
          <li> <NavLink  to="/order/salad"> <FaShoppingBag /> Order Food </NavLink  > </li>
        </ul>
      </div>
      
      
      
      */}



    </div>
  );
};

export default Dashboard;
