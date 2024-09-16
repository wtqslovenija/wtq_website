import React, { useState } from "react";
import "./NavBar.css";
import { NavMenuItems } from "./NavBarItems.jsx";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [navState, setNavState] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const changeNavState = () => {
    if (window.scrollY === 0) {
      setNavState(false);
    } else if (window.scrollY < lastScrollY) {
      setNavState(false);
    } else {
      setNavState(true);
    }
    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", changeNavState);

  const [navMenu, setNavMenu] = useState(false);
  const showNavBar = () => setNavMenu(!navMenu);

  return (
    <nav className="nav-group">
      <div className="menu-icons" onClick={showNavBar}>
        <i className={navMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className={navMenu ? "nav-menu active" : "nav-menu "}>
        {NavMenuItems.map((item, index) => {
          return (
            <div key={index}>
              <hr></hr>
              <NavLink
                className={item.cName}
                to={item.url}
                activeClassName="active"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  showNavBar();
                }}
              >
                {item.title}
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
