import Button from "./Button";
import { CallData } from "./DataBase";

const Calling = () => {
  return (
    <div className="parent container">
      {CallData.map((caldata, i) => (
        <div className={caldata.clasScal} key={i}>
          <div className="textCall">
            <h4>{caldata.text}</h4>
            <img src={caldata.img} alt={caldata.text} />
          </div>
          <div className="pent">
            <p>{caldata.poragraphe}</p>
            <Button name={caldata.callBtn} className="callBtn"/>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calling;
