import React, { useState } from "react";

import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiBabyFace } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageUser = ({ user, index, refetch }) => {
  const {_id, name, email, photoUrl, gender, phone, address, role } = user;

  const [modealData, setModealData] = useState({
    name:"", 
    email:"", 
    photoUrl:"", 
    gender:"", 
    phone:"", 
    address:"", 
    role:""
  });  

  const userRoleDataFetch = (user, role) => {
    axios
      .patch(`https://summer-camp-server-ten-iota.vercel.app/users/${user._id}`, {
        role: role,
      })
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an ${role} Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.error(error));
  };

  const handleStudent = (user) => {
    userRoleDataFetch(user, "student");
  };
  const handleInstructor = (user) => {
    userRoleDataFetch(user, "instructor");
  };
  const handleAdmin = (user) => {
    userRoleDataFetch(user, "admin");
  };
  const handleUpdate = (user) => {
    setModealData(user);
    // console.log(user);
  };

  return (
    <tr className="w-full">
      <td>{index + 1}</td>
      <td>
        <div className="mask mask-squircle w-12 h-12">
          <img src={photoUrl} />
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>

        <div
          className={`text-sm opacity-[75%] ${
            role === "admin"
              ? "text-[green]"
              : role === "student"
              ? "text-[#03118c]"
              : role === "instructor"
              ? "text-[#ef9b0f]"
              : ""
          } `}
        >
          {role}
        </div>
      </td>
      <td>
        <div className="font-semibold">{email}</div>
        <small className="text-xs opacity-[75%]"> {address} </small>
        <div className={`text-sm opacity-[75%]`}>{phone}</div>
      </td>
      <td>{gender}</td>
      <td className="md:w-1/5 w-full">
        <div className="grid grid-cols-1 2xl:grid-cols-4 gap-1">
          <div
            className="btn btn-sm text-[1.25rem] rounded-full bg-secondary text-[#fff]"
            onClick={() => handleStudent(user)}
          >
            <GiBabyFace />
          </div>
          <div
            className="btn btn-sm text-[1.25rem] rounded-full bg-[#ef9b0f] text-[#fff]"
            onClick={() => handleInstructor(user)}
          >
            <FaChalkboardTeacher />
          </div>
          <div
            title="Denied"
            onClick={() => handleAdmin(user)}
            className="btn btn-sm text-[1.25rem] rounded-full bg-[green] text-[#fff]"
          >
            <MdAdminPanelSettings />
          </div>
          {/* <div
            title="Denied"
            onClick={() => handleUpdate(user)}
            className="btn btn-sm text-[1.25rem] rounded-full bg-primary text-[#fff]"
          >
            <AiOutlineEdit />
            
          </div> */}
          <Link 
          to={`/dashboard/manage_user_update/${_id}`}
            htmlFor="my_modal_7"
            onClick={() => handleUpdate(user)}
            className="btn btn-sm text-[1.25rem] rounded-full bg-primary text-[#fff]"
          >
            <AiOutlineEdit />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ManageUser;
