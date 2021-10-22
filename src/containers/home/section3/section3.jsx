import { styles } from "dom7";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";

const Section3 = () => {
  return (
    <section className={style.sec3}>
      <Container>
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center "
          >
            <h4 className={style.bold}>
              WE ARE ON A MISSION TO CREATE
              <br /> 10000+ FIT HUMANS
            </h4>
            <p className="mt-3 text-muted">
              We are very serious about upping the lifestyle of people. When you
              join us, you root a vision in yourself to stay fit and fabulous
              throughout your life. We are a goal-oriented fitness center, and
              there’s only one thing that drives us towards our Mission –
              <br />
              <br />
              Our devotion and commitment towards fitness.
              <br />
              <br />
              Be a part of our fitness community, and we assure you that the
              time you spend with us will be one of the most memorable ones. We
              can’t wait to make you feel vibrant and look attractive.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <img
              src="http://www.pngall.com/wp-content/uploads/2018/04/Fitness-Transparent.png"
              alt="img"
              className="img-fluid"
              style={{ width: "100%", height: 350, objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section3;
