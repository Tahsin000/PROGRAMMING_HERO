import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import OurCommunity from "../OurCommunity/OurCommunity";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://summer-camp-server-ten-iota.vercel.app/users/frontend_view`)
    .then(res => res.json())
    .then(info => setUsers(info));
  }, [])

  useEffect(()=>{
    fetch(`https://summer-camp-server-ten-iota.vercel.app/add_class/frontend_view`)
    .then(res => res.json())
    .then(info => setClasses(info));
  }, [])
  // const instructors = users.filter(item => item?.role === "instructor");
  const instructors = users;
  
  return (
    <div className="">
      <Helmet>
        <title>Home | Inkwell Studio</title>
      </Helmet>
      <Banner />
      <PopularClasses classes={classes} />
      <PopularInstructors instructors={instructors} />
      <Gallery />
      <OurCommunity />
    </div>
  );
};

export default Home;
