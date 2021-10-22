import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const TabContent = ({ title, content, img }) => {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center align-items-center p-2"
        >
          <img
            src={img}
            className={"img-fluid"}
            alt={title}
            style={{ height: 380, objectFit: "contain" }}
          />
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column justify-content-center text-muted  p-2"
        >
          <h4>{title}</h4>
          <hr />
          <p className="text-right small">{content}</p>
          <Button variant={"outline-primary"}>Explore more</Button>
        </Col>
        <Col xs={12} md={4} className="py-3 text-muted p-2">
          <h4>Event Schedule</h4>
        </Col>
      </Row>
    </Container>
  );
};
export default TabContent;
