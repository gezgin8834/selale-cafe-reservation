// src/components/Footer.jsx
import React from "react";
import { Container } from "reactstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-custom mt-auto py-3 text-center footer">
      <Container>
        <span>© Copyright {new Date().getFullYear()}  Şelale Cafe | Tüm Hakları Saklıdır.</span>
      </Container>
    </footer>
  );
};

export default Footer;

