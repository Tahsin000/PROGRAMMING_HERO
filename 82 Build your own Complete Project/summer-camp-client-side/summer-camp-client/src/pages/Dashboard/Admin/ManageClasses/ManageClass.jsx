import axios from "axios";
import Swal from "sweetalert2";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdDeleteOutline, MdOutlinePending } from "react-icons/md";
import { TiCancel } from "react-icons/ti";

const ManageClass = ({ Class, index, refetch }) => {
  const {
    _id,
    image,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
    name,
    status,
    feedBack
  } = Class;

  const classStatusDataFetch = (user, status) => {
    axios
      .patch(`https://summer-camp-server-ten-iota.vercel.app/add_class/${user._id}`, status)
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an ${status.status} Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.error(error));
  };

  const handlePending = (user) => {
    classStatusDataFetch(user, { status: "pending", feedBack: "Admin Marked pending"});
  };
  const handleApproved = (user) => {
    classStatusDataFetch(user, { status: "approved", feedBack: ""});
  };

  const handleDenied = (user) => {
    if (user?.status !== "denied") {
      Swal.fire({
        title: "Send your feedback",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Send",
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          // set_admin_feedback(login);
          console.log(login);
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          // console.log({status: "denied", feedBack:admin_feedback});
          classStatusDataFetch(user, {
            status: "denied",
            feedBack: result.value,
          });
        }
      });
    }
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://summer-camp-server-ten-iota.vercel.app/add_class/${user._id}`)
          .then((res) => {
            console.log(res);
            refetch();
            Swal.fire("Deleted!", "Class has been deleted.", "success");
          })
          .catch((error) => console.error(error));
      }
    });
  };

  return (
    <tr className="w-full">
      <td>{index + 1}</td>
      <td>
        <div className="mask mask-squircle w-12 h-12">
          <img src={image} />
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>

        <div
          className={`text-sm opacity-[75%] ${
            status === "approved"
              ? "text-[green]"
              : status === "denied"
              ? "text-[red]"
              : status === "pending"
              ? "text-[#ef9b0f]"
              : ""
          } `}
        >
          {status}
        </div>
        <small className="text-secondary">
          {
            status !== "approved" && feedBack 
          }
        </small>
      </td>
      <td>
        <div className="font-semibold">{instructorName}</div>
        <div className="text-sm opacity-[75%]">{instructorEmail}</div>
      </td>
      <td>{availableSeats}</td>
      <td className="text-right">$ {price}</td>
      <td className="md:w-1/5 w-full">
        <div className="grid grid-cols-1 2xl:grid-cols-4 gap-1">
          <div
            className="btn btn-sm rounded-full text-[1.25rem] bg-warning text-[#fff]"
            onClick={() => handlePending(Class)}
            disabled={status === "pending" ? true : false}
          >
            <MdOutlinePending />
          </div>
          <div
            className="btn btn-sm rounded-full text-[1.25rem] bg-secondary text-[#fff]"
            disabled={
              status === "deny" ? false : status === "pending" ? false : true
            }
            onClick={() => handleApproved(Class)}
          >
            <AiOutlineCheckCircle />
          </div>
          <div
            title="Denied"
            onClick={() => handleDenied(Class)}
            disabled={
              status === "deny" ? true : status === "approved" ? true : false
            }
            className="btn btn-sm rounded-full text-[1.25rem] bg-[#ca0097] text-[#fff]"
          >
            <TiCancel />
          </div>
          <div
            title="Denied"
            onClick={() => handleDelete(Class)}
            className="btn btn-sm rounded-full text-[1.25rem] bg-primary text-[#fff]"
          >
            <MdDeleteOutline />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ManageClass;
