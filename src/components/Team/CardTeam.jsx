import React from "react";
import "./Team.css";
const CardTeam = (props) => {
  return (
    <>
      <div className="col-md-3 col-10 mx-auto cardCustom">
        <div className="card ">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body bg-black cardCustom">
            <h5 className="card-title cardHeading">{props.brand}</h5>
            <a className="btn btn-Custom">CEO</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTeam;
