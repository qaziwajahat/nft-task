import React from "react";
import logo from "./logo.jpg";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container-fluid navBar">
      <div className="row">
        <div className=" col-10 mx-auto">
          <nav className=" navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <a className="navbar-brand a" to="/">
                <img src={logo} alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className={`nav-link navLink `} to="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link navLink `}>ABOUT</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link navLink `}>ROADMAP</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link navLink `}>TEAM</a>
                  </li>
                  <li className="nav-item">
                    <button type="button" class="btn btn-warning nav-btn">
                      OPENSEA
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
