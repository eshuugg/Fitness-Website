import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../../../index.css";

import styles from "./style.module.css";
import { faAngleRight, faHeadset } from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Subfooter = () => {
  const img = [
    "https://s.hdnux.com/photos/50/54/15/10666858/3/rawImage.jpg",
    "https://fitnesstrainer.imgix.net/uploads/instructor/picture/16929/DSC01559.jpg?auto=format%2Cenhance%2Credeye&h=230&w=230&fit=facearea&facepad=4",
    "http://www.personaltrainer.com/images/trainers/fitness-trainer-801.jpg",
  ];

  const data = [
    { id: "1", title: "Yoga Sessions" },
    { id: "2", title: "Dancing Sessions" },
    { id: "3", title: "Boxing Fitness" },
    { id: "4", title: "KIDS Section" },
    { id: "5", title: "Nutrition consultant" },
    { id: "6", title: "Metabolic Conditining" },
  ];
  return (
    <Container>
      <Row style={{ minHeight: "50vh" }}>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {img.map((item, index) => (
              <SwiperSlide
                key={index}
                className="d-flex justify-content-center"
              >
                <img
                  src={item}
                  className="img-fluid"
                  alt={"img" + index}
                  style={{
                    height: 250,
                    objectFit: "contain",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col
          xs={12}
          md={8}
          className="py-4 d-flex justify-content-center align-items-center flex-column"
        >
          <div className="text-center mb-3">
            {data.map((item, index) => {
              return (
                <React.Fragment key={"pill" + item.id}>
                  {index % 4 === 0 ? <br /> : null}
                  <Button className={styles.pill}>{item.title}</Button>
                </React.Fragment>
              );
            })}
          </div>

          <div className={`${styles.inputWrap} shadow mb-3`}>
            <input className={styles.input} placeholder="Email Address..." />
            <button className={styles.inpBtn}>
              <span className="pr-2">Get a Free Quote</span>
              <span className={styles.inpIconWrap}>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </span>
            </button>
          </div>

          <Button
            variant="outline-primary"
            className={`${styles.roundedBtn} shadow mt-3 mt-md-0`}
            size="lg"
          >
            <FontAwesomeIcon icon={faHeadset} /> Contact Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Subfooter;
