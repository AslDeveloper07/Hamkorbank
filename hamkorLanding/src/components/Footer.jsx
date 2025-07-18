// src/components/Footer.jsx
import React from "react";
import { footerData } from "./DataBase";
import Button from "./Button";

const Footer = () => {
  return (
   <div className="foot">
     <footer className="footer container">
      <div className="footer__contact">
        <ul>
          {footerData.contact.callCenter.map((number, i) => (
            <li key={i}>{number}</li>
          ))}
          <p>Aloqa markazi:</p>
        </ul>
        {footerData.contact.trustPhone}
        <p>Ishonch telefoni:</p>
        <Button name={footerData.contact.corruptionReport} />
        {/* <p>{footerData.contact.corruptionReport}</p> */}
      </div>

      <div className="footer__links">
        {/* <h3>Havolalar</h3> */}
        <ul>
          {footerData.links.map((link, i) => (
            <li key={i}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer_links2">
        {/* <h3>Ijtimoiy tarmoqlar</h3> */}
        <ul>
          {footerData.links2.map((link2, i) => (
            <li key={i}>
              {link2}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__mobile">
        <img src={footerData.mobileBank.logo} alt="Mobil ilova" />
        <div>
          <h4>{footerData.mobileBank.title}</h4>
          <p>{footerData.mobileBank.description}</p>
        </div>
      </div>
    </footer>
   </div>
  );
};

export default Footer;
