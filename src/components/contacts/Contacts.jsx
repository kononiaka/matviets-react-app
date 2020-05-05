import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <>
      <div className="col text-container">
        <h6 className="general-inquriries">GENERAL INQUIRIES</h6>
        <h6 className="general-inquriries-mail">
          vladimirmatvietsart@gmail.com
        </h6>
        <button className="message-send">Send a message</button>
      </div>
    </>
  );
};

export default Contacts;
