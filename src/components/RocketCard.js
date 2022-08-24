import React from 'react';
import '../styles/rocketCard.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes, { string } from 'prop-types';

const RocketCard = (props) => {
  const { rocket } = props;
  const { name, description, img } = rocket;
  return (
    <Container className="rocket-card">
      <Row>
        <Col sm={4} className="rocket-image">
          <Image fluid="true" src={img} alt={name} />
        </Col>
        <Col sm={8} className="rocket-info">
          <h3 className="rocket-name">{name}</h3>
          <p className="rocket-desc">{description}</p>
          <Button variant="primary">Reserve Rocket</Button>
        </Col>
      </Row>
      <br />

    </Container>
  );
};

RocketCard.propTypes = {
  rocket: PropTypes.shape({ name: string, description: string, img: string }).isRequired,
};

export default RocketCard;
