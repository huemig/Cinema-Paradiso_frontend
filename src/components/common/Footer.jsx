import React from "react";
import logo from "../../assets/img/CINEMA-PARADISO.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img src={logo} alt="logo" />
        <p>
          Cinema paradise is the world's leading community to share grow and get
          hired
        </p>
        <p>CONTACT</p>
        <p>email: zonda@cinemaparadise.com | Hotline: +1 800 999 6954</p>
        <hr />
        <p>Cinema Paradiso - 2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
