import {
  faMapMarker,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./social.css";
import "./contact.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import emailjs from 'emailjs-com';
const headerVarient = {
  hidden: {
    y: 300,
  },
  visible: {
    y: 0,
    transition: { duration: 1, when: "beforeChildren" },
  },
};

const contentVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 3 },
  },
};

const btnVariant = {
  whileHover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(16, 185, 228, 0.76) ",
  },
};
const Contact = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const formHandler = async (e) => {
    e.preventDefault();
   
      try {
        await emailjs.sendForm('service_c0pyehj','template_elqyklf',e.target,'user_FUA1d1n8uh0cW1d5g0M2F')
        alert('Message sent successfully!')
        document.getElementById("contact-form").reset();
      } catch (error) {
        alert('Something went wrong!')
        document.getElementById("contact-form").reset();
      }
   
  };

  return (
    <div id="contact" className="container input-container">
      <motion.div
        className="row"
        variants={headerVarient}
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        <h1 className="my-5">Contact</h1>
        <motion.div variants={contentVarient} className="row contact my-5">
          <div className="col-md-6">
            <div className="d-flex my-3">
              <div>
                <FontAwesomeIcon
                  icon={faMapMarker}
                  size="3x"
                  className="social-icon m-1 social-icon-large social-icon-shadow "
                />
              </div>
              <div className="mx-4">
                <h3>Address</h3>
                <p>Phase-1 Hayatabad, Peshawar, Pakistan.</p>
              </div>
            </div>
            <div className="d-flex my-2">
              <div>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="3x"
                  className="social-icon m-1 social-icon-large social-icon-shadow "
                />
              </div>
              <div className="mx-4">
                <h3>Phone</h3>
                <p>(+92) 305-943-6671</p>
              </div>
            </div>
            <div className="d-flex my-2">
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="3x"
                  className="social-icon social-icon-large m-1 social-icon-shadow "
                />
              </div>
              <div className="mx-4">
                <h3>Email</h3>
                <p>m.zafarhayatzada@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 send-message">
            <form onSubmit={formHandler} id='contact-form'>
              <div>
                <input
                  type="text"
                  name='name'
                 
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name='email'
                 
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  name='message'
               
                  placeholder="Message"
                  className="message"
                />
              </div>
              <div className="btn-submit">
                <input                   
                  type="submit"
                  value="Send"                  
               / >
                 
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
