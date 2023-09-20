import { Component } from "react";
import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBars,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

export class Navbar extends Component {
  state = {
    clicked: false,
  };

  toggleButton() {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }

    return this.state.clicked;
  }
  render() {
    return (
      <>
        <div
          className={
            (this.state.clicked ? "navbarLeftSecond" : "navbarLeftFirst") +
            " navbarCustom  text-white bg-dark bg-gradient z-1"
          }
        >
          <div
            className="ps-3 py-1 w-75 h-100 bg-black bg-gradient d-flex flex-column justify-content-between align-items-start"
          >
            <div>
              {" "}
              <ul className="list">
                <li>Search</li>
                <li>Categories</li>
                <li>Area</li>
                <li>Ingredients</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="">
              <div className="d-flex gap-1">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faGlobe} />
              </div>

              <p className="copyright-text">
                Copyright Â© 2019 All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="w-25 py-1 h-100 d-flex flex-column justify-content-between align-items-center">
            {" "}
            <img src={logo} className="w-50" alt="logo" />
            <button onClick={() => this.toggleButton()}>
              <FontAwesomeIcon icon={faBars} color="white" />
            </button>
            <div className="d-flex flex-column">
              <FontAwesomeIcon icon={faGlobe} className="mb-2" />
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
          <div className=""></div>
        </div>
      </>
    );
  }
}
