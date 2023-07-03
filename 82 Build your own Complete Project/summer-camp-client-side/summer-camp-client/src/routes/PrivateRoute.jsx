import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <>
        <div className="h-screen flex justify-center items-center" role="status">
        <div class="animate-spin rounded-full h-24 w-24 border-t-4 border-gray-800"></div>

          <span className="sr-only">Loading...</span>
        </div>
      </>
  }
  if (!user) {
    return <Navigate to="/login" state={{from:location}} replace />;
  }
  return children;
};

export default PrivateRoute;
