import React, { Component } from "react";
import "./Works.css";
import { Link } from "react-router-dom";
import Gallery from "../gallery/Gallery";
import Header from "../header/Header";

class Works extends Component {
  state = {
    images: [
      { id: 1, src: require("../../img/no_img.jpg") },
      { id: 2, src: require("../../img/no_img.jpg") },
      { id: 3, src: require("../../img/no_img.jpg") },
      { id: 4, src: require("../../img/no_img.jpg") },
      { id: 5, src: require("../../img/no_img.jpg") },
      { id: 6, src: require("../../img/no_img.jpg") },
    ],
  };
  render() {
    return (
      <>
        <div className="container-custom">
          <Header></Header>
          <div className="row">
            <div className="nav flex-column col-3">
              <Link className="nav-link-custom" to="/" href="#" alt="1">
                Home
              </Link>

              <Link
                className="nav-link-custom active"
                to="/works"
                href="#"
                alt="1">
                Works
              </Link>

              <Link className="nav-link-custom" to="/about" href="#" alt="1">
                About
              </Link>

              <Link
                className="nav-link-custom"
                to="/exhibition"
                href="#"
                alt="1">
                Exhibition
              </Link>

              <Link className="nav-link-custom" to="/store" href="#" alt="1">
                Store
              </Link>
              <Link className="nav-link-custom" to="/contact" href="#" alt="1">
                Contact
              </Link>
              <a
                className="nav-link-custom"
                href="https://www.instagram.com/matviets.vladimir.artist/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="col-8">
              <Gallery elements={this.state.images} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Works;
