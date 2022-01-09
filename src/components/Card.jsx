import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import "./card.css";
const Card = ({ icon, projects, title, desc }) => {
  const context = useContext(ThemeContext);
  const [{ theme, isDark }, toggleTheme] = context;
 
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.5 }}
      className={isDark ? "light-border light-shadow service-card " : "dark-border dark-shadow service-card "}
    >
      <div 
            className="d-flex flex-column align-items-center justify-content-center  m-2 py-3"
            >
        <div>
          <img className="w-100 contain px-3" src={icon} alt="" />
        </div>
        <div>{projects}</div>
        <div>
          <h3>{title}</h3>
        </div>
        <div className="w-75">
          <p>{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
