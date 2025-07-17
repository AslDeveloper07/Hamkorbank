import React from 'react'
import { NavbarData } from './DataBase';
import './../style/index.css'

const Navbar = () => {
  return (
    <header className='header'>
      <nav className='container'>
     <div>
       <img
        src={NavbarData.logo}
        alt="Hamkorbank Logo"
      />

      <ul>
        {
          NavbarData.links.map((navItem, inx)=>(
            <li key={inx} className='navItem'>
              {navItem}
            </li>
          ))
        }
      </ul>
     </div>
    </nav>
    </header>
  );
};

export default Navbar
