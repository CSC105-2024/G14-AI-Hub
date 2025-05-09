import { useAuthContext } from "@/hooks/useAuthContext";
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && role !== user.role) {
    return <Navigate to="/courses" />;
  }

  return children;
}
