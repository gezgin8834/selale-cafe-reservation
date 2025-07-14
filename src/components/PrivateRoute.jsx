// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "../utils/auth";


const PrivateRoute = ({ children }) => {
 const isAdmin = sessionStorage.getItem("isAdmin") === "true";
  return isAdminAuthenticated () ? children : <Navigate to = "/admin" replace />;
 
};



export default PrivateRoute;
