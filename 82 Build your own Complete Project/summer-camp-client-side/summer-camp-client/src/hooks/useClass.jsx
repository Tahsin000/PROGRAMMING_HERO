import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user, loading} = useAuth();
    const {data: classes = [], refetch} =  useQuery({
        enabled: !loading,
        queryFn: async()=>{
          const res = await axiosSecure(`/add_class`)
          return res.data;
        }
      })
    
      return [classes, loading, refetch];
};

export default useClass;
