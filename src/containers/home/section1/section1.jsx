import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactPlayer from "react-player";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

import video from "../../../assets/pilates.mp4";

import styles from "./style.module.css";

const Section1 = () => {
  return (
    <section className={styles.section1}>
      <Container>
        <Row style={{ minHeight: "100vh" }}>
          <Col
            xs={12}
            md={6}
            className={
              "d-flex justify-content-center align-items-center flex-column order-md-2"
            }
          >
            <div className={styles.media}>
              {/* <FontAwesomeIcon icon={faPlayCircle} size="3x" /> */}
              <ReactPlayer
                url={video}
                playing
                loop
                controls
                autoPlay
                muted
                height="auto"
                width="100%"
              />
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className={
              "d-flex justify-content-center align-items-center flex-column"
            }
          >
            <div className={"pt-4 pt-md-0"}>
              <h3
                style={{ fontWeight: 800, fontSize: "2.5em", color: "#00aeed" }}
              >
                BEST IN TOWN <br />
                FITNESS PROGRAM
              </h3>
              <p>
                We emerged in the fitness industry by simply introducing our
                ideal concept for attaining a lean and lovable body. We are not
                a regular gym or fitness center. We separate ourselves from the
                crowd by providing hard and honest results. We believe that our
                body speaks with us in signs and symbols. We help our clients
                fix the body issues by providing wholesome nutritional
                supplements and a workout roadmap.
              </p>
              <Link to="/">
                <Button className={`${styles.rounded} m-1`} variant="primary">
                  More info
                </Button>
                <Button className={`${styles.rounded} m-1`} variant="primary">
                  Get A free Demo
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
