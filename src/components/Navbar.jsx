// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink as BSNavLink,
  Button
} from "reactstrap";
import { NavLink,  useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";




const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsAdmin(sessionStorage.getItem("isAdmin") === "true");
  }, [location]);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    setIsAdmin (false);
    navigate("/");
  };

  return (
    <Navbar expand="md" className="mt-5 navbar-custom px-1 py-3 rounded-pill">
      <NavbarBrand
      onClick={() => {
      sessionStorage.removeItem("introModalShown");
     if (location.pathname === "/") {
      window.location.reload(); // Ana sayfadaysa sayfayı yenile
      } else {
      navigate("/", { replace: true });
      }
       }}

    className="text-white text-opacity-90 fw-bold"
        style={{ cursor: "pointer" }}
      >
        ☕ Şelale Cafe
      </NavbarBrand>

      <NavbarToggler onClick={toggle} className="nav-link" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center gap-3" navbar>
          
          <NavItem>
            <BSNavLink
              tag={NavLink}
              to="/rezervasyon"
              className={({ isActive }) =>
                 `nav-link ${isActive ? "text-warning fw-bold" : "text-dark-subtle"}`

              }
             
            >
              Rezervasyon
            </BSNavLink>
          </NavItem>
          <NavItem>
            <BSNavLink
            tag={NavLink}
              to="/admin"
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-warning fw-bold" : "text-dark-subtle"}`

              }
          
            >
              Yönetici
            </BSNavLink>
          </NavItem>

            {isAdmin && (
            <>
              <NavItem>
                <BSNavLink
                  tag={NavLink}
                  to="/admin/panel"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-warning fw-bold" : "text-dark-subtle"}`
                  }
                >
                  Panel
                  </BSNavLink>
                  </NavItem>

                 <NavItem>
               <Button color="light"
                      className="text-center  bg-body-secondary text-dark-subtle" 
                      onClick={handleLogout}>
                       Çıkış Yap
                     </Button>
              </NavItem>
            </>
          )}

        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default CustomNavbar;



                 
              
