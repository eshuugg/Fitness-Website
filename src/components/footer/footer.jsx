import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./style.module.css";
import logo from "../../assets/FinalLogoFiturge3d.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Links from "./Links";
import {
  faAngleRight,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const useFullLinks = {
    title: "USeful Links",
    links: [
      {
        title: "Home",
        url: "/",
        icon: "",
      },
      {
        title: "About us",
        url: "/about",
        icon: "",
      },
      {
        title: "Our Services",
        url: "/",
        icon: "",
      },
      {
        title: "Contact us",
        url: "/",
        icon: "",
      },
    ],
  };
  const servicesLinks = {
    title: "Our Services",
    links: [
      {
        title: "Nutrition",
        url: "/",
        icon: "",
      },

      {
        title: "Conditioning",
        url: "/",
        icon: "",
      },
      {
        title: "Dance Fitness",
        url: "/",
        icon: "",
      },
      {
        title: "Yoga",
        url: "/",
        icon: "",
      },
      {
        title: "HHIT",
        url: "/",
        icon: "",
      },
      {
        title: "Boxing",
        url: "/",
        icon: "",
      },
    ],
  };
  const socialLinks = [
    {
      icon: <FontAwesomeIcon icon={faFacebook} />,
      url: "https://www.facebook.com/fitandfabworld",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      url: "https://www.linkedin.com/in/fit-and-fab-03a4b9207",
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} />,
      url: "https://www.instagram.com/fitandfabworld/?igshid=rd1h3b006c6i",
    },
  ];

  return (
    <section className={styles.footer}>
      <Container>
        <Row>
          <Col
            xs={12}
            className="d-md-flex  align-items-center text-white pt-5"
          >
            <span
              className="h3 font-weight-bold text-center"
              style={{ flex: 60 }}
            >
              Subscribe To Our Newsletter For Latest Updates
            </span>

            <div className={styles.inputWrap} style={{ flex: 40 }}>
              <input className={styles.input} placeholder="Email Address..." />
              <button className={styles.inpBtn}>
                <span className="pr-2">Suscribe</span>
                <span className={styles.inpIconWrap}>
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </span>
              </button>
            </div>
          </Col>
          <Col xs={12} className="pb-5">
            {" "}
            <hr style={{ color: "#fff", opacity: 1, height: 3 }} />
          </Col>
          <Col xs={12} md={3} className={"py-3 text-white text-md-left"}>
            <img
              src={logo}
              className="img-fluid"
              alt="fiturge"
              style={{ height: 100 }}
            />
            <div className="mt-2 text-center  text-md-left">
              <div className="d-flex justify-content-start align-items-center mb-2">
                <div className={styles.iconWrap}>
                  <FontAwesomeIcon size="2x" icon={faPhoneAlt} />{" "}
                </div>

                <div className="p-2">
                  <a
                    href="tel:+917506066363"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    +917506066363
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div className={styles.iconWrap}>
                  <FontAwesomeIcon size="2x" icon={faEnvelope} />{" "}
                </div>

                <div className="p-2">
                  <a
                    href="mailto:info@fitandfab.in"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    info@fitandfab.in
                  </a>
                </div>
              </div>
            </div>
            <p className="small mt-3">
              1902, A/20, Bella Vista CHS, Oswal Park, Pokharan Road No.2,
              Thane-400601
            </p>
          </Col>

          <Col xs={12} md={2} className={"py-3  text-white"}>
            <Links {...useFullLinks} />
          </Col>
          <Col xs={12} md={2} className={"py-3  text-white"}>
            <Links {...servicesLinks} />
          </Col>
          <Col xs={12} md={5} className={"py-3  text-white"}>
            <p className="small">
              Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet
              tortor. Duis et consequat enim. Curabitur pulvinar, dolor at
              pulvinar molestie, augue massa volutpat felis, at rhoncus tortor
              velit vel diam. Cras ac suscipit metus. Cras vitae quam eget risus
              efficitur malesuada. Praesent condimentum lacus nisi, eu venenatis
              purus eleifend sit amet. Vivamus ac enim vitae erat scelerisque
              ullamcorper. Ut id pretium sem. Proin ac consectetur orci.
            </p>
            <div className={"d-flex py-3"}>
              {socialLinks.map((item, index) => (
                <div className={styles.mediaLinks} key={index}>
                  <Link to={item.url}>{item.icon}</Link>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <div className={`${styles.subFooter} py-3 text-center text-white small`}>
        ©2021. Fiturge. All Rights Reserved.
      </div>
    </section>
  );
};

export default Footer;
