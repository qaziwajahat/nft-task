import { React } from "react";

import "./home.css";
import a from "./a.png";

const Home = () => {
  return (
    <>
      <div id="Home" className="main">
        <div className="container ">
          <div className="row">
            <div className=" col-md-12 mx-auto ">
              <p className="homePara">WELCOME TO NFT REAL ESTATE</p>

              <h1 className="homeHeading">NftsRealEstate</h1>

              <div className="row">
                <div className="col-md-3   "></div>
                <div className="col-md-3 mx-auto nav-btn-posi">
                  <button type="button" className="btn btn-warning nav-btn ">
                    Discord
                  </button>
                </div>
                <div className="col-md-3 mx-auto nav-btn-posi">
                  <button type="button" className="btn btn-warning nav-btn">
                    Twitter
                  </button>
                </div>
                <div className="col-md-3   "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="data">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto ">
              <div className="d-flex">
                <h1 className="homeHeading2">
                  <span className="span-color">10000</span> UNIQUE REAL ESTATE
                  NFTs
                </h1>
              </div>
              <p className="para">
                <strong>
                  NftsRealEstate represents a collection of 10,000 unique Real
                  Estate assets categorized by level of rarity and ready to
                  control the Realestate on the MetaVerse.
                </strong>
              </p>
              <p className="para">
                <strong>
                  Our ambition is to build a RealEstate community in the
                  MetaVerse and in the real world. work,invest,learn,teach and
                  grow together.
                </strong>
              </p>
              <p className="para">
                <strong>
                  Unique houses with different colors, roof, cars, garage,
                  windows and background.
                </strong>
              </p>
              <p className="para">
                <strong>20 super rare hotels for the heavy investors.</strong>
              </p>
            </div>
            <div className="col-md-6 mx-auto">
              <img className="image" src={a} alt="Pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
