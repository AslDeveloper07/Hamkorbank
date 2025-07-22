import React, { useState } from "react";
import { NavbarData, navtop } from "./DataBase";
import "./../style/index.css";
import Button from "./Button";
import { GoSearch } from "react-icons/go";
import { RiGlasses2Fill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import Dropdown from "./Dropdown";
import HamburgerMenu from "./HamburgerMenu";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [prices, setPrices] = useState([
    { label: "Sotib olish", value: "12.600" },
    { label: "Sotib olish", value: "12.600" },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // yangi state

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
          <ul className="ul">
            {NavbarData.links.map((navItem, inx) => (
              <li key={inx} className="navItem">
                {navItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-price">
            <div className="navDrop">
              <Dropdown  />
            </div>
            <HamburgerMenu checked={isMenuOpen} setChecked={setIsMenuOpen}  />
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
          <Button className="navBtn" />
        </div>
      </nav>
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
