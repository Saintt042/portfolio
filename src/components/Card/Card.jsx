import PropTypes from 'prop-types';
import { Container } from './CardStyle';

const Card = ({ icon, name, desc, link }) => {
  return (
    <Container>
      <figure>
        <img src={icon} alt="Project" />
      </figure>

      <section className="info">
        <div>
          <p>{name}</p>
          <p>{desc}</p>
          <p>{link}</p>
        </div>
      </section>
    </Container>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.node.isRequired,
};

export default Card;
