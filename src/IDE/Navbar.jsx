import React from "react";

import '../App.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">{"</>"}</span>
        <h2>OnlineIDE</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/mycodes">My Codes</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
