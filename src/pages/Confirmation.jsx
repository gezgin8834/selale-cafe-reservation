import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Confirmation.css";

const Confirmation = () => {
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const storeData = localStorage.getItem("onay"); // küçük harfli anahtar!
    if (storeData) {
      try {
        const data = JSON.parse(storeData);
        setReservation(data); // ✅ burada state'e atama yapılmalı
      } catch (error) {
        console.error("JSON çözümleme hatası:", error);
        navigate("/rezervasyon");
      }
    } else {
      navigate("/rezervasyon"); // veri yoksa form sayfasına yönlendir
    }
  }, [navigate]);

  //if (!reservation) return null;
  if (!reservation) return <div>Yükleniyor...</div>;


  return (
    <Container className="mt-5 opacity-70">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12}>
          <Card>
            <CardBody>
              <CardTitle tag="h4" className="mb-4 text-center">Rezervasyon Onayı</CardTitle>
              <CardText><strong>Ad Soyad:</strong> {reservation.name}</CardText>
              <CardText><strong>Telefon:</strong> {reservation.phone}</CardText>
              <CardText><strong>Kişi Sayısı:</strong> {reservation.guests}</CardText>
              <CardText><strong>Tarih:</strong>{new Date(reservation.date).toLocaleDateString("tr-TR")}</CardText>
              <CardText><strong>Saat:</strong> {reservation.time}</CardText>
              <CardText><strong>Masa:</strong> {reservation.table || "Belirtilmedi"}</CardText>

              <div className="text-center mt-4">
                <Button color="light" onClick={() => navigate("/")}> 🏠 Ana Sayfaya Dön</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirmation;
