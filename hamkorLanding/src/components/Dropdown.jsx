import React, { useState } from "react";
import { GiWireframeGlobe } from "react-icons/gi";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("O'zbek");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (lang) => {
    setSelected(lang);
    setIsOpen(false);
  };

  const languages = ["O‘zbek", "Русский", "English"];

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={toggleDropdown}>
        <GiWireframeGlobe className="dropdown__icon" />
        <span>{selected}</span>
      </button>

      {isOpen && (
        <ul className="dropdown__menu">
          {languages.map((lang, i) => (
            <li
              key={i}
              className="dropdown__item"
              onClick={() => handleSelect(lang)}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
