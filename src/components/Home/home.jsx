import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/img-m.svg';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import Loader from 'react-loaders'
import './home.scss'
import Logo from './Logo/Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'c', 'h', 'a', 'e', 'l', ',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.'
  ]

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass
  //     ('text-animate-hover')
  //   }, 4000)
  // }, []) 
  
  useEffect(() => {
    setTimeout(() => {
          setLetterClass
          // eslint-disable-next-line no-unexpected-multiline
          ('text-animate-hover')
        }, 4000)
    
  }, [])
  


  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>
          <br />
          <span className={`${letterClass} _14`}>I</span>
          <span className={`${letterClass} _15`}>&apos;</span>
          <span className={`${letterClass} _16`}>m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> NodeJs / Frontend Developer / ReactJs Expert / JavaScript / Web3 Enthusiast </h2>
        <Link to="/contact" className="flat-button">
          {' '}
          CONTACT ME{' '}
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Home
