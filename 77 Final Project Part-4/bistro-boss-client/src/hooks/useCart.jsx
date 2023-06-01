import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useCart = () => {
    const {user} = useContext(AuthContext);
    const { refetch , data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },
      })
      return [cart, refetch];
}

export default useCart;