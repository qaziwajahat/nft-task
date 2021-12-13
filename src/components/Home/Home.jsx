import React from "react";
import "./style.css";
import a from "./a.png";

const Home = () => {
  return (
    <>
      <div id="Home" className="main">
        <div className="container ">
          <div className="row">
            <div className=" col-12 mx-auto">
              <p className="homePara">WELCOME TO NFT REAL ESTATE</p>

              <h1 className="homeHeading">NftsRealEstate</h1>

              <div className="row">
                <div className="col-md-4   "></div>
                <div className="col-md-2 mx-auto nav-btn-posi">
                  <button type="button" class="btn btn-warning nav-btn ">
                    Discord
                  </button>
                </div>
                <div className="col-md-2 mx-auto nav-btn-posi">
                  <button type="button" class="btn btn-warning nav-btn">
                    Twitter
                  </button>
                </div>
                <div className="col-md-4   "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="data">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
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
            <div className="col-md-6 ">
              <img className="image" src={a} alt="Pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
