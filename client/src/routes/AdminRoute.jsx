import { Navigate} from "react-router-dom";
import Loader from "../components/Shared/Loader";
import userRole from "../hooks/userRole";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = userRole();
  if (isLoading) return <Loader />;
  if (role === "admin") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

export default AdminRoute;
