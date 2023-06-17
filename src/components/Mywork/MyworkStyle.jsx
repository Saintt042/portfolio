import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  left: 15%;
  top: 10%;
  color: #ffd700;
  


  .pro,
  .links {
    // text-align: center;
    font-size: clamp(1rem, 2vw, 2rem);
    margin-bottom: 9px;
  }

  li {
    list-style-type: none;
    text-decoration: none;
  }

  .links :hover {
    color: white;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  .head {
    
  }

  /* Carousel Styles */
  .carousel {
    width: 100%;
    max-width: 500px;
   
  }

  .carousel-group {
    display: flex;
	// flex-direction: row;
    // justify-content: space-between;
  }

  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    z-index: 2;
    transition: background-color 0.3s ease;
  }

  .carousel-arrow:hover {
    background-color: #333;
  }

  .carousel-arrow-prev {
    left: -40px;
	border-radius: 89px;
  }

  .carousel-arrow-next {
    right: -40px;
	border-radius: 89px;
  }

  @media screen and (max-width: 1024px) {
   
    .carousel {
      max-width: 800px;
    }
  }

  @media screen and (max-width: 768px) {
    
      font-size: 5px;
    
    .carousel {
      max-width: 600px;
    }
  }

  @media screen and (max-width: 575px) {
    
    .carousel {
      max-width: 400px;
    }
  }

  @media screen and (max-width: 480px) {
    .carousel {
      max-width: 300px;
    }
  }
`;
