import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <h4 className="header ">VLADIMIR MATVIETS</h4>
          </div>
          <div className="col">
            <h5 className="header-span  ">2020</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
