import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="#">
        {props.brand}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Courses
            </a>
            <div
              className="dropdown-menu text-center"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="services">
                Open Water Diver Course
              </a>
              <a className="dropdown-item" href="services">
                Advanced Open Water Diver Course
              </a>
              <a className="dropdown-item" href="services">
                Rescue Diver
              </a>
              <a className="dropdown-item" href="services">
                Divemaster
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                PADI Specialties
              </a>
            </div>
          </li>
          {
            // loop through links
            props.links.map((linkName) => (
              // for every link, generate an 'li'
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  {linkName}
                </a>
              </li>
              
            ))
            
          }
          
        </ul>
        {props.children}
      </div>
    </nav>
  );
};

export default NavBar;