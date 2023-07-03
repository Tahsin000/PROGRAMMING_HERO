import React from 'react';
import ManageUser from './ManageUser';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
  const{user} = useAuth();
    // const [users, loading, refetch] = useUsers();
    const [axiosSecure] = useAxiosSecure();
    const {data: users=[], refetch} = useQuery(["users"], async()=>{
      const res = await axiosSecure.get(`/users`)
      return res.data;
  })

  return (
    <div className="p-5 ">
      <SectionTitle title="Manage Users" />
      <Helmet>
        <title>Manage Users | Inkwell Studio</title>
      </Helmet>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email / Address / Phone</th>
              <th>Gender</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {
              users.filter(usersFilter => usersFilter?.email !== user?.email).map((user, index) => <ManageUser refetch={refetch} user={user} index={index} key={index} />)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;