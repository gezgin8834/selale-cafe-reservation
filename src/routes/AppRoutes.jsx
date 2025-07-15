import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Reservation from "../pages/Reservation.jsx";
import Confirmation from "../pages/Confirmation.jsx";
import AdminLogin from "../pages/AdminLogin.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";
import PrivateRoute from "../components/PrivateRoute.jsx";
import Kvkk from "../pages/Kvkk.jsx";
import CerezPolitikasi from "../pages/CerezPolitikasi.jsx"; 




const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rezervasyon" element={<Reservation />} />
      <Route path="/onay" element={<Confirmation />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/panel" element={<PrivateRoute><AdminDashboard/></PrivateRoute>} />
        <Route path="/kvkk" element={<Kvkk />} /> {/* ✅ */}
      <Route path="/cerez-politikasi" element={<CerezPolitikasi />} /> {/* ✅ */}
    </Routes>
  );
};

export default AppRoutes;
