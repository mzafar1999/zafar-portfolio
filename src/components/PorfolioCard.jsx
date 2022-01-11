import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import './portfolio.css'
const PorfolioCard = ({ image, title_link, desc,to,size,under_dev }) => {
    const context = useContext(ThemeContext);
    const [{ theme }] = context;
  return (
    <motion.div whileHover={{scale:1.07}}
      className="large-card m-2 card-style"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        transition: "all 0.5s ease-out",
      }}
    >
      <img className="card-img" src={image} alt="Card image " />
      <div className="card-body">
        <h5 className="card-title"> {title_link} </h5>
        <p className="card-text">{desc}</p>
        <a href={to} target='_blank' className={under_dev?'btn btn-secondary disabled':'btn btn-primary'} role="button" >
          {under_dev?'Under Development':'View Project'}
        </a>
      </div>
    </motion.div>
  );
};

export default PorfolioCard;
