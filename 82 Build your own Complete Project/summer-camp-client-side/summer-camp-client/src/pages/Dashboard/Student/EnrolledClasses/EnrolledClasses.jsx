import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useEnroll from "../../../../hooks/useEnroll";
import EnrolledClass from "./EnrolledClass";
import { Helmet } from "react-helmet-async";

const EnrolledClasses = () => {
    
    const [enroll] = useEnroll();
    let count = 1;

  return (
    <div className="w-full p-5">
        <SectionTitle className="" title="Enrolled Classes" />
        <Helmet>
        <title>Enrolled Classes | Inkwell Studio</title>
      </Helmet>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class / Instructor</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              // card.map((cardItem, index) => <SelectedClass refetch={refetch} cardItem={cardItem} key={index} index={index}/>)
              enroll?.map((enrollItem) => enrollItem?.classesItemId.map((item, index) => <EnrolledClass key={index} item={item} index={count++ }/>))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
