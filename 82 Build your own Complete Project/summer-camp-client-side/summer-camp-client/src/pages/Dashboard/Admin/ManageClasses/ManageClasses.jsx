import React from "react";
import ManageClass from "./ManageClass";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useClass from "../../../../hooks/useClass";
import { Helmet } from "react-helmet-async";


const ManageClasses = () => {
  const [classes, loading, refetch] = useClass();
  return (
    <div className="p-5 ">
      <SectionTitle title="Manage Classes" />
      <Helmet>
        <title>Manage Classes | Inkwell Studio</title>
      </Helmet>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {
              classes.map((Class, index) => <ManageClass refetch={refetch} Class={Class} index={index} key={index} />)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
