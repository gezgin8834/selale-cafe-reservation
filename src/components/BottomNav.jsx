// src/components/BottomNav.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaClipboardList, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import "../styles/BottomNav.css";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

const isAdmin = localStorage.getItem("isAdmin") === "true";


  const navItems = [
    { label: "Anasayfa", path: "/", icon: <FaHome /> },
    { label: "Rezervasyon Yap", path: "/rezervasyon", icon: <FaClipboardList /> },
    
  
   
  ].filter(Boolean);


   if (isAdmin) {
    navItems.push(
      { label: "Admin Paneli", path: "/admin/panel", icon: <FaUserShield /> },
      { label: "Çıkış", path: "/", icon: <FaSignOutAlt />, action: "logout" }
    );
  } else {
    navItems.push({ label: "Yönetici", path: "/admin", icon: <FaUserShield /> });
  }

  const handleClick = (item) => {
    if (item.action === "logout") {
       localStorage.clear();
      //localStorage.removeItem("isAdmin");
      navigate("/");
       window.location.reload();
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={`${item.path}-${item.label || "no-path"}`}
          onClick={() => handleClick(item)}
          //onClick={() => navigate(item.path)}
          className={location.pathname.startsWith (item.path) ? "active" : ""}
        >
          {item.icon}
        
          <span className="label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
