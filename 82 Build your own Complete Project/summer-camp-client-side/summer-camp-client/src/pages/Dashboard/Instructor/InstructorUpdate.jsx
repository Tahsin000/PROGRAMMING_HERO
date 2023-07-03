import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const InstructorUpdate = () => {
  const InstructorClassID = useParams();
  const nevigate = useNavigate();

  const [updateInfo, setUpdateInfo] = useState();
  const { user } = useAuth();
  const dataLoad = async () => {
    const res = await axios.get(
      `https://summer-camp-server-ten-iota.vercel.app/instructor_classes/${InstructorClassID?.id}`
    );
    const data = res.data;
    setUpdateInfo(data[0]);
  };
  dataLoad();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const data = {
      name: form.name.value,
      instructorName: form.instructorName.value,
      instructorEmail: form.instructorEmail.value,
      availableSeats: form.availableSeats.value,
      price: form.price.value,
      image: form.image.value,
      status: "pending",
    };
    console.log(data);

    axios
      .patch(
        `https://summer-camp-server-ten-iota.vercel.app/instructor_classes/${InstructorClassID?.id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        if (result.data.modifiedCount) {
          Swal.fire({
            title: "Update",
            text: "Class has been updated successfully",
            icon: "success",
            timer: 1500,
          });
        }
        form.reset();
        nevigate("/dashboard/instructor_classes");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="px-5">
      <SectionTitle title="Instructor Update" />
      <Helmet>
          <title>Instructor Update | Inkwell Studio</title>
      </Helmet>
      <div className="max-w-xl mx-auto h-auto flex flex-col justify-center py-20">
        <form className="shadow-md p-8" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-3 ">
            <div className="mb-4">
              <label htmlFor="className" className="text-sm font-medium">
                Class Name
              </label>
              <input
                type="text"
                id="className"
                className="w-full px-3 py-2 border rounded"
                name="name"
                defaultValue={updateInfo?.name}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="instructorName" className="text-sm font-medium">
                Instructor Name
              </label>
              <input
                disabled={true}
                defaultValue={updateInfo?.instructorName}
                type="text"
                id="instructorName"
                className="w-full px-3 py-2 border rounded bg-[#80808025]"
                name="instructorName"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="instructorEmail" className="text-sm font-medium">
              Instructor Email
            </label>
            <input
              disabled={true}
              defaultValue={updateInfo?.instructorEmail}
              type="email"
              id="instructorEmail"
              className="w-full px-3 py-2 border rounded bg-[#80808025]"
              name="instructorEmail"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="availableSeats" className="text-sm font-medium">
              Available Seats
            </label>
            <input
              defaultValue={updateInfo?.availableSeats}
              type="number"
              id="availableSeats"
              className="w-full px-3 py-2 border rounded"
              name="availableSeats"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-3 ">
            <div className="mb-4">
              <label htmlFor="price" className="text-sm font-medium">
                Price
              </label>
              <input
                defaultValue={updateInfo?.price}
                type="number"
                id="price"
                className="w-full px-3 py-2 border rounded"
                name="price"
              />
            </div>

            <div className="mb-4 ">
              <label htmlFor="image" className="text-sm font-medium">
                Class Image
              </label>
              <input
                defaultValue={updateInfo?.image}
                type="text"
                className="w-full px-3 py-2 border rounded"
                name="image"
              />
            </div>
          </div>

          <div className="mb-4 ">
            <label htmlFor="image" className="text-sm font-medium">
              FeedBack
            </label>
            <textarea
              defaultValue={updateInfo?.feedBack}
              disabled={true}
              type="text"
              className="w-full px-3 py-2 border rounded bg-[#80808025]"
              name="feedBack"
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

export default InstructorUpdate;
