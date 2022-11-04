import React from "react";
import "./../header/header.css";

const Header = () => {
  return (
    <div class="header-container">
      <div class="header">
        <nav>
          <ul class="header-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Experience</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
