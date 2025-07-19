import React from "react";
import { GridData } from "./DataBase";
import Button from "./Button";

const Grids = () => {
  return (
    <div className="gigant container">
      <h6 style={{ fontSize: "36px", fontWeight: "500", marginTop: "60px" }}>
        Ommabop mahsulotlar
      </h6>
      <div className="Grid container">
        {GridData.map((grid, i) => (
          <div key={i} className={grid.classname}>
            <div className="gridientText">
              <div className="gridText">
                <h3>{grid.gridTitle}</h3>
                <p>{grid.gridPoragraph}</p>
              </div>
              <Button name={grid.gridBtn} className="gridBtn" />
            </div>

            <img src={grid.image} alt={grid.gridTitle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grids;
