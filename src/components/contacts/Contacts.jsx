import React from "react";
import { Link } from "react-router-dom";
import "./Contacts.css";

const Contacts = () => {
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

          <Link className="nav-link-custom" to="/works" href="#" alt="1">
            Works
          </Link>

          <Link className="nav-link-custom " to="/about" href="#" alt="1">
            About
          </Link>

          <Link className="nav-link-custom" to="/exhibition" href="#" alt="1">
            Exhibition
          </Link>

          <Link className="nav-link-custom" to="/store" href="#" alt="1">
            Store
          </Link>
          <Link
            className="nav-link-custom active"
            to="/contact"
            href="#"
            alt="1">
            Contact
          </Link>
          <Link
            className="nav-link-custom"
            to="https://www.facebook.com/vladimir.kononiaka"
            href="#">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
        <div className="col text-container">
          <h6 className="general-inquriries">GENERAL INQUIRIES</h6>
          <h6 className="general-inquriries-mail">
            vladimirmatvietsart@gmail.com
          </h6>
          <button className="message-send">Send a message</button>
        </div>
      </div>
    </>
  );
};

export default Contacts;
