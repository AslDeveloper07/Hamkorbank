import React from "react";
import { HamkorMobileData } from "./DataBase";
import "./../style/index.css";

const Hamkormobile = () => {
  return (
    <div className="mobile-ilove container">
      {HamkorMobileData.map((item, index) => (
        <div key={index} className="ilova-text">
          <h2>{item.hamkorIlova}</h2>
          <ul>
            {item.ilovaHaqida.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <div className="QRCode">
            <img className="QR" src="https://hamkorbank.uz/assets/images-cache/qr/physical-qr-new.b5ccad8a.webp" alt="QR code" />
            <div className="QRcode_text">
              <h5>{item.mobileBank}</h5>
              <p>{item.mobileBankQR}</p>
            </div>
          </div>
        </div>
      ))}
      <img
        src="https://hamkorbank.uz/assets/images-cache/mobile-app/mobile_app_%D1%81_xl.e625cf8a.webp"
        alt="this is image" className="mobilePhone"
      />
    </div>
  );
};

export default Hamkormobile;
