// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";


  const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [adminInfo, setAdminInfo] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
     
  setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };
    
   const ADMIN_CREDENTIALS = { username: "admin", password: "1234" };
   
   const handleSubmit = (e) => {
  e.preventDefault();
   const inputUsername = adminInfo.username.trim().toLowerCase();
  const inputPassword = adminInfo.password.trim();

  if (
    inputUsername === ADMIN_CREDENTIALS.username && 
    inputPassword === ADMIN_CREDENTIALS.password 
  ) {

    sessionStorage.setItem("isAdmin","true");
    sessionStorage.setItem("adminUsername", inputUsername);

    setSuccess("Giriş başarılı, yönlendiriliyorsunuz...");
    setError("");
    setTimeout(() => navigate("/admin/panel"), 1000);
  } else {
    setError("Kullanıcı adı veya şifre hatalı.");
    setSuccess("");
  }
};

 


  return (
    <Container className="admin-login-container mt-5">
      <Row className="mb-5 p-5 shadow rounded light bg-transparent justify-content-center">
        <Col xs={12} sm={10} md={8} lg={10}>
          <h3 className="text-center mb-4 fs-3 h3-Title" >Yönetici Girişi</h3>
          <Form onSubmit={handleSubmit} className="admin-login-form">
            <FormGroup>
              
              <Input type="text" name="username" id="username" placeholder="Kullanıcı Adı:" onChange={handleChange}
                value={adminInfo.username} required />
            </FormGroup>
           <FormGroup className="password-group">
  <div className="password-wrapper">
    <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Şifre:"
      onChange={handleChange} required />

    <button type="button" className="password-toggle"  aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
     onClick={() => setShowPassword(!showPassword)}
      >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
</FormGroup>
<Button color="light"
 className="bg-body-secondary glass text-dark-subtle" block type="submit">Giriş Yap</Button>

   {error && (<Alert color="danger" className="admin-login-alert mt-3 bg-light text-danger">
      {error}</Alert>  
     )}  

      {success && ( <Alert color="success" className="admin-login-alert mt-3 bg-light text-success">
          {success} </Alert>
            
          )}  
     </Form>
    </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
                        
                
           

           
    
