import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "./about.css";
const MultipleSlidesExample = () => {
  const style = {
    textAlign: "center",
    padding: "20.rem ",
    fontSize: "3.0rem",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    indicators: true,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <Slide {...properties}>
            <div style={style}>
              <img
                className="imageSlide"
                src="https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/971.png?time=1638047210"
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                src="https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/9045.png?time=1638047210"
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                src="https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/5.png?time=1638047210"
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                src="https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/8969.png?time=1638047210"
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                src="https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/1060.png?time=1638047210"
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                src="https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/1067.png?time=1638047210"
                alt="No"
              />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default MultipleSlidesExample;
