import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useEnroll = () => {
  
  const {user, loading} = useAuth();
  const [axiosSecure] = useAxiosSecure();
    const {data: enroll, isLoading} =  useQuery({
      queryKey:['isEnroll', user?.email],
      enabled: !loading,
        queryFn: async()=>{
          const res = await axiosSecure.get(`/enroll/${user?.email}`)
          return res.data;
        }
      })
    
      return [enroll, loading];
};

export default useEnroll;
