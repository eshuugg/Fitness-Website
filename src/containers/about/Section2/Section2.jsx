import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Man from "../../../assets/StrongMan.png";
import classes from "./Section2.module.css";

const Section2 = () => {
  const wrapper = {
    color: "white",
    fontSize: "40px",
  };
  const cards = {
    backgroundColor: "#434f53",
  };
  return (
    <Container>
      <Card style={cards}>
        <Row>
          <Col xs={12} md={6} sm={6} lg={6}>
            <Card.Title style={wrapper}>
              <h3 style={wrapper}>About Us</h3>
            </Card.Title>
            <Card.Title className={classes.mytitle}>
              Your Personal Gym Coach
            </Card.Title>
            <p className={classes.para}>
              Your personal trainer will wake up the monster inside you and turn
              you into the muscles machine. The program includes also mental
              practices aimed at improving your health dramatically. Aside from
              the gym, you can take advantage of pool, spa, sauna and other
              services in our center. We tend to provide the best services on
              the market to guarantee 100% positive effect for our customers.
            </p>
            <ul type="square">
              <li>Weight Loss</li>
              <li>Nutrition Education</li>
              <li>Exercise programing</li>
              <li>Personal training</li>
              <li>Lifestyle modification</li>
            </ul>
          </Col>
          <Col xs={12} md={6} sm={6} lg={6}>
            <img className={classes.image} src={Man} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Section2;
