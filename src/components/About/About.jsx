import { faCss3, faFigma, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import './About.scss'
import resume from "../../assets/images/resume.pdf";
import { BsDownload } from "react-icons/bs";

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
          setLetterClass
          // eslint-disable-next-line no-unexpected-multiline
          ('text-animate-hover')
        }, 3000)
    
  }, [])
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
        Welcome! I&apos;m Michael, an up-to-date frontend developer with a passion for creating stunning and user-friendly websites. With a strong focus on utilizing the latest cutting-edge technologies, I specialize in developing both mobile and desktop designs that are visually appealing and highly functional.
        </p>
        <p>
        My expertise lies in a wide range of technologies, with a particular emphasis on ReactJS, NodeJS, TypeScript, and VueJS. I have extensive experience working with various frontend libraries, allowing me to leverage their capabilities to deliver outstanding results. Additionally, I am proficient in popular CSS frameworks such as Bootstrap and Tailwind, enabling me to create responsive and optimized layouts.
        </p>
        <p>
        One of my strengths is my excellent communication skills. I understand the importance of effective collaboration and actively engage with clients and team members to ensure a smooth development process. I believe that clear and open communication is the key to building strong working relationships and delivering projects that exceed expectations.
        </p>
        <p>
          If i were to define myself in one sentence that would be a
          tech-obsessed person who is both persistent and consistent in building
          and problem solving.
        </p>
        <p>
        As a lifelong learner, I am constantly seeking remote opportunities to further enhance my skills and expand my knowledge in the rapidly evolving field of frontend development. I am eager to embrace new technologies and stay updated with the latest industry trends, always striving to deliver innovative solutions.
        </p>
        <p>
        I am passionate about my work and take pride in delivering high-quality code that is both efficient and maintainable. I thrive in dynamic environments that foster creativity and problem-solving. With a strong attention to detail and a drive for perfection, I am dedicated to creating websites that not only meet the requirements but also provide an exceptional user experience.
        </p>
        <p>
        In conclusion, I am always ready to leverage my skills and expertise to assist you in achieving your dream website. Whether it&apos;s a personal project or a business endeavor, I am committed to bringing your vision to life and exceeding your expectations. I look forward to collaborating with you and discovering how I can best contribute to your success.
        </p>
        <p>
        Thank you for considering my profile, and I can&apos;t wait to embark on this exciting journey with you!
        </p>
        <a href={resume} download className="flat-button">Download Résumé <BsDownload /> </a>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faReact} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faGitAlt} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faCss3} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faFigma} color="#EC4E28" />
          </div>

        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About
