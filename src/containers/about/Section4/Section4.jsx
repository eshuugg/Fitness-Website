import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import skipping from "../../../assets/skipping.jpg";
import dumble from "../../../assets/dumbling.jpg";
import yoga from "../../../assets/yoga.jpg";
import trainer from "../../../assets/trainer.jpg";
import strongman from "../../../assets/StrongMan1.jpg";
import MuscleMan from "../../../assets/MuscleMan.jpg";

const Section4 = () => {
  const data = [
    {
      img: skipping,
      title: "Basic Crossfit",
      description:
        "Our staff includes amazing professionals that have an eye for crossfit.",
    },
    {
      img: dumble,
      title: "Fitness Studio",
      description:
        "Work out in fitness groups or with a personal certified trainer in our gym center.",
    },
    {
      img: yoga,
      title: "Yoga Classes",
      description:
        "What do you think about yoga? If you have a passion for this activity, we’ve got a special program.",
    },
    {
      img: trainer,
      title: "Personal Training",
      description:
        "If you don’t like to work out with other clients of our center, you are welcome to hire a personal coach.",
    },
    {
      img: strongman,
      title: "Olympic Powerlifting",
      description:
        "Do you want to become a professional powerlifter? Go ahead and try yourslelf just right now.",
    },
    {
      img: MuscleMan,
      title: "Workout of the day",
      description:
        "Daily trainings is the best choice for beginners who make first steps in working out.",
    },
  ];
  const styling = {
    borderRadius: 0,
    backgroundColor: "#28a7e9",
  };
  const wrapper = {
    color: "white",
    fontSize: "40px",
  };
  const mytitle = {
    color: "rgb(40, 167, 233)",
    fontSize: "43px",
    fontWeight: "bold",
  };
  return (
    <Container>
      <Row>
        <Card style={{ backgroundColor: "#434f53" }}>
          <Card.Title>
            <h3 style={wrapper}>Our programs</h3>
          </Card.Title>
          <Card.Title style={mytitle}>Workout we provide</Card.Title>
          <Row>
            {data.map((info, index) => {
              return (
                <Col xs={12} md={6} lg={4}>
                  <Card style={{ padding: 0, borderRadius: 0 }}>
                    <Card.Img
                      src={info.img}
                      style={{ padding: 0, borderRadius: 0 }}
                    />
                    <Card.Footer style={styling} variant="primary">
                      <Card.Title
                        style={{ padding: 5, marginLeft: 10, color: "#f1f1f1" }}
                      >
                        <h2>{info.title}</h2>
                      </Card.Title>
                      <Card.Text
                        style={{
                          padding: 5,
                          marginLeft: 10,
                          color: "#f1f1f1",
                          fontSize: 16,
                        }}
                      >
                        {info.description}
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        type="button"
                        style={{
                          borderRadius: 0,
                          padding: 10,
                          marginLeft: 15,
                          fontWeight: 700,
                          color: "#f1f1f1",
                        }}
                      >
                        PROGRAM DETAILS
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Card>
      </Row>
    </Container>
  );
};
export default Section4;
