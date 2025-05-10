import { useAuthContext } from "@/hooks/useAuthContext";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/courses" />;
  }

  return children;
}
