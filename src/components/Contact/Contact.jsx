import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import './Contact.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    const templateParams = {
      name,
      email,
      subject,
      message,
    }

    emailjs
      .sendForm(
        'gmail',
        'template_q0uch08',
        templateParams,
        'ekKvxC14WvHh9iJqe'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities, especially ambitious or
            large projects. However, if you have other request or questions
            don&apos;t hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form action="submit" ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    onSubmit={sendEmail}
                  />
                </li>
              </ul>
            </form>
          </div>
          <div className="info-map">
            Alinwachukwu Michael
            <br />
            17 Black Street, Ikeja,
            <br />
            Enugu state,
            <br />
            Nigeria.
            <br />
            <span>saintmichaell42@gmail.com</span>
          </div>
          <div className="map-wrap"></div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
