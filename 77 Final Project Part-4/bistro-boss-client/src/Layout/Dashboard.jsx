import React from "react";
import { Link, Outlet, NavLink  } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBars, FaShoppingBag } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side bg-[#D1A054]">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 h-full  text-base-content">

          <li> <NavLink  to="/dashboard/Home"> <FaHome />  User Home </NavLink  > </li>
          <li> <NavLink  to="/dashboard/History"> <FaWallet /> Payment History </NavLink  > </li>
          <li> <NavLink  to="/dashboard/Reservation"> <FaCalendarAlt /> Reservation </NavLink  > </li>
          <li> <NavLink  to="/dashboard/mycart"> <FaShoppingCart /> My Cart </NavLink  > </li>
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
