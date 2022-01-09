import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import menuItems from "./navbar.data";
import "./navbar.css";
import {MdDarkMode} from 'react-icons/md';
import {BsFillSunFill} from 'react-icons/bs';
import { ThemeContext } from "../context/theme";
import {IoIosMenu} from 'react-icons/io';
const Navbar = () => {
  const context = useContext(ThemeContext);
  const [{ theme, isDark }, toggleTheme] = context;

  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNavHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        transition: "all 0.5s ease-out",
      }}
    >
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="navbar-div d-flex justify-content-between mx-3  p-1  align-items-center flex-wrap
        "
      >
        <div className="d-flex justify-content-between ">
          <img src={isDark?"/images/zafar-logo.png":"/images/zafar-logo-white.png"} alt="logo" className="logo" />
        </div>
        <div className="burger">
        <a
              className="theme-btn mobile-dark-light-btn"
              onClick={toggleTheme}
            >
              {isDark ? <BsFillSunFill size={30}/> : <MdDarkMode size={30}/>}
            </a>
          <IoIosMenu className="io-menu"  size={40} onClick={openNavHandler} />

        </div>
        <div className="break"></div>

        <div
          className={
            isNavOpen
              ? "navbar-links navlinks-mobile show"
              : "navbar-links navlinks-mobile"
          }
        >
          <ul
            className={
              isNavOpen
                ? "d-flex align-items-center navlinks-mobile show"
                : "d-flex align-items-center navlinks-mobile"
            }
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-around",
            }}
          >
            {menuItems.map(({ path, label }, index) => (
              <li key={index}>
                <ScrollLink
                  activeClass="active"
                  to={path}
                  spy={true}
                  offset={-70}
                  duration={500}
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
            <a
              className="theme-btn desktop-dark-light-btn"
              onClick={toggleTheme}
            >
              {isDark ? <BsFillSunFill size={37}/> : <MdDarkMode size={37}/>}
            </a>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
