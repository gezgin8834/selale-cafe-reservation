import React from "react";
import "../styles/LegalPages.css"; 


const Kvkk = () => {
  return (
    <div className="legal-container py-4">
      <h3 className="mb-3">K.V.K.K Aydınlatma Metni</h3>
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca,
        bu web sitesi üzerinden toplanan kişisel veriler; rezervasyon işlemleri,
        kullanıcı deneyimini iyileştirme ve hizmet kalitesini artırma amacıyla
        işlenmektedir.
        </p>
      

      <h3>İşlenen Veriler</h3>
      <p>
        Ad-soyad, telefon numarası, rezervasyon tarihi ve kişi sayısı gibi
        bilgiler alınmaktadır.
      </p>

      <h3>Veri Toplama Yöntemi</h3>
      <p>
        Bu veriler doğrudan kullanıcı tarafından doldurulan formlar aracılığıyla
        dijital ortamda toplanmaktadır.
      </p>

      <h3>Veri İşleme Amaçları</h3>
      <ul>
        <li>Rezervasyon süreçlerinin yürütülmesi</li>
        <li>Müşteri memnuniyetinin sağlanması</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
      </ul>

      <h3>Haklarınız</h3>
      <p>
        KVKK'nın 11. maddesi uyarınca kişisel verilerinizin silinmesini,
        düzeltilmesini ya da işlenme amacının sona ermesi halinde imha
        edilmesini talep edebilirsiniz.
      </p>

      <p className="mt-4">
        Detaylı bilgi için bizimle iletişime geçebilirsiniz.
      </p>
    </div>
  );
};

export default Kvkk;
