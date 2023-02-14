import React from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import Info from "./Info";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Info />
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={Logo} alt="" />
          </Link>
        </div>
        <div className="menus">
          <ul className="list">
            <Link to="/" className="btn">
              home
            </Link>
            <Link to="vehicle" className="btn">
              vehicles
            </Link>
            <Link to="about" className="btn">
              About Us
            </Link>
            <Link to="contact" className="btn">
              contact
            </Link>
          </ul>
        </div>
        <div className="mob-menu">
          <span className="ham-menu">
            <FaBars
              className="ham"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </span>
          <article className="mob-slide">
            <ul className={open ? "ul-list-active" : "ul-list"}>
              <div className="close-cont">
                <FaRegWindowClose
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="close"
                />
              </div>
              <Link to="/" className="btn">
                home
              </Link>
              <Link to="vehicle" className="btn">
                vehicles
              </Link>
              <Link to="about" className="btn">
                About Us
              </Link>
              <Link to="contact" className="btn">
                contact
              </Link>
            </ul>
          </article>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
