import { motion, useAnimation } from "framer-motion";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../context/theme";
import PorfolioCard from "./PorfolioCard";
import "./portfolio.css";



const scaleCardVarients = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.2,
      delay:0.25
    },
  },
};

const Portfolio = () => {

  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  const [ref1,inView1] = useInView();
  const [ref2,inView2] = useInView();
  const [ref3,inView3] = useInView();
  const [ref4,inView4] = useInView();
  
  useEffect(() => {
    if(inView1){
      control1.start('visible')
    }
    if(!inView1){
      control1.start('hidden')
    }
  }, [control1,inView1])
  
  useEffect(() => {
    if(inView2){
      control2.start('visible')
    }
    if(!inView2){
      control2.start('hidden')
    }
  }, [control2,inView2])

  
  useEffect(() => {
    if(inView3){
      control3.start('visible')
    }
    if(!inView3){
      control3.start('hidden')
    }
  }, [control3,inView3])

  useEffect(() => {
    if(inView4){
      control4.start('visible')
    }
    if(!inView4){
      control4.start('hidden')
    }
  }, [control4,inView4])


  return (
    <div id="portfolio" className="portfolio container my-5 p-3">
      <div className="row">
          <h1 className="text-white">Portfolio</h1>
        <motion.div variants={scaleCardVarients} initial="hidden" animate={control1} ref={ref1} className="col-xl-3 col-lg-6">
          <PorfolioCard
            image="images/dell-clone-sc.png"
            title_link="Dell Clone"
            desc="Created only with CSS HTML and Javascript."
            to="https://dellclone.000webhostapp.com/"
            size="large"
          />
        </motion.div>
        <motion.div variants={scaleCardVarients} animate={control2} ref={ref2} className="col-xl-3 col-lg-6">
          <PorfolioCard
            image="images/to-do.png"
            title_link="To Do App"
            desc="Created with Javafx library and MySql database."
            size="large"
            to='https://www.youtube.com/watch?v=mznXBz6DFiU'
          />
        </motion.div>
        <motion.div variants={scaleCardVarients} animate={control3} ref={ref3} className="col-xl-3 col-lg-6">
            <PorfolioCard
              image="images/ytd.png"
              title_link="Youtube Downloader"
              desc="Created with ReactJS and loader.to API."
              size="large"
              to='https://loaderto-youtube-downloader.herokuapp.com'
            />
          </motion.div>
          <motion.div variants={scaleCardVarients} animate={control4} ref={ref4} className="col-xl-3 col-lg-6">
            <PorfolioCard
              image="images/e-app.png"
              title_link="MERN E-Commerce App"
              desc="Being Created with MERN Stack technologies..."
              size="large"
              under_dev={true}
            />
          </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
