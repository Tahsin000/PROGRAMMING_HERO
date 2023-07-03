import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCheckUser from "../hooks/useCheckUser";

const StudentRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
  const { user, loading } = useAuth();
  
  const [userChecker, isAdminLoading] = useCheckUser();
  const location = useLocation();
  console.log(isAdminLoading);
  console.log(user);
  console.log(user && (userChecker === "admin"));
  if (loading || isAdminLoading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center" role="status">
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
          <span class="sr-only">Loading...</span>
        </div>
      </>
    );
  }
  if (user && (userChecker === "student")) {
    return children;
  }
  return <Navigate to="/" state={{from:location}} replace />;
};

export default StudentRoute;
