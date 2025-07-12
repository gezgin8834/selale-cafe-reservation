import React from "react";
import "../styles/LegalPages.css"; 


const CerezPolitikasi = () => {
  return (
    <div className="legal-container py-4">
      <h3 className="mb-3">Çerez Politikası</h3>
      <p>
        Bu web sitesi, kullanıcı deneyimini geliştirmek amacıyla çerezler
        kullanmaktadır. Çerezler, tarayıcınıza küçük dosyalar olarak
        yerleştirilen metinlerdir.
      </p>

      <h3>Kullanılan Çerez Türleri</h3>
      <ul>
        <li>
          <strong>Zorunlu Çerezler:</strong> Temel fonksiyonları sağlamak için
          gereklidir.
        </li>
        <li>
          <strong>İstatistik Çerezleri:</strong> Site kullanımını analiz eder
          (Google Analytics gibi).
        </li>
        <li>
          <strong>Tercih Çerezleri:</strong> Dil, tema gibi tercihlerinizi
          hatırlar.
        </li>
      </ul>

      <h3>Çerezleri Yönetme</h3>
      <p>
        Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman
        devre dışı bırakabilir ya da silebilirsiniz. Ancak bazı çerezlerin
        devre dışı bırakılması site işlevselliğini etkileyebilir.
      </p>

      <p className="mt-4">
        Bu politikayı dilediğiniz zaman güncelleyebiliriz. Güncellemeler
        web sitemizde yayınlandığı anda yürürlüğe girer.
      </p>
    </div>
  );
};

export default CerezPolitikasi;

