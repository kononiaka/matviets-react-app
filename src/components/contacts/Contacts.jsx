import React from "react";
import "./Contacts.css";
import Header from "./../header/Header";
import Links from "./../links/Links";

const Contacts = () => {
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="row">
          <Links></Links>
          <div className="col-2"></div>
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
