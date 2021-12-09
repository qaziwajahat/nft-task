import React from "react";
import "./stylee.css";
import "react-slideshow-image/dist/styles.css";
import Slide from "./Slide";
import Card from "./Card";

const About = () => {
  const srcImg = [
    "https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/989.png",
    "https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/1067.png",
    "https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/9045.png",
  ];
  return (
    <>
      <div className="dataaa">
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              <h1 className="homeHeading2">TOP REAL ESTATE NFTs</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="dataaa">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row gy-4">
                {srcImg.map((val, ind) => {
                  if (srcImg.length === 0) return <h1>Loading......</h1>;
                  return <Card key={ind} imgsrc={val} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
