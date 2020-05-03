import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-menu">Menu</div>
      <div className="row">
        <div className="col-3">
          <h4 className="header">MATVIETS VLADIMIR</h4>
        </div>
        <div className="col">
          <h5 className="header-span disabled">2020</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
