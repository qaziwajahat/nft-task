import React, { useState } from "react";
import "./stylee.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="accordion-item ">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="inline">{title}</div>
            <div className="inline">{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
