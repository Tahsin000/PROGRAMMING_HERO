import React from 'react';

import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCard = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: card = [] } = useQuery({
    queryKey: ['cards', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    }
  });

  // ================================

    
      return [card, refetch];
};

export default useCard;
