import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const ProtectedRoute = () => {
  const { isAuthenticated } = useUser();
  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
