import React, { useState } from "react";

function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <nav>
      <div className="nav-cluster">
        <p className="nav-status">
          <span className="nav-dot" aria-hidden="true"></span>
          Available for full-time, freelance and contract work
        </p>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuActive ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" aria-hidden="true">
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" aria-hidden="true">
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          )}
        </div>
        <ul className={`nav-list ${isMenuActive ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#projects" onClick={closeMenu}>Work</a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
