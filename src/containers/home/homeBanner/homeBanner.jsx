import React from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import ReactPlayer from "react-player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Pills from "./pills";
import Banner from "../../../components/banner/banner";

import styles from "./style.module.css";
// import logo from "../../../assets/FinalLogoFiturge3d.png";

import runImg from "../../../assets/running.png";
import video from "../../../assets/logoVid.mp4";
import {
  faEnvelope,
  faMapMarked,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const HomeBanner = () => {
  const pillList = [
    { url: "/", title: "Yoga Sessions" },
    { url: "/", title: "Dancing Sessions" },
    { url: "/", title: "Boxing Fitness" },
    { url: "/", title: "KIDS Section" },
    { url: "/", title: "Nutrition consultant" },
    { url: "/", title: "Metabolic Conditining" },
    { url: "/", title: "HIIT" },
    { url: "/", title: "Home" },
    { url: "/", title: "About" },
    { url: "/", title: "Contact" },
  ];
  return (
    <Banner>
      <div className={styles.bannerCircle1}></div>
      <div className={styles.bannerCircle2}></div>
      <div className={styles.bannerCircle3}></div>
      <Container>
        <Row className={styles.content}>
          <Col
            xs={12}
            md={7}
            className={
              "d-flex align-items-center justify-content-center flex-column pt-5 pt-md-0 mt-5 mt-md-0  order-md-2"
            }
            style={{ zIndex: 10 }}
          >
            <div>
              {/* <img
                src={logo}
                className="img-fluid"
                alt="fiturge"
                style={{ height: 150 }}
              /> */}
              <ReactPlayer
                url={video}
                playing
                loop
                autoPlay
                muted
                height="auto"
                width={250}
                style={{
                  borderTopLeftRadius: 90,
                  borderBottomRightRadius: 90,
                  overflow: "hidden",
                }}
              />
            </div>
            <div
              className={
                "d-flex flex-wrap text-white w-75 justify-content-center"
              }
            >
              <Pills data={pillList} />
            </div>
          </Col>
          <Col
            xs={12}
            md={5}
            className={
              styles.brandWrap +
              " d-flex justify-content-center align-items-center"
            }
          >
            <img
              src={runImg}
              alt="running"
              className={`img-fluid`}
              style={{
                height: 450,
                zIndex: 20,
                objectFit: "contain",
              }}
            />

            <div className={styles.lineBox}>
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
              <div className={styles.line3}></div>
            </div>
          </Col>
          <Col xs={12} className="order-3 d-flex justify-content-center">
            <div className={styles.inputBox}>
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <FontAwesomeIcon color={"#0092cb"} icon={faEnvelope} />
                </InputGroup.Text>
                <FormControl placeholder="Email" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <FontAwesomeIcon color={"#0092cb"} icon={faUser} />
                </InputGroup.Text>
                <FormControl placeholder="Name" />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <FontAwesomeIcon color={"#0092cb"} icon={faMapMarked} />
                </InputGroup.Text>
                <FormControl placeholder="Location" />
              </InputGroup>
              <Button className={styles.submit} block>
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Banner>
  );
};

export default HomeBanner;
