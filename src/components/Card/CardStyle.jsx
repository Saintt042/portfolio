import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  width: 25rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
  
  cursor: pointer;

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
      font-size: clamp(0.7rem, 1.5vw, 1rem);
      margin-top: 5px;

    }
  }
`;
