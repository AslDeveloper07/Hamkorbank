import React from "react";
import "./MobileMenu.scss";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className="menu-card">
        <p>Jismoniy shaxslar uchun</p>

        <details>
          <summary>Kreditlar</summary>
          <ul>
            <li>Avtokredit</li>
            <li>Iste’mol krediti</li>
            <li>Online kredit</li>
          </ul>
        </details>

        <details>
          <summary>Kartalar</summary>
          <ul>
            <li>Humo</li>
            <li>Uzcard</li>
            <li>Visa</li>
          </ul>
        </details>

        <details>
          <summary>Ipoteka</summary>
          <ul>
            <li>Yangi uylar</li>
            <li>Ikkinchi bozordagi uylar</li>
          </ul>
        </details>

        <details>
          <summary>Omonatlar</summary>
          <ul>
            <li>Foizli</li>
            <li>Foizsiz</li>
          </ul>
        </details>

        <details>
          <summary>Valyuta kursi</summary>
          <ul>
            <li>USD</li>
            <li>EUR</li>
            <li>RUB</li>
          </ul>
        </details>

        <details>
          <summary>Yana</summary>
          <ul>
            <li>Mobil ilova</li>
            <li>Hamyon</li>
          </ul>
        </details>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Saytdan qidirish" />
        <ul>
          <li>Shaxsiy kabinet</li>
          <li>Bank ofislari va bankomatlar</li>
          <li>Valyuta kursi</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
