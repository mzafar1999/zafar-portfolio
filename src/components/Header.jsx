import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/theme";
import { Container,InfoContainerParent,InfoContainer,ImageContainer,ButtonContainer,Title1,Title3 } from "./HeaderStyledComponents";
import { buttonVariants,heroVariants,imageVariants } from "./HeaderAnimation";


const Header = () => {
  const context = useContext(ThemeContext);
  const [{ isDark }] = context;
  return (
    <Container as={motion.div} className="container-fluid" id="home">
      <InfoContainerParent className="row d-flex justify-content-around align-items-center header-content">
        <InfoContainer
          as={motion.div}
          className="hero col-md-6 my-3"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <Title3>Hello,</Title3>
          <Title1>I'M Zafar</Title1>
          <Title3>MERN Stack Developer</Title3>

          <ButtonContainer>
            <motion.button
              variants={buttonVariants}
              whileHover="whilehover"
              className={isDark ? "btn btn-dark m-2" : "btn btn-light m-2"}
            >
              Hire me
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="whilehover"
              className={isDark ? "btn btn-dark m-2" : "btn btn-light m-2"}
            >
              Download CV
            </motion.button>
          </ButtonContainer>
        </InfoContainer>
        <ImageContainer className="image col-md-6 ">
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            src="/images/person-background-min.png"
            className="w-100"
            alt="person"
          />
        </ImageContainer>
      </InfoContainerParent>
    </Container>
  );
};

export default Header;
