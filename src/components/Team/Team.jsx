import React from "react";
import "./Team.css";
// import "react-slideshow-image/dist/styles.css";
import CardTeam from "./CardTeam";
import { FaTwitter, FaInstagram, FaMask } from "react-icons/fa";
const About = () => {
  const fontStyles = { color: "white", fontSize: "4rem", paddingLeft: "2rem" };
  const srcImg = [
    {
      brand: "NftRealEstate",
      src: "https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/989.png",
    },
    {
      brand: "Nima",

      src: "https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/1007.png",
    },
    {
      brand: "prednot",
      src: "https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/9056.png",
    },
    {
      brand: "NftRealEstate2",
      src: "https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/5.png",
    },
  ];
  return (
    <>
      <div id="Team" className="dataTeam">
        <div className="container">
          <div className="row">
            <div className="col-8 d-flex">
              <h1 className="homeHeading2">
                <span className="span-color"> NFTREALESTATE </span>TEAM
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="dataTeam">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row gy-4">
                {srcImg.map((val, ind) => {
                  if (srcImg.length === 0) return <h1>Loading......</h1>;
                  return (
                    <CardTeam key={ind} imgsrc={val.src} brand={val.brand} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dataTeam2 bg">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <h1 className="homeHeading2">
                <span className="span-color"> JOIN </span>OUR COMMUNITY
              </h1>
              <p className="TeamPara">
                Come join the community now to follow our latest announcements,
                and participate
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dataFooter ">
        <div className="container">
          <div className="row">
            <div className="col-7 mx-auto">
              <p className="TeamPara">Copyright © 2021 nftsrealestate</p>
            </div>
            <div className="col-5 mx-auto">
              <FaMask style={fontStyles} />
              <FaTwitter style={fontStyles} />
              <FaInstagram style={fontStyles} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
