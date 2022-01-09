import {
  faMapMarker,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./social.css";
import "./contact.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      try {
        await axios.post("/contact", { name, email, message });
        alert("messege send successfully!");
        setName('')
        setEmail('')
        setMessage('')

      } catch (error) {
        alert(error);
      }
    } else {
      alert("Please provide all details");
    }
  };

  return (
    <div id="contact" className="container input-container ">
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
            <form action="">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Message"
                  className="message"
                />
              </div>
              <div>
                <motion.button
                  variants={btnVariant}
                  whileHover="whileHover"
                  className="btn-submit"
                  type="submit"
                  value="Send"
                  onClick={formHandler}
                  
                >
                  Send
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
