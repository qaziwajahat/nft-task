import React from "react";
import "./stylee.css";
import Accordion from "./Accordion";
import { accordionData } from "./AccordionData";
const Roadmap = () => {
  return (
    <>
      <div id="Roadmap" className="dataa">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <h1 className="homeHeading2">NFT'S REALESTATE ROADMAP</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                className="iimage"
                src="https://secureservercdn.net/50.62.172.157/kb6.1b7.myftpupload.com/wp-content/uploads/2021/11/5.png"
                alt="No"
              />
            </div>
            <div className="col-md-6">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Roadmap;
