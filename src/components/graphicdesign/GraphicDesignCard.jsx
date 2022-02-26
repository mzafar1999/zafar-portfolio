import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineExpand } from 'react-icons/ai';
import {AnimateSharedLayout, motion} from 'framer-motion';


const Info = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.5s ease;
`;
const Container = styled.div`
    border: 1px solid #5dff9b;
    height: 450px;
    max-width: 320px;
    margin: 2rem;
`


const ImageContainer = styled.div`
margin: 5px;
  height: 350px;
  max-width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  border: 1px solid #35fb98;
  position: relative;
  &:hover ${Info}{
    opacity:1;
  }
`
const Image = styled.img`
    width: 100%;
`
const Title = styled.h3`
    margin-top: 10px;
`



const GraphicDesignCard = ({image,title,openHandler}) => {

    const expandHandler = ()=>{
        
    }
    return (
        <Container>
            <ImageContainer>
            <Image src={image} />
                <Info>
                    <AiOutlineExpand style={{fontSize:'4rem',cursor:'pointer'}} onClick={openHandler}/>
                </Info>
            </ImageContainer>
            <Title> {title} </Title>
        </Container>
        
    )
}

export default GraphicDesignCard
