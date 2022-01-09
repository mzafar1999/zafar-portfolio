import styled from "styled-components";

export const Container = styled.div ``;
export const InfoContainerParent = styled.div `
    h1{
        font-family: 'Great Vibes', cursive;
    }
    @media (max-width:768px) { 
        flex-direction: column-reverse !important;
}
`;
export const InfoContainer = styled.div `
  margin: 0 auto !important;

  @media (min-width: 1340px) {
    position: relative;
    top: -80px;
    h1 {
      font-size: 5rem;
    }
  }
`;
export const ImageContainer = styled.div `
    position: relative;

`;
export const ButtonContainer = styled.div ``;
export const Title1 = styled.h1 ``;
export const Title3 = styled.h3 ``;