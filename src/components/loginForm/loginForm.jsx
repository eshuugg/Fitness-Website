import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Form className="row g-3">
            <Form.Group className="col-12 text-center">
              <FontAwesomeIcon icon={faUserCircle} size="3x" />
            </Form.Group>
            <Form.Group className="col-12">
              <Form.Control placeholder="User Id" type="email" />
            </Form.Group>
            <Form.Group className="col-12">
              <Form.Control placeholder="password" type="password" />
            </Form.Group>
            <Form.Group className="col-12">
              <Button block>Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
