import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <progress className="progress w-56" value="50" max="100"></progress>
        </div>
      </>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>;
};

export default PrivateRoutes;
