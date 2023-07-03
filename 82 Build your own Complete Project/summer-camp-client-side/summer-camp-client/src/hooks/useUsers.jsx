import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user, loading} = useAuth();
    const {data: users = [], refetch} =  useQuery({
        queryFn: async()=>{
          const res = await axiosSecure(`/users`)
          return res.json();
        }
      })
    
      return [users, loading, refetch];
};

export default useUsers;
