import React from "react";
import { Link, Outlet, NavLink  } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBars, FaShoppingBag, FaBook, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO: Load data from the server to have dynamic isAdmin based on data
  const [isAdmin] = useAdmin();
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
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
    </div>
  );
};

export default Dashboard;
