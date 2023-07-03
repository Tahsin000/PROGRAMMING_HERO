import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Class from "../Class/Class";

const Classes = () => {
  // add_class/frontend_view
  const [classList, setClassList] = useState([]);
  useEffect(()=>{
    fetch(`https://summer-camp-server-ten-iota.vercel.app/add_class/frontend_view`)
    .then(res => res.json())
    .then(info => setClassList(info))
  }, [])
  // const classList = classes.filter(classFilter => classFilter?.status === "approved")

  
  // const classes = [
  //   {
  //     classImage: "https://i.ibb.co/FhmKdDc/image.png",
  //     className: "P-120",
  //     instructor: "John Doe",
  //     availableSeats: 10,
  //     price: 300,
  //   },
  //   {
  //     classImage:"https://i.ibb.co/8KRTGG1/image-1.png",
  //     "className": "P-122",
  //     "instructor": "Jane Smith",
  //     availableSeats: 6,
  //     price: 350,
  //   }
  // ];

  return (
    <div>
      <Helmet>
        <title>Classes | Inkwell Studio</title>
      </Helmet>
      <SectionTitle title="Classes" />
      <div className="md:py-20 py-10">
        <div className="grid md:grid-cols-2 gap-5">
          {classList.map((classItem, index) => <Class key={index} classItem={classItem} />)}
          {/* {classList.map((classItem, index) => console.log(classItem.length))} */}
        </div>
      </div>
    </div>
  );
};

export default Classes;
