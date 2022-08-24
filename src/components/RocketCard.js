import { useDispatch } from 'react-redux';
import '../styles/rocketCard.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import PropTypes, { string, number, bool } from 'prop-types';
import { cancelReservation, reserveRocket } from '../redux/rockets';

const RocketCard = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    name, description, img, id, reserved,
  } = rocket;
  const makeReserve = () => {
    dispatch(reserveRocket(id));
  };
  const cancelReserv = () => {
    dispatch(cancelReservation);
  };
  return (
    <Container className="rocket-card">
      <Row>
        <Col sm={4} className="rocket-image">
          <Image fluid="true" src={img} alt={name} />
        </Col>
        {reserved ? (
          <Col sm={8} className="rocket-info">
            <h3 className="rocket-name">{name}</h3>
            <p className="rocket-desc">
              <Badge bg="primary">Reserved</Badge>
              {description}
            </p>
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={cancelReserv}
            >
              Cancel Reservation
            </Button>
          </Col>

        ) : (
          <Col sm={8} className="rocket-info">
            <h3 className="rocket-name">{name}</h3>
            <p className="rocket-desc">{description}</p>
            <Button
              size="sm"
              variant="primary"
              onClick={makeReserve}
            >
              Reserve Rocket
            </Button>
          </Col>
        )}

      </Row>
      <br />

    </Container>
  );
};

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    name: string, description: string, img: string, id: number, reserved: bool,
  }).isRequired,
};

export default RocketCard;
