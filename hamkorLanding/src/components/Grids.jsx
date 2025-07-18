import React from "react";
import { GridData } from "./DataBase";
import Button from "./Button";

const Grids = () => {
  return (
    <div className="Grid container">
      {
        GridData.map((grid, i)=>(
          <div key={i} className={grid.classname}>
           <div className="gridText">
             <h3>{grid.gridTitle}</h3>
            <p>{grid.gridPoragraph}</p>
            <Button name={grid.gridBtn} />
           </div>
           <img src={grid.image} alt={grid.gridTitle} />
          </div>
        ))
      }
    </div>
  );
};

export default Grids;
