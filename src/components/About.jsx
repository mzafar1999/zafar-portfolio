import { motion, useAnimation } from "framer-motion";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../context/theme";
import "./about.css";

const aboutVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.5,
    },
  },
};

const About = () => {
  const context = useContext(ThemeContext);
  const [{ isDark }] = context;
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div
      id="about"
      className={
        isDark
          ? "container about-div light-shadow-about mt-5"
          : "container about-div light-shadow-about mt-5"
      }
    >
      <motion.div
        variants={aboutVariants}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="row d-flex justify-content-arround  h-50 align-items-center  p-3 mb-5 "
      >
        <h1>About Me</h1>
        <div className="about-image col-md-6">
          <img src="/images/about-me.png" className="w-75" alt="" />
        </div>
        <div className="about-description col-md-6 text-left-style">
          <div>
            <h2>M.Zafar HAYAT ZADA</h2>
          </div>
          <div>MERN Stack.</div>
          <div>
            <p>
              ☆ Self-Learner MERN Stack Web Developer ☆
              <br />
              Skills:
              <br />
            </p>
            <ul className="text-left-style align-list">
              <li>
                Front-end: HTML, CSS, Javascript, Bootstrap, ReactJS,
                styled-components.
              </li>
              <li>Backend: Node.js, Express</li>
              <li>Database: Mysql, MongoDB</li>
              <li>Comfortable with Graphic Design Softwares: Adobe Photoshop, Adobe illustrator</li>
              <li>
                More: Used libreries are: @Redux Toolkit, Formik, Framer Motion, CryptoJS, JWT
              </li>
              <li>
                Languages: Persian(Native), French (A1), English (B2)
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
