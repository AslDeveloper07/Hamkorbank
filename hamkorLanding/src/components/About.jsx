import React from "react";
import { AboutData, AboutDiv } from "./DataBase";
import Button from "./Button";

const About = () => {
  return (
    <div className="parent container">
      <div className="div1">
        {AboutDiv.map((item, index) => (
          <div key={index} className="tilte">
            <h1>{item.aboutTitle}</h1>
            <p>{item.about}</p>
            <Button name={item.btn} />
          </div>
        ))}
      </div>

      {AboutData.map((item, index) => (
        <div key={index} className={item.class}>
          <div className="stat-item">
            <h3>{item.year}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
