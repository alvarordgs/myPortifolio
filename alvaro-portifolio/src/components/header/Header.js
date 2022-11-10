import React from "react";
import "./../header/header.css";
import iconAbout from "./../../assets/icons/about.svg";
import iconExperience from "./../../assets/icons/experience.svg";
import iconSkills from "./../../assets/icons/skills.svg";
import iconProjects from "./../../assets/icons/projects.svg";
import iconContact from "./../../assets/icons/contact.svg";
import "./../header/script";

const Header = () => {
  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li className="list active">
            <a href="#">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="text">About Me</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ion-icon name="flash-outline"></ion-icon>
              </span>
              <span className="text">Skills</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ion-icon name="briefcase-outline"></ion-icon>
              </span>
              <span className="text">Experience</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ion-icon name="bulb-outline"></ion-icon>
              </span>
              <span className="text">Projects</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
