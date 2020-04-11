import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a className="nav-link active " href="#" alt="1">
            Home
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#" alt="1">
            Works
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#" alt="1">
            About
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#" alt="1">
            Exhibition
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#" alt="1">
            Store
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#" alt="1">
            Contact
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    );
  }
}

export default Menu;
