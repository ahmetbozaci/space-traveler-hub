/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Row, Col, Image, Button, Badge,
} from 'react-bootstrap';
import { addToReserve } from '../../redux/rocketReducer/RocketAction';

const Rocket = () => {
  const rocket = useSelector((state) => state.ReducerRocket);
  const { rockets } = rocket;
  const dispatch = useDispatch();
  return (
    <Container className="my-5 mx-5">

      {
          rockets.map((item) => {
            const {
              id, rocket_name, description, flickr_images,
            } = item;
            const variants = item.reserved ? 'outline-secondary' : 'primary';
            return (
              <Row key={id} className="my-3">
                <Col xs={12} md={5}>
                  <Image
                    src={flickr_images}
                    alt="flick"
                    width="380"
                    height="250"
                    fluid
                    rounded
                  />
                </Col>
                <Col xs={12} md={7}>
                  <h5>{rocket_name}</h5>
                  <p>
                    {item.reserved && (
                      <Badge bg="info">Reserved</Badge>
                    )}
                    {description}
                  </p>
                  <Button variant={variants} onClick={() => dispatch(addToReserve(id))}>
                    {item.reserved ? 'Cancell Reservation' : ' Reserve Rocket'}
                  </Button>
                </Col>
              </Row>
            );
          })
        }

    </Container>
  );
};

export default Rocket;
