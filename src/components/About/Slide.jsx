import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "./stylee.css";
const MultipleSlidesExample = () => {
  const style = {
    textAlign: "center",
    // background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    indicators: true,
  };

  return (
    <div>
      <div>
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
  );
};

export default MultipleSlidesExample;
