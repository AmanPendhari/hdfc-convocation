import React from "react";
import "../styles/Header.css";
import logo from "../images/hdfc_logo.png";
import convologo from "../images/bounce_batch_2022.png";
function Header() {
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="" srcset="" />
      <img className="convologo" src={convologo} alt="" srcset="" />
      <p>
        Begins in <span>4d 18h</span>
      </p>
    </div>
  );
}

export default Header;
