import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

import axios from "axios";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const ManageUserUpdate = () => {
  const navigate = useNavigate();
  const{UpdateUser} = useAuth();
  const _id = useParams();
  const [info, setInfo] = useState([{}]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const updateUserInfo = {
      name: form?.name.value,
      email: form?.email.value,
      photoUrl: form?.photoUrl.value,
      gender: form?.gender.value,
      phone: form?.phone.value,
      address: form?.address.value,
    };



    axios
      .patch(
        `https://summer-camp-server-ten-iota.vercel.app/users/user_update/${_id.id}`,
        updateUserInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${res.data.name} is update Now!`,
            showConfirmButton: false,
            timer: 1500,
          });

          UpdateUser(form?.name?.value, form?.phone?.value)
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {console.log(error)});

          navigate(`/dashboard/manage_user`);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(`https://summer-camp-server-ten-iota.vercel.app/users/${_id.id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [_id.id]);

  return (
    <div className="px-5">
      <SectionTitle title="User Update" />
      <Helmet>
        <title>Update | Inkwell Studio</title>
      </Helmet>
      <div className="">
        <Link
          to="/dashboard/manage_user"
          className="btn btn-sm bg-secondary text-[#fff]"
        >
          {" "}
          <FaArrowLeft />{" "}
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleUpdate}
          className="modal-box box w-11/12 max-w-5xl h-auto"
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
            <div className="mb-4 w-full">
              <p
                className="text-gray-700 font-semibold mb-2 text-sm"
                htmlFor="name"
              >
                Name
              </p>
              <input
                defaultValue={info[0].name}
                className="w-full px-3 py-2 border rounded"
                type="text"
                name="name"
              />
            </div>

            <div className="mb-4 w-full">
              <p
                className="text-gray-700 font-semibold mb-2 text-sm"
                htmlFor="name"
              >
                {" "}
                email{" "}
              </p>
              <input
                defaultValue={info[0].email}
                className="w-full px-3 py-2 border rounded"
                type="email"
                name="email"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="mb-4 w-full">
              <p
                className="text-gray-700 font-semibold mb-2 text-sm"
                htmlFor="name"
              >
                {" "}
                photoUrl{" "}
              </p>
              <input
                defaultValue={info[0].photoUrl}
                className="w-full px-3 py-2 border rounded"
                type="text"
                name="photoUrl"
              />
            </div>

            <div className="mb-4 w-full">
              <p
                className="text-gray-700 font-semibold mb-2 text-sm"
                htmlFor="name"
              >
                {" "}
                gender{" "}
              </p>
              <select className="w-full px-3 py-2 border rounded" name="gender">
                <option selected={info[0].gender === "male"} value="male">
                  Male
                </option>
                <option selected={info[0].gender === "female"} value="female">
                  Female
                </option>
                <option selected={info[0].gender === "other"} value="other">
                  Other
                </option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="mb-4 w-full">
              <p
                className="text-gray-700 font-semibold mb-2 text-sm"
                htmlFor="name"
              >
                {" "}
                phone{" "}
              </p>
              <input
                defaultValue={info[0].phone}
                className="w-full px-3 py-2 border rounded"
                type="text"
                name="phone"
              />
            </div>

            <div className="mb-4 w-full">
              <p
                className="text-gray-700 font-semibold mb-2 text-sm"
                htmlFor="name"
              >
                {" "}
                address{" "}
              </p>
              <input
                defaultValue={info[0].address}
                className="w-full px-3 py-2 border rounded"
                type="text"
                name="address"
              />
            </div>
          </div>

          <input type="submit" className="btn btn-primary w-full" />
        </form>
      </div>
    </div>
  );
};

export default ManageUserUpdate;
