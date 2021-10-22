import React from "react";
import classes from "./Section1.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header1";
const Section1 = () => {
  const headerList = [
    {
      title: "header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 max-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>Welcome to About</h1>
                  <strong className="brand-name">Fiturge</strong>
                  <Header header={headerList} imag={headerList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
