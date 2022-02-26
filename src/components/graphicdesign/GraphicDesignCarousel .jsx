import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai';


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
  background-color: rgba(0, 0, 0, 0.048);
  transition: all 0.5s ease;
`;
const Container = styled.div`
    max-height: 600px;
    max-width: 80vw;
    margin: 2rem auto;
    @media (max-width: 780px) {
    margin: 0px;
    max-width: 100%;


  }

`


const ImageContainer = styled.div`
  max-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity:1;
  }
  @media (max-width: 780px) {
    margin: 20px 0;
    

  }
`
const Image = styled.img`
    width: 50%;

`



const GraphicDesignCarousel  = ({image,openHandler}) => {

   
    return (
        <Container>
            <ImageContainer>
            <Image src={image} />
                <Info>
                  <div><AiOutlineCloseCircle onClick={openHandler}/></div>
                  <div></div>
                  <div></div>
                </Info>
            </ImageContainer>
        </Container>
        
    )
}

export default GraphicDesignCarousel 
