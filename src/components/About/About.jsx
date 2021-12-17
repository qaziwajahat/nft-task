import React from "react";
import "./about.css";
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
      <div id="About" className="dataaa">
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex">
              <h1 className="homeHeading2">
                <span className="span-color"> MEET </span>THE NFT'S REAL ESTATE
                ART
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="dataaa">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row gy-1">
                <Slide />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dataaa">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex">
              <h1 className="homeHeading2">
                <span className="span-color"> TOP </span>REAL ESTATE NFTs
              </h1>
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
