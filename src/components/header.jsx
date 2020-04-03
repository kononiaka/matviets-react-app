import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h4 className="header">
          VLADIMIR MATVIETS <span className="header-span">2020</span>
        </h4>
      </React.Fragment>
    );
  }
}

export default Header;
