import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Media } from "reactstrap";
import classes from "./Section3.module.css";
import client1 from "../../../assets/client1.jpg";
import client2 from "../../../assets/client2.jpg";
const Section3 = () => {
  const wrapper = {
    color: "white",
    fontSize: "40px",
  };
  const cards = {
    backgroundColor: "#434f53",
  };
  const data = [
    {
      description:
        "Gympower CrossFit Studio had me at a first fitness workout. It’s a truly inspiring team of fitness professionals. They are able to spread the love for what they teach to everyone. Their abilities & enthusiasm are just overwhelming!",
      image: client1,
      heading: "Chris Doe",
      title: "Client",
    },
    {
      description:
        "When you come into GymPower, everything changes. The best place to get your body fixed. The center is equipped with everything you need to become healthier and simply relax and enjoy the atmosphere of freedom.",
      image: client2,
      heading: "Chad Bold",
      title: "Client",
    },
  ];
  return (
    <div>
      <Container>
        <Card style={cards}>
          <Card.Title style={wrapper}>
            <h3 style={wrapper}>Personal Opinion</h3>
          </Card.Title>
          <Card.Title className={classes.mytitle}>
            Read what our clients say{" "}
          </Card.Title>
          <p className={classes.para}>
            Check out the reviews from our customers to ensure that we are the
            best in our business.
          </p>
          <Row>
            {data.map((info, index) => {
              return (
                <Col xs={12} md={6} sm={6}>
                  <Card.Text className={classes.text}>
                    {info.description}
                  </Card.Text>
                  <Row>
                    <Col xs={4} md={4}>
                      <Media
                        object
                        src={info.image}
                        style={{ borderRadius: 50 }}
                      />
                    </Col>
                    <Col xs={8} md={8}>
                      <Media
                        heading
                        className={classes.mytitle}
                        style={{ fontSize: 30 }}
                      >
                        {info.heading}
                      </Media>
                      <Card.Title style={{ fontSize: 20, color: "#f1f1f1" }}>
                        {info.title}
                      </Card.Title>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
        </Card>
      </Container>
    </div>
  );
};
export default Section3;
