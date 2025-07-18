import React, { useState } from 'react';
import { NavbarData } from './DataBase';
import './../style/index.css';
import Button from './Button';

const Navbar = () => {
  const [prices, setPrices] = useState([
    { label: "Sotib olish", value: "12.600" },
    { label: "Sotib olish", value: "12.600" }
  ]);

  return (
    <header className='header'>
      <nav className='container'>
        <div className='navLink'>
          <img src={NavbarData.logo} alt="Hamkorbank Logo" />
          <ul>
            {NavbarData.links.map((navItem, inx) => (
              <li key={inx} className='navItem'>
                {navItem}
              </li>
            ))}
          </ul>
        </div>
        <div className='nav-price'>
          <div className='bank-price'>
            <div className='price'>
              {prices.map((item, i) => (
                <div key={i} className='price1'>
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
