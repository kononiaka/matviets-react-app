import React from "react";
import Links from "./../links/Links";

const Exhibition = () => {
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

export default Exhibition;
