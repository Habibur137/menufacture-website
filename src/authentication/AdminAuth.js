import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const AdminAuth = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();
  if (loading || adminLoading) {
    return <Loading />;
  }
  if (!user) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!admin) {
    <Navigate to="login" />;
  }
  return <Outlet />;
};

export default AdminAuth;
