import React from "react";
import "./Contacts.css";
import Links from "./../links/Links";

const Contacts = () => {
  return (
    <>
      <div className="container-custom">
        <h4 className="header">MATVIETS VLADIMIR</h4>

        <div className="row">
          <div className="links">
            <Links></Links>
          </div>
          <a
            className="nav-link-custom"
            href="https://www.instagram.com/matviets.vladimir.artist/">
            <i className="fab fa-instagram"></i>
          </a>

          <div className="col text-container">
            <h6 className="general-inquriries">GENERAL INQUIRIES</h6>
            <h6 className="general-inquriries-mail">
              vladimirmatvietsart@gmail.com
            </h6>
            <button className="message-send">Send a message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
