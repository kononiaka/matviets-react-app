import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <>
      <div className="row">
        <div className="links">
          <a
            className="nav-link-custom"
            href="https://www.instagram.com/matviets_vladimir_artist/">
            <i className="fab fa-instagram"></i>
          </a>
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
