import React, { useState } from "react";
import { NavbarData, navtop } from "./DataBase";
import "./../style/index.css";
import Button from "./Button";
import { p } from "framer-motion/client";
import { GoSearch } from "react-icons/go";
import { RiGlasses2Fill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [prices, setPrices] = useState([
    { label: "Sotib olish", value: "12.600" },
    { label: "Sotib olish", value: "12.600" },
  ]);

  return (
    <header className="header">
      <div className="new">
        <div className="navbar container">
          <ul>
            {navtop.map((navtop, i) => (
              <li key={i}>{navtop}</li>
            ))}
          </ul>

          <div className="navbaritems">
            <div className="icones">
              <GoSearch className="search" />
              <RiGlasses2Fill className="glasses" />
            </div>
            <div className="location">
              <FaMapMarkerAlt className="locationser" />
              <p>Bank ofislari va bankomatlar</p>
            </div>
            <Dropdown/>
            <div className="kabinet">
              <ImUser />
              <p>Shaxsiy kabinet</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="container">
        <div className="navLink">
          <img src={NavbarData.logo} alt="Hamkorbank Logo" />
          <ul>
            {NavbarData.links.map((navItem, inx) => (
              <li key={inx} className="navItem">
                {navItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-price">
          <div className="bank-price">
            <div className="price">
              {prices.map((item, i) => (
                <div key={i} className="price1">
                  <p>{item.label}</p>
                  <h5>{item.value}</h5>
                </div>
              ))}
            </div>
          </div>
          <Button />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
