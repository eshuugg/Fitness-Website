import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./style.module.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = ({ data, text, height, speed, spaceBetween, spv }) => {
  return (
    <section className={styles.carousel}>
      <Container fluid>
        {data ? (
          <Row className={"d-flex align-items-center py-3"}>
            <Col xs={12} className={"d-flex justify-content-center pb-4 "}>
              <Swiper
                slidesPerView={spv || 1}
                centeredSlides={true}
                spaceBetween={spaceBetween || 30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                speed={speed || 5000}
                autoplay={{
                  delay: 100,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                style={{ transitionTimingFunction: "linear !important" }}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index} className="d-flex">
                    <img
                      src={item}
                      className="img-fluid"
                      alt={"img" + index}
                      style={{
                        height: height || 350,
                        objectFit: "cover",
                      }}
                    />
                    {text ? (
                      <div className="d-flex align-items-center justify-content center px-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatem velit nam.
                      </div>
                    ) : null}
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        ) : null}
      </Container>
    </section>
  );
};

export default Carousel;
