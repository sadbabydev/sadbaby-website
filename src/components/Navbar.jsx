import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import  "../css/style.css";


export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand nav-brand">
          <img src={logo} alt="sadbaby" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="#roadmap" className="nav-link">Roadmap</a>
          </li>
          <li>
            <a href="#tokenomic" className="nav-link">Tokenomics</a>
          </li>
          <li>
            <a href="https://github.com/sadbabytoken/sadbabytoken/blob/main/AUDIT_SADBABY.pdf" className="nav-link">Audit</a>
          </li>
          <li>
            <a href="#whitepaper" className="nav-link">Whitepaper</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
