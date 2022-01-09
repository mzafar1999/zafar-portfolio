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
        className="row d-flex justify-content-arround  h-50 align-items-center shadow p-3 mb-5  rounded"
      >
        <h1>About Me</h1>
        <div className="about-image col-md-6">
          <img src="/images/about-me.png" className="w-75" alt="" />
        </div>
        <div className="about-description col-md-6 text-left-style">
          <div>
            <h2>Muhammad Zafar</h2>
          </div>
          <div>
          MERN Stack fresher.
          </div>
          <div>
            <p>
              Muhammad Zafar is
              software engineering student with 1+ year experience in
              programming. He has been learning MERN stack technologies and has developed some MERN stack applications. More than being web developer, he has good UI and graphic designing skills as he created logos, banner designs for business and commercial cards. <br/>
              Skills:<br/>
              </p>
              <ul className="text-left-style">
                  <li>Front-end: HTML,CSS,Javascript,Bootstrap,Jquery and ReactJS</li>
                  <li>Backend: Node.js, Express</li>
                  <li>Database: Mysql, MongoDB</li>
                  <li>Graphic Design: Adobe Photoshop, Adobe illustrator and Figma</li>
              </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
