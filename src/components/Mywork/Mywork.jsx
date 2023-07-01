import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '../Card/Card';
import { Container } from './MyworkStyle';
import a from '../../assets/images/moviebg.png';
import b from '../../assets/images/foodbg.png';
import c from '../../assets/images/metabnbbg.png';
import d from '../../assets/images/bg1.png';
import e from '../../assets/images/clipbg.png';
import f from '../../assets/images/fylobg.png';
import bg from "../../assets/images/bg.jpg"

const Mywork = () => {
  const projectList = [
    {
      icon: bg,
      name: 'Ecommerce Web Application',
      desc: 'Includes add to cart functions and also can integrate with any payment system',
      link: (
        <a
        className="flat-button"
          target="_blank"
          rel="noreferrer"
          href="https://zubismart-git-main-saintt042.vercel.app/"
        >
          Check it out!
        </a>
      ),
    },
    {
      icon: a,
      name: 'Movie Application',
      desc: 'This movie application was built using API from OMDB',
      link: (
        <a
        className="flat-button"
          target="_blank"
          rel="noreferrer"
          href="https://my-test-app-6q8p.vercel.app/"
        >
          Check it out!
        </a>
      ),
    },
    {
      icon: e ,
      name: 'A Landing page',
      desc: 'A great landing page for your website',
      link: (

        <a
        className="flat-button"
          target="_blank"
          rel="noreferrer"
          href="https://fylo-landing-page-six-iota.vercel.app/"
        >
          Check it out!
        </a>
      ),
    },
    {
      icon: f, 
      name: 'Landing Page',
      desc: 'A Clipboard Landing page',
      link: (
        <a
        className="flat-button"
          target="_blank"
          rel="noreferrer"
          href="https://clipboard-landing-page-sandy.vercel.app/"
        >
          Check it out!
        </a>
      ),
    },
    {
      icon: d,
      name: 'LinkTree Card',
      desc: 'A linktree Card',
      link: (
        <a
        className="flat-button"
          target="_blank"
          rel="noreferrer"
          href="https://zuri-linktree-nine.vercel.app/"
        >
          Check it out!
        </a>
      ),
    },
    {
      icon: b,
      name: 'Food App',
      desc: 'This is a basic ecommerce foodApp',
      link: (
        <a
        className="flat-button"
          target="_blank"
          rel="noreferrer"
          href="https://food-app-saintt042.vercel.app/"
        >
          Check it out!
        </a>
      ),
    },
    {
      icon: c,
      name: 'AirBnb App',
      desc: 'A simple metabnb App',
      link: (
        <a
        className="flat-button"
          target="_blank"
          rel="noreferrer"
          href="https://metabnb-eta-eight.vercel.app/"
        >
          Check it out!
        </a>
      ),
    },
  ];


  const groupedProjects = projectList.reduce((result, item, index) => {
    const groupIndex = Math.floor(index / 3); // Display 3 cards per group
    if (!result[groupIndex]) {
      result[groupIndex] = [];
    }
    result[groupIndex].push(item);
    return result;
  }, []);

  return (
     <Container>
      <div className="head">
        <h1 className="pro">PROJECTS</h1>
        <p className="pro">These are some interesting and fun projects I have worked on</p>
      </div>
      <section className="projects">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop
          emulateTouch
          showArrows
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-prev">
                Prev
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-next">
                Next
              </button>
            )
          }
        >
          {groupedProjects.map((group, groupIndex) => (
            <div key={groupIndex} className="carousel-group">
              {group.map((item, itemIndex) => (
                <Card
                  key={`${groupIndex}-${itemIndex}`}
                  icon={item.icon}
                  name={item.name}
                  desc={item.desc}
                  link={item.link}
                />
              ))}
            </div>
          ))}
        </Carousel>
        <div className="links">
          <ul>
            <li>
              <a
                className="flat-button"
                target="_blank"
                rel="noreferrer"
                href="https://certificate.terrahq.co/75012M25I16RUE14"
              >
                SideHustle Front-end web development
              </a>
            </li>
            <li>
              <a
                className="flat-button"
                target="_blank"
                rel="noreferrer"
                href="https://www.udemy.com/certificate/UC-e5edf5b8-553d-40bf-b4d4-633fc49f49d8/"
              >
                Udemy Front-end web development
              </a>
            </li>
            <li>
              <a
                className="flat-button"
                target="_blank"
                rel="noreferrer"
                href="https://www.udemy.com/certificate/UC-3f24dc78-fc31-429f-bf02-73452f807cc7/"
              >
                Udemy JavaScript Certificate
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Container>  
  );
};

export default Mywork;
