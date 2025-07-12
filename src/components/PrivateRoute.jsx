// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "../utils/auth";


const PrivateRoute = ({ children }) => {
 const isAdmin = sessionStorage.getItem("isAdmin") === "true";
  //return isAdmin  ? children : <Navigate to = "/admin" replace />;
  return isAdminAuthenticated () ? children : <Navigate to = "/admin" replace />;
 
};

//const PrivateRoute = ({ children }) => {
  //const isAuthenticated = localStorage.getItem("admin-auth") === "true";
  //return isAuthenticated ? children : <Navigate to="/admin" />;
//};

export default PrivateRoute;
