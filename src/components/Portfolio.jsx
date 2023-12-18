import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
      delay: 0.25,
    },
  },
};

const Portfolio = () => {
  const control1 = useAnimation();
  

  const [ref1, inView1] = useInView();
 

  useEffect(() => {
    if (inView1) {
      control1.start("visible");
    }
  }, [control1, inView1]);



  const projectsData = [
    {
      id:1,
      image: "images/dell-clone-sc.png",
      title_link: "Dell Clone",
      desc: "Created only with CSS HTML and Javascript.",
      to: "https://dellclonezafar.000webhostapp.com/",
      size: "large",
    }, {
      id:2,
      image:"images/to-do.png",
            title_link:"To Do App",
            desc:"Created with Javafx library and MySql database.",
            size:"large",
            to:"https://www.youtube.com/watch?v=mznXBz6DFiU"
    }, {
      id:3,
      image:"images/ytd.png",
      title_link:"Youtube Downloader",
      desc:"Created with ReactJS and loader.to API.",
      size:"large",
      to:"https://loaderto-youtube-downloader.herokuapp.com",
    }, {
      id:4,
      image:"images/e-app.png",
      title_link:"MERN E-Commerce App",
      desc:"Being Created with MERN Stack...",
      size:"large",
      under_dev:true,
      to:"https://zecommerce.netlify.app/",
    }, {
      id:5,
      image:"images/ecars.png",
            title_link:"Explore Cars",
            desc:"Created with ReactJS and used ReduxJS for state management.",
            size:"large",
            under_dev:false,
            to:"https://explorecars.herokuapp.com/"
    },
  ];

  return (
    <div id="portfolio" className="portfolio container my-5 p-lg-3">
      <div className="row no-gutters">
        <h1 className="text-white">Portfolio</h1>
        {
          projectsData.map((project) => {
            return (
              <motion.div
              variants={scaleCardVarients}
              initial="hidden"
              animate={control1}
              ref={ref1}
              className="col-xl-3 col-lg-6 col-6 "
            >
              <PorfolioCard
              {...project}
              />
            </motion.div>
            )
          })
        }
       
      
      </div>
    </div>
  );
};

export default Portfolio;
