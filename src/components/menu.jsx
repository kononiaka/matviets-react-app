import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <a class="nav-link active " href="javascript:void(0)">
            Home
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link" href="javascript:void(0)">
            Works
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link" href="javascript:void(0)">
            About1
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link" href="javascript:void(0)">
            Exhibition
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link" href="javascript:void(0)">
            Store
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link" href="javascript:void(0)">
            Contact
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link" href="javascript:void(0)">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    );
  }
}

export default Menu;
