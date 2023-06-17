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
          I am a very ambitious front-end developer looking for a role in a start-up or an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I am quietly confident, naturally curious and perpetually working on
          improving my skills everyday and one design problem at a time.
        </p>
        <p>
          If i were to define myself in one sentence that would be a
          tech-obsessed person who is both persistent and consistent in building
          and problem solving.
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
