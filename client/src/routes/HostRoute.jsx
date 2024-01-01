import { Navigate} from "react-router-dom";
import Loader from "../components/Shared/Loader";
import userRole from "../hooks/userRole";

const HostRoute = ({ children }) => {
  const [role, loading] = userRole();
  if (loading) return <Loader />;
  if (role === "host") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

export default HostRoute;
