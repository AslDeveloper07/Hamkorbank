import React, { useState } from 'react';
import { NavbarData } from './DataBase';
import './../style/index.css';
import Button from './Button';

const Navbar = () => {
  // useState orqali linklarni holat sifatida saqlab qo‘yamiz
  const [navLinks] = useState(NavbarData.links);

  return (
    <header className='header'>
      <nav className='container'>
        <div className='navLink'>
          <img
            src={NavbarData.logo}
            alt="Hamkorbank Logo"
          />

          <ul>
            {navLinks.map((navItem, inx) => (
              <li key={inx} className='navItem'>
                {navItem}
              </li>
            ))}
          </ul>
        </div>

        <div className='nav-price'>
          <div className='bank-price'>
            <div className='price'>
              <div className='price1'>
                <p>Sotib olish</p>
                <h5>12.600</h5>
              </div>
              <div className='price1'>
                <p>Sotib olish</p>
                <h5>12.600</h5>
              </div>
            </div>
          </div>

          <Button />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
