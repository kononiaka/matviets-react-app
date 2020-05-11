import React from "react";
import "./Store.css";
import Header from "./../header/Header";
import Links from "./../links/Links";

const Store = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <Links></Links>
          <div className="col-2"></div>
          <div className="col">
            <h6 className="works-text">
              Sorry. This content is currently unavailable
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
