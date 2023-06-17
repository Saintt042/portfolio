import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  width: 25rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
  
  cursor: pointer;
  :hover {
    // border: 2px solid white;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
  }

  figure {
    width: 100%;
    height: clamp(13rem, 20vw, 16rem);
    
    // border: 1px solid red;
    img {
      width: 100%;
      height: 100%;
      // border: 1px solid red;
    }
  }
  .info {
    
    // border: 1px solid red;
    > * {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 7px;
    }

    p {
      font-size: clamp(1rem, 1.5vw, 1rem);
      margin-top: 5px;

    }
  }
`;
