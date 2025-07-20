// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Card, CardBody, CardTitle, Button, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useMediaQuery } from "react-responsive";
import "../styles/AdminDashboard.css";
import CustomNavbar from "../components/Navbar";
import { toast } from "react-toastify";





const AdminDashboard = () => {
  const [adminFullname, setAdminFullname] = useState("");
const [waitlist, setWaitlist] = useState([]);
const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();
  const isMobile = useMediaQuery ({ maxWidth:767 });
  

useEffect(() => {
  const isAdmin = sessionStorage.getItem("isAdmin");
  const fullname = sessionStorage.getItem("adminFullname") || "";
  
  if (isAdmin !== "true") {
    navigate("/admin");
    return;
  }

  // Örnek bekleme listesi verisi ekleme
const addMockWaitlistData = () => {
  const mockData = [
    {
     name: "Hüseyin Uzun",
      phone: "05398444512",
      guests: "3",
      date: "2025-07-21",
      time: "19:00",
      table: ""
    },
    {
     name: "Hüseyin Uzun",
      phone: "05398444512",
      guests: "2",
      date: "2025-07-21",
      time: "20:00",
      table: ""
    },
    {
      name: "Hüseyin Uzun",
      phone: "05398444512",
      guests: "4",
      date: "2025-07-21",
      time: "18:30",
      table: ""
    }
  ];

  localStorage.setItem("waitlist", JSON.stringify(mockData));
  setWaitlist(mockData);
};


  setAdminFullname(fullname);

   const reservationData = JSON.parse(localStorage.getItem("reservations")) || [];
     setReservations(reservationData);

      const waitlistData = JSON.parse(localStorage.getItem("waitlist")) || [];
  setWaitlist(waitlistData);

}, [navigate]);


const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
      sessionStorage.removeItem("adminFullname");

    navigate("/");
  };

  const handleApprove = (index) => {
  const approvedItem = waitlist[index];
  const updatedWaitlist = waitlist.filter((_, i) => i !== index);
  const updatedReservations = [...reservations, approvedItem];

  setWaitlist(updatedWaitlist);
  setReservations(updatedReservations);
  localStorage.setItem("waitlist", JSON.stringify(updatedWaitlist));
  localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  toast.success("Rezervasyon onaylandı ve aktif listeye taşındı!");
};


   // 🔸 Bireysel rezervasyon sil
  const handleDelete = (indexToDelete, listType= "reservations") => {
    const updated = (listType === "waitlist" ? waitlist : reservations).filter(
      (_, index) => index !== indexToDelete
    );
    

    if (listType === "waitlist") {
      setWaitlist (updated);
      localStorage.setItem("waitlist", JSON.stringify(updated));
    } else {

      setReservations(updated);
    localStorage.setItem("reservations", JSON.stringify(updated));
    }
    toast.success("Silindi!");
   };

     // 🔸 Tüm rezervasyonları temizle
  const handleClearAll = () => {
    if (window.confirm("Tüm rezervasyonları silmek istediğinizden emin misiniz?")) {
    localStorage.removeItem("reservations");
      setReservations([]);
       toast.success("Tüm rezervasyonlar silindi!");
      
     };
  };

   

  return (
    
    <>   
    <Container className="opacity-80 admin-container ">

        <Row className="justify-content-between align-items-center">
        <Col>
          <h2 className="mb-5 Admin-Panel">📋 Admin Paneli</h2>
          <p className="ms-1 Admin-Panel">👤 Hoş geldiniz, <strong>{adminFullname}</strong></p>

        </Col>
        <Col className="text-end admin-buttons">

          <Button
            color="light"
            className="mb-5 p-1 bg-body-secondary glass text-dark-subtle"
            onClick={handleClearAll}
          >
            🗑 Tümünü Temizle
          </Button>

          <Button
            color="light"
            className="mb-5 mt-2 p-1 bg-body-secondary glass text-dark-subtle"
            onClick={handleLogout}
          >
            Çıkış Yap
          </Button>
        </Col>
      </Row>

       <>
  {/* Rezervasyon Listesi */}
  {reservations.length > 0 ? (
    <>
      <h5 className="mt-4 mb-3 Admin-Panel">📖 Rezervasyonlar</h5>
      <Table bordered responsive hover className="reservation-table text-center bg-body-secondary text-dark-subtle">
        <thead>
          <tr>
            <th>#</th>
            <th>Ad Soyad</th>
            <th>Telefon</th>
            <th>Kişi</th>
            <th>Tarih</th>
            <th>Saat</th>
            <th>Masa</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res, index) => (
            <tr key={res.id || index}>
               <td data-label="#"> {index + 1} </td>
      <td data-label="Ad Soyad"> {res.name} </td>
      <td data-label="Telefon"> {res.phone} </td>
      <td data-label="Kişi"> {res.guests} </td>
      <td data-label="Tarih"> {res.date} </td>
      <td data-label="Saat"> {res.time} </td>
      <td data-label="Masa"> {res.table || "_"} </td>
              <td>
                <Button
                  color="light"
                  size="sm"
                  className="bg-body-secondary glass text-dark-subtle"
                  onClick={() => handleDelete(index, "reservations")}
                >
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
     
    </>
  ) : (
    <p className="text-muted">Henüz kayıtlı bir rezervasyon yok.</p>
  )}

  {/* Bekleme Listesi */}
  {waitlist.length > 0 ? (
    <>
      <h5 className="mt-4 mb-3 Admin-Panel">📋 Bekleme Listesi</h5>
      <Table bordered responsive hover className="reservation-table text-center bg-body-secondary text-dark-subtle">
        <thead>
          <tr>
            <th>#</th>
            <th>Ad Soyad</th>
            <th>Telefon</th>
            <th>Kişi</th>
            <th>Tarih</th>
            <th>Saat</th>
            <th>Masa</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {waitlist.map((res, index) => (
            <tr key={index} className={res.conflict ? "table-danger" : ""}>
            <td data-label="#"> {index + 1} </td>
          <td data-label="Ad Soyad"> {res.name} </td>
           <td data-label="Telefon"> {res.phone} </td>
         <td data-label="Kişi"> {res.guests} </td>
         <td data-label="Tarih"> {res.date} </td>
         <td data-label="Saat"> {res.time} </td>
         <td data-label="Masa"> {res.table} </td>
              <td>
                 <Button
                  color="light"
                  size="sm"
                  className="bg-body-secondary glass text-dark-subtle"
                  onClick={() => handleApprove(index)}
                >
                  ✅ Onayla
                </Button>

                <Button
                  color="light"
                  size="sm"
                  className="bg-body-secondary glass text-dark-subtle"
                  onClick={() => handleDelete(index, "waitlist")}
                >
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end mb-5">
        <Button
          color="danger"
          size="sm"
          onClick={() => {
            if (window.confirm("Bekleme listesini temizlemek istiyor musunuz?")) {
              localStorage.removeItem("waitlist");
              setWaitlist([]);
              toast.success("Bekleme listesi temizlendi.");
            }
          }}
        >
          📛 Bekleme Listesini Temizle
        </Button>
      </div>
    </>
  ) : (
    <Alert> 
    <h2 className="Admin-Panel"></h2>
  Bekleme listesi şu anda boş. Yeni talepler buraya yansıyacaktır.
</Alert>
    
  )}
</>


    </Container>

    </>

       
    );
};

export default AdminDashboard;    
       
     


