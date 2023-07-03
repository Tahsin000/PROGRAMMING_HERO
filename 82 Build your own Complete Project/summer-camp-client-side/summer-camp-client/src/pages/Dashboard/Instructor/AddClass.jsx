import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {user} = useAuth();

  const navigate = useNavigate();

  const add_class_url = "https://summer-camp-server-ten-iota.vercel.app/add_class";

  const onSubmit = (data) => {
    data.status = "pending";
    data.feedBack = "Awaiting admin review";
    data.instructorName = user?.displayName;
    data.instructorEmail = user?.email;

    console.log(data);
    
    axios.post(add_class_url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.insertedId) {
          Swal.fire("Create", "A new class is added", "success");
          
          navigate(`/dashboard/instructor_classes`);
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    
  };

  return (
    <div className="px-5">
      <SectionTitle title="Add Class " />
      <Helmet>
        <title>Add Class | Inkwell Studio</title>
      </Helmet>
      <div className="max-w-md mx-auto h-auto flex flex-col justify-center py-20">
        <form className="shadow-md p-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="className" className="text-sm font-medium">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              className="w-full px-3 py-2 border rounded"
              {...register("name", { required: true })}
            />
            {errors.className && (
              <span className="text-red-500">Class Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="instructorName" className="text-sm font-medium">
              Instructor Name
            </label>
            <input
              disabled={true}
              defaultValue={user?.displayName}
              type="text"
              id="instructorName"
              className="w-full px-3 py-2 border rounded"
              {...register("instructorName")}
            />
            {errors.instructorName && (
              <span className="text-red-500">Instructor Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="instructorEmail" className="text-sm font-medium">
              Instructor Email
            </label>
            <input
              disabled={true}
              defaultValue={user?.email}
              type="email"
              id="instructorEmail"
              className="w-full px-3 py-2 border rounded"
              {...register("instructorEmail")}
            />
            {errors.instructorEmail && (
              <span className="text-red-500">Instructor Email is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="availableSeats" className="text-sm font-medium">
              Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              className="w-full px-3 py-2 border rounded"
              {...register("availableSeats", { required: true })}
            />
            {errors.availableSeats && (
              <span className="text-red-500">Available Seats is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full px-3 py-2 border rounded"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>

          <div className="mb-4 ">
            <label htmlFor="image" className="text-sm font-medium">
              Class Image
            </label>
            <input
              type="text"
              id="image"
              className="w-full px-3 py-2 border rounded"
              {...register("image")}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
