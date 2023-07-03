import React from "react";
import logo from "../../assets/img/CINEMA-PARADISO.png";
import search from "../../assets/img/HomePage/search.png";
import menu from "../../assets/img/misc/filter-left.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="nav_bar">
          <ul className="nav_list">
            <li>
              <div className="hm">
                <input type="text" placeholder="Search Here" />
                <a href="">
                  <img src={search} width="18" alt="search" />
                </a>
              </div>
            </li>
            <li>
              <Link to="/Category">Category</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishist</Link>
            </li>
          </ul>
        </nav>

        <div id="dropdown">
          <button id="dropbtn">
            <img id="dropdown" src={menu} alt="dropdown" />
          </button>
          <ul id="menu">
            <li>
              <Link to="/Category">Category</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishist</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
