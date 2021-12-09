import React from "react";

const Card = (props) => {
  //   console.log(props.imgsrc);
  return (
    <>
      <div className="col-md-4 col-10 mx-auto cardCus">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body cardCus">
            <h5 className="card-title cardHeading">COMING SOON</h5>
            <a className="btn btn-Cus">0.1 ETH</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
