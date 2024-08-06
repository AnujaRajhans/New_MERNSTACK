import React from "react";
import './Navbar.css';
import logo from "../assets/logo.jpg";
function Nav() {
  return (
    <div>
      <nav>
      <img src={logo} alt="Logo" style={{ height: "100px" }}></img>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/address">Address</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
