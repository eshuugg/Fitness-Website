import React from "react";
import classes from "./Section1.module.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Couple from "../../../assets/sportsCouple.jpg";

const Section1 = () => {
  const data = [
    {
      title: "Welcome To FitURGE",
      desc1:
        "We are a bunch of fitness enthusiasts who are striving to create an aura of health and wellness. We love to exercise, and we encourage others to do the same. ",
      decs2:
        "Exercise is like a devotion for us, the more we do it, the more it rewards our body with health, wealth and longevity. ",
      desc3:
        "Fitness was never a destination, nor it can be. For us, Fitness is a continuous journey to fulfil your body’s vital needs, enhance the body functions, feel good from inside, look confident and maintain it for a long time without any risk of old age disease and ailments.",
      desc4:
        " We don’t make false promises, because we know, the body doesn’t lie to you. You live in your body; It is the result of your efforts and nutrition. Whatever you add to your body, It doubles it. You eat good food and exercise daily, and It will reward you with everlasting strength and beauty, You do the opposite, It will make you dial 112. ",
      image: Couple,
    },
  ];
  return (
    <Container>
      <Row>
        {data.map((item, index) => {
          return (
            <Col
              key={"card1" + index}
              xs={12}
              md={6}
              lg={6}
              className={" d-flex justify-content-center align-items-center"}
            >
              <Card className={classes.card}>
                <Card.Title className="text-warning">
                  <h2>{item.title}</h2>
                </Card.Title>
                <Card.Body>
                  <Card.Text>{item.desc1}</Card.Text>
                  <Card.Text>{item.desc2}</Card.Text>
                  <Card.Text>{item.desc3}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <Col
          xs={12}
          md={6}
          lg={6}
          className={
            classes.card + " d-flex justify-content-center align-items-center"
          }
        >
          <Card.Img
            src={Couple}
            className={classes.image}
            style={{ height: 400, width: 455 }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Section1;
