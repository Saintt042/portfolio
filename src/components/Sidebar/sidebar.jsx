import { Link, NavLink } from 'react-router-dom';
import LogoM from '../../assets/images/img-m.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoM} alt="logo" />
        <h4 className="sub-logo">SAINTT042</h4>
      </Link>
      <nav>
        <NavLink exact activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact activeClassName="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact activeClassName="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink exact activeClassName="active" className="mywork-link" to="/mywork">
          <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alinwachukwu-michael-17a537235">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/Saintt042">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/SaintMichaell">
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
