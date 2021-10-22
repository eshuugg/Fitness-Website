import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import Loginform from "../loginForm/loginForm";

import styles from "./style.module.css";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  // login  modal state
  const [show, setShow] = useState(false);

  const handleLoginModal = () => {
    setShow(!show);
  };

  const handleShadow = () => {
    setShow(false);
  };

  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "/",
    },
    {
      title: "Contact",
      url: "/",
    },
    {
      title: "About",
      url: "/",
    },
    {
      title: "Blog",
      url: "/",
    },
  ];

  useEffect(() => {
    window.onscroll = function () {
      let header = document.getElementById("header");
      let icon = document.querySelector("." + styles.icon);
      let pillLink = document.querySelectorAll("." + styles.pillLink);
      if (window.pageYOffset > 100) {
        header && (header.style.background = "#fff");

        icon && (icon.style.background = "#00aeed");
        icon && (icon.style.color = "#fff");
        pillLink.length &&
          pillLink.forEach((item) => (item.style.color = "#00aeed"));
      } else {
        header && (header.style.background = "none");
        icon && (icon.style.color = "#0085b8");
        icon && (icon.style.background = "#fff");
        pillLink.length &&
          pillLink.forEach((item) => (item.style.color = "#fff"));
      }
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.shadow} ${show ? styles.show : styles.hide}`}
        onClick={handleShadow}
      ></div>
      <div
        className={`${styles.loginModal} ${show ? styles.show : styles.hide}`}
      >
        <Loginform />
      </div>
      <section className={styles.header} id="header">
        <Container>
          <Row>
            <Col xs={3}>
              <div className={styles.icon} onClick={handleLoginModal}>
                <FontAwesomeIcon icon={faUserAlt} />
              </div>
            </Col>
            <Col
              xs={7}
              className={`d-flex justify-content-center align-items-center`}
            >
              <ul className={styles.link}>
                {links.map((item, index) => (
                  <li className={styles.pill}>
                    <Link
                      key={"link" + index}
                      className={styles.pillLink}
                      to={item.url}
                    >
                      {item.title}
                    </Link>
                    <ul className={styles.pillContent}>
                      <span className={styles.arrow}></span>
                      <li className={styles.pillContentLink}>test</li>
                      <li className={styles.pillContentLink}>test</li>
                      <li className={styles.pillContentLink}>test</li>
                      <li className={styles.pillContentLink}>test</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Header;
