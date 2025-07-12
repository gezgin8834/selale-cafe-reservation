//import { useState } from 'react';
import './App.css';
import { useMediaQuery } from "react-responsive";
//import React from "react";
import AppRoutes from "./routes/AppRoutes.jsx";
import CustomNavbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BottomNav from "./components/BottomNav";






//function App() {
  

  //return (
   // <div className="App">
     // <CustomNavbar/>
      //<AppRoutes />
    //</div>
  //);
//};

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });



  return (
    <div className="App">
      <div className="d-flex flex-column min-vh-100">
        {/* Üst Navbar */}
        <CustomNavbar />

        {/* Sayfa içerikleri */}
        <div className="flex-grow-1">
          <AppRoutes />
        </div>

        {/* Alt Footer */}
        <Footer />
      </div>

      {/* Toast bildirimleri */}
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Sadece mobilde gösterilecek alt navigasyon */}
      {isMobile && <BottomNav />} {/* ✅ isMobile burada kullanılıyor */}
    </div>
  );
};

export default App;
