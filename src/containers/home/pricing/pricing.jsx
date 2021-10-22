import {
  faCertificate,
  faInfinity,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./style.module.css";

const Section4 = () => {
  return (
    <Container fluid>
      <Row className="my-4" style={{ minHeight: "80vh" }}>
        <Col xs={12} className={styles.pass1}>
          <p className="small text-center py-3">FitPass Black</p>
          <div className="d-flex justify-content-center align-items-center text-uppercase">
            <div className={styles.lines}></div>
            <div className="h6 px-4">Enjoy the benifits of</div>
            <div className={styles.lines}></div>
          </div>
          <div className="d-md-flex justify-content-evenly text-center text-md-left">
            <div className={styles.list}>
              <ul>
                <li>
                  <strong>But now</strong> start anytime
                </li>
                <li>
                  <strong>Pause</strong> pack anytime
                </li>
                <li>
                  <strong>Safest</strong> gyms in Town
                </li>
                <li>
                  <strong>No-Cost</strong> Emi availble
                </li>
              </ul>
            </div>
            <div className={styles.pricing}>
              <div className={styles.pricingCard}>
                <div className={styles.flex1}>
                  <p className="font-weight-bold mb-1">6 Month</p>
                  <p className="small ">
                    <span className="text-decoration-line-through text-muted">
                      <FontAwesomeIcon icon={faRupeeSign} /> 28990
                    </span>

                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faRupeeSign} /> 28990
                    </span>
                  </p>
                </div>
                <div className={styles.flex2}>
                  <Button variant="primary" size="sm">
                    Buy now
                  </Button>
                </div>
              </div>
              <div className={styles.pricingCard}>
                <div className={styles.flex1}>
                  <p className="font-weight-bold mb-1">3 Month</p>
                  <p className="small ">
                    <span className="text-decoration-line-through text-muted">
                      <FontAwesomeIcon icon={faRupeeSign} /> 14970
                    </span>

                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faRupeeSign} /> 12490
                    </span>
                  </p>
                </div>
                <div className={styles.flex2}>
                  <Button variant="primary" size="sm">
                    Buy now
                  </Button>
                </div>
              </div>
              <div className={styles.pricingCard}>
                <div className={styles.flex1}>
                  <p className="font-weight-bold mb-1">12 Month</p>
                  <p className="small ">
                    <span className="text-decoration-line-through text-muted">
                      <FontAwesomeIcon icon={faRupeeSign} /> 55380
                    </span>

                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faRupeeSign} /> 23990
                    </span>
                  </p>
                </div>
                <div className={styles.flex2}>
                  <Button variant="primary" size="sm">
                    Buy now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} className={styles.pass1}>
          <p className="text-center py-3 h5">FitPass select</p>
          <div className="d-flex justify-content-center align-items-center text-uppercase">
            <div className={styles.lines}></div>
            <div className="h6 px-4">Enjoy the benifits of</div>
            <div className={styles.lines}></div>
          </div>
          <div className="d-md-flex justify-content-evenly text-center text-md-left">
            <div className={styles.list}>
              <ul>
                <li>
                  <strong>01</strong> center access
                </li>
                <li>
                  <strong>
                    <FontAwesomeIcon icon={faInfinity} />
                  </strong>{" "}
                  unlimited classes
                </li>
                <li>
                  <strong>Availablity</strong> only at few centers
                </li>
              </ul>
            </div>
            <div className={styles.pricing}>
              <div className={styles.pricingCard}>
                <div className={styles.flex1}>
                  <p className="font-weight-bold mb-1">3 Month</p>
                  <p className="small ">
                    <span className="text-decoration-line-through text-muted">
                      <FontAwesomeIcon icon={faRupeeSign} /> 11990
                    </span>

                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faRupeeSign} /> 6490
                    </span>
                  </p>
                </div>
                <div className={styles.flex2}>
                  <Button variant="primary" size="sm">
                    Buy now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
