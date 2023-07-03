import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useInstructorClasses from "../../../hooks/useInstructorClasses";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const InstructorClasses = () => {
  const [classes, loading, refetch, deleteCard ] = useInstructorClasses();


  return (
    <div>
      <SectionTitle title="My Classes" />
      <Helmet>
          <title>My Classes | Inkwell Studio</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class name</th>
              <th>Price</th>
              <th>Total enroll</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((classItem, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classItem?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {classItem?.name}
                  <br />
                  <span className={`badge badge-ghost badge-sm p-2 ${
            classItem?.status === "approved"
              ? "bg-[#4ea54e] text-[#fff]"
              : classItem?.status === "denied"
              ? "bg-[#ff4949] text-[#fff]"
              : classItem?.status === "pending"
              ? "bg-[#ef9b0f] text-[#fff]"
              : ""
          } `}>
                    {classItem?.status}
                  </span>
                </td>
                <td> $ {classItem?.price} </td>
                <td> to do work further </td>
                {
                    classItem.feedBack ? <td> {classItem?.feedBack} </td> : <td> No Feedback </td>
                }
                <td> <Link to={`/dashboard/instructor_update/${classItem?._id}`} className="bg-primary text-[#fff] btn btn-xs w-10 h-10 flex justify-center items-center"> <AiOutlineEdit className="text-xl"/> </Link> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorClasses;
