import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";

const leftCardVarients1 = {
  hidden: {
    x: -1450,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
      delay:2
    },
  },
};
const leftCardVarients2 = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
      delay:1

    },
  },
};
const leftCardVarients3 = {
  hidden: {
    x: -550,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
      delay:0
    },
  },
};

const Services = () => {
  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const [ ref, inView ] = useInView();
  const [ ref2, inView2 ] = useInView();
  const [ ref3, inView3 ] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  
  useEffect(() => {
    if (inView2) {
      controls1.start("visible");
    }
    if (!inView2) {
      controls1.start("hidden");
    }
  }, [controls1, inView2]);
  useEffect(() => {
    if (inView3) {
      controls2.start("visible");
    }
    if (!inView3) {
      controls2.start("hidden");
    }
  }, [controls2, inView3]);



  return (
    <div id="services">
      <h5>What I will do for you</h5>
      <h1>Services</h1>
      <div className="container">
        <motion.div className="row" initial="hidden"
            animate={controls}
            ref={ref}>
          <motion.div
            variants={leftCardVarients3}
            
            className="col-xl-4 col-lg-6"
          >
            <Card
              icon="/images/front-end-icon.png"
              projects="3 Projects"
              title="Front End Development"
              desc="I will develop your front-end using HTML,CSS and Javascript or ReactJS"
            />
          </motion.div>
          <motion.div
            variants={leftCardVarients2}
            // initial="hidden"
            // animate={controls1}
            // ref={ref2}
            className="col-xl-4 col-lg-6"
          >
            <Card
              icon="/images/back-end-icon.png"
              projects="10 Projects"
              title="Backend Development"
              desc="Node.js is the tech that I am using for backend and will create RESTFul Api."
            />
          </motion.div>
          <motion.div
            variants={leftCardVarients1}
      
            className="col-xl-4 col-lg-6"
          >
            <Card
              icon="/images/ui-icon.png"
              projects="15 Projects"
              title="UI Designing"
              desc="I do graphic designing stuff using Adobe Photoshop, illustrator & Figma for web."
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
