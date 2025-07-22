import React, { useState } from "react";

const HamburgerMenu = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input
        hidden
        className="check-icon"
        id="check-icon"
        name="check-icon"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label className="icon-menu" htmlFor="check-icon">
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </label>
    </>
  );
};

export default HamburgerMenu;
