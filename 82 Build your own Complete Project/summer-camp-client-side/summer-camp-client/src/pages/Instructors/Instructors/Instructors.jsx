import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import InstructorCard from "../InstructorCard/InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(()=> {
    fetch(`https://summer-camp-server-ten-iota.vercel.app/users/frontend_view/`)
    .then(res => res.json())
    .then(info => setInstructors(info));
  }, []);
  // const instructors = users.filter(item => item?.role == "instructor");
  // const temp = users.filter(item => {
  //   classes.filter(class_item => class_item?.instructorEmail == item?.email) && item?.role == "instructor" 
  // });
  // console.log(temp)
  // const instructors = [
  //   {
  //       "image": "https://i.ibb.co/tQz3v4K/image.png",
  //       "name": "John Doe",
  //       "email": "johndoe@example.com",
  //       "numClasses": 3,
  //       "classesTaken": ["Drawing Fundamentals", "Figure Drawing", "Portrait Painting"]
  //     },       
  //     {
  //       "image": "https://i.ibb.co/K6wsB3h/New-Project-1.png",
  //       "name": "Jane Smith",
  //       "email": "janesmith@example.com",
  //       "numClasses": 4,
  //       "classesTaken": ["Watercolor Techniques", "Landscape Drawing", "Still Life Painting", "Digital Art"]
  //     }
      
  // ];

  return (
    <div>
      <Helmet>
        <title>Instructors | Inkwell Studio</title>
      </Helmet>
      <SectionTitle title="Instructors" />
      <div className="md:py-20 py-10">
       <div className="grid md:grid-cols-2 gap-5">
       {
            instructors?.map((instructor, index)=> <InstructorCard key={index} instructor={instructor} />)
        }
       </div>
        
      </div>
    </div>
  );
};

export default Instructors;
