import React from "react";
import { Link } from "react-router-dom";
import "./Store.css";

const Store = () => {
  return (
    <>
      <div className="container-custom">
        <h4 className="header">MATVIETS VLADIMIR</h4>

        <div className="row">
          <div className="nav flex-column сol-5">
            <Link className="nav-link-custom  " to="/" href="#" alt="1">
              Home
            </Link>

            <Link className="nav-link-custom" to="/works" href="#" alt="1">
              Works
            </Link>

            <Link className="nav-link-custom " to="/about" href="#" alt="1">
              About
            </Link>

            <Link className="nav-link-custom" to="/exhibition" href="#" alt="1">
              Exhibition
            </Link>

            <Link
              className="nav-link-custom active"
              to="/store"
              href="#"
              alt="1">
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
          <div className="col">
            <h6 className="store-text">
              Sorry. This content is currently unavailable
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;