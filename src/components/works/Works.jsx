import React from "react";
import { Link } from "react-router-dom";
import Img from "../../img/no_img_works.jpg";
import "./Works.css";

const Works = () => {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <h4 className="header">MATVIETS VLADIMIR</h4>
        </div>
      </div>
      <div className="row">
        <div className="nav flex-column сol-5">
          <Link className="nav-link-custom  " to="/" href="#" alt="1">
            Home
          </Link>

          <Link className="nav-link-custom active" to="/works" href="#" alt="1">
            Works
          </Link>

          <Link className="nav-link-custom" to="/about" href="#" alt="1">
            About
          </Link>

          <Link className="nav-link-custom" to="/exhibition" href="#" alt="1">
            Exhibition
          </Link>

          <Link className="nav-link-custom" to="/store" href="#" alt="1">
            Store
          </Link>
          <Link className="nav-link-custom" to="/contact" href="#" alt="1">
            Contact
          </Link>
          <Link
            className="nav-link-custom"
            to="https://www.facebook.com/vladimir.kononiaka"
            href="#">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
        <div className="works-img col">
          <img src={Img} alt="" />
          <h3 className="works-text">TEXT</h3>
        </div>
      </div>
    </>
  );
};

export default Works;
