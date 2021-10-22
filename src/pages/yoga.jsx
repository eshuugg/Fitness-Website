import { Container, Row, Col } from "react-bootstrap";

import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";

const Yoga = () => {
  return (
    <>
      <Banner
        wrap={true}
        bg="url(https://kripalu.org/sites/default/files/1920x846_IMG_0579_yogasummer_0.jpg)"
      />
      <Container>
        <Row>
          <Col xs={12}></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Yoga;
