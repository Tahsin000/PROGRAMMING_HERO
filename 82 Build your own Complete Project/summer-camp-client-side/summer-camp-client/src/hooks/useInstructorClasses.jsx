
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from './useAuth';

const useInstructorClasses = () => {
  const { user, loading } = useAuth();
  const queryClient = useQueryClient();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ['cards', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://summer-camp-server-ten-iota.vercel.app/instructor_classes?email=${user?.email}`);
      return res.json();
    }
  });

  // ================================
  const deleteCard = async (_id) => {
    try {
      await fetch(`https://summer-camp-server-ten-iota.vercel.app/instructor_classes/${_id}`, {
        method: 'DELETE'
      });
      // Invalidate the 'cards' query to trigger a refetch
      queryClient.invalidateQueries(['cards', user?.email]);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };
    
      return [classes, loading, refetch, deleteCard];
};

export default useInstructorClasses;
