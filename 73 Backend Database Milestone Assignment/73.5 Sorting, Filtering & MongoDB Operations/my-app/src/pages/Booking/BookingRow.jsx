import React from "react";

const BookingRow = ({ booking, bookings, setBooking }) => {
  const { _id, date, service, price, img, status } = booking;

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({status: 'confirm'})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("update successful");
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining]
          setBooking(newBookings);
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBooking(remaining);
          }
        });
    }
  };

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">{img && <img src={img} />}</div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td> $ {price}</td>
      <th>
        {
            status === 'confirm' ? <span className="font-bold text-primary">Confirm</span> : <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button> 
        }
      </th>
    </tr>
  );
};

export default BookingRow;
