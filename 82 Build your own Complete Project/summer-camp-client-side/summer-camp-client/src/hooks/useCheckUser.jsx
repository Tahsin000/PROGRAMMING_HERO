import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCheckUser = () => {
   const {user} = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const {data: userChecker, isLoading: isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log("is admin response" , res);
            return res.data.admin;
        }
   })
   return [userChecker, isAdminLoading];

};

export default useCheckUser;