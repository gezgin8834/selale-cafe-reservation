// src/pages/Reservation.jsx
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/toast.css";
import "../styles/Reservation.css";
import ReservationService from "../utils/ReservationService"; // yeni ekleme



;

const tables = [
  { id: 1, name: "Masa 1" },
  { id: 2, name: "Masa 2" },
  { id: 3, name: "Masa 3" },
  { id: 4, name: "Masa 4" },
  { id: 5, name: "Masa 5" },
  { id: 6, name: "Masa 6" },
  { id: 7, name: "Masa 7" },
  { id: 8, name: "Masa 8" },
  { id: 9, name: "Masa 9" },
  { id: 10, name: "Masa 10" }
];



const NewReservation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: 1,
    date: "",
    time: "",
    table:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      if (!kvkkAccepted) {
     toast.error("Lütfen KVKK metnini onaylayınız.");
    return;
    }

     setIsSubmitting(true);
     
    const existing = JSON.parse(localStorage.getItem("reservations")) || [];

    const isConflict = existing.some(r =>
    r.date === formData.date &&
    r.time === formData.time &&
    r.table === formData.table
  );

  if (isConflict) {
     if (window.confirm("Bu masa ve saat dolu. Bekleme listesine eklemek ister misiniz?")) {
      const waitlist = JSON.parse(localStorage.getItem("waitlist")) || [];
      waitlist.push(formData);
      localStorage.setItem("waitlist", JSON.stringify(waitlist));
      toast.info("📋 Bekleme listesine eklendiniz.");
      navigate("/onay");
    } else {
      toast.warn("Lütfen farklı bir masa veya saat seçin.");
    }

  

   
     //toast.error("⚠️ Bu tarih, saat ve masa için zaten bir rezervasyon edilmiştir!");
    
return;
  }

    ReservationService.add(formData);
   const updated = [...existing, formData];
    localStorage.setItem("reservations", JSON.stringify(updated));
    localStorage.setItem("onay", JSON.stringify(formData));
  
    toast.success("✅ Rezervasyon başarıyla oluşturuldu!");
    

     setTimeout(()=> {
   navigate("/onay"); // ✅ yönlendirme düzeltildi
    }, 3000);
    };
   

 return (
    <Container className="Reservation-Container">
      <Row className="justify-content-center shadow-lg p-2 light  glass mt-5">
        <Col xs={12} sm={10} md={10} lg={8}>
          <h5 className="text-center h5-Title">📅 Rezervasyon Yap</h5>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input type="text" name="name" className="Input-Group"  placeholder="Adınız-Soyadınız" value={formData.name} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Input type="tel" name="phone" className="Input-Group" placeholder="05XXXXXXXXX"
                pattern="05[0-9]{9}" value={formData.phone} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="guests" className="Label-Group">Kişi Sayısı</Label>
              <Input type="number" name="guests" id="guests" value={formData.guests} min="1" max="20" onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="date" className="Label-Group">Rezervasyon Tarihi</Label>
              <Input type="date" name="date" id="date" value={formData.date} min={today} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="time" className="Label-Group">Rezervasyon Saati</Label>
              <Input type="time" name="time" id="time" value={formData.time} onChange={handleChange} required />
           </FormGroup>
           <FormGroup>
           <Label for="table" className="Label-Group">Masa Seç</Label>
            <Input type="select" name="table" id="table" value={formData.table} onChange={handleChange} required>
            <option value="">-- Masa Seçin --</option>
              {tables.map((table) => (
              <option key={table.id} value={table.name}>{table.name}</option>
            ))}
           </Input>
            </FormGroup>
            <FormGroup check className="d-flex align-items- start mt-3 kvkk-checkbox">
            <Input
              type="checkbox"
             id="kvkk"
            checked={kvkkAccepted}
            onChange={(e) => setKvkkAccepted(e.target.checked)}
            />
            <Label for="kvkk" check className="ms-2">
           <small>
            <a href="/kvkk" target="_blank" rel="noopener noreferrer">
            KVKK Aydınlatma Metni </a>
           {" "}
           ve{" "}
           <a href="/cerez-politikasi" target="_blank" rel="noopener noreferrer">
           Çerez Politikası
           </a>'ni okudum ve kabul ediyorum.
           </small>
              </Label>
           </FormGroup>


          <Button color="light" 
         className="w-100 bg-body-secondary text-dark-subtle mb-3" type="submit"
         disabled={isSubmitting}>
          {isSubmitting ? "Gönderiyor..." : "Rezervasyon Yap"}</Button>
         
         
          </Form>
           </Col>
           </Row>
           </Container>
           );
        };

        export default NewReservation;


    



 





            
