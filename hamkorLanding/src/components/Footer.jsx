import React, { useState } from "react";
import { footerData } from "./DataBase";
import Button from "./Button";

const Footer = () => {
  const [contacts, setContacts] = useState(footerData.contact.callCenter);

  return (
    <div className="foot">
      <footer className="footer container">
        <div className="footer__contact">
          <ul>
            {contacts.length > 0 ? (
              contacts.map((number, i) => <li key={i}>{number}</li>)
            ) : (
              <li>📞 Call center mavjud emas</li>
            )}
            <p>Aloqa markazi:</p>
          </ul>

          {footerData.contact.trustPhone && <p>Ishonch telefoni: {footerData.contact.trustPhone}</p>}

          <Button name={footerData.contact.corruptionReport} className="footBtn" />
        </div>

        <div className="footer__links">
          <ul>
            {footerData.links.map((link, i) => (
              <li key={i}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer_item">
          <ul>
            {footerData.links2.map((link2, i) => (
              <li key={i}>{link2}</li>
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
