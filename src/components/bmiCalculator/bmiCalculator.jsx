import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Gallery from "./gallery";

import styles from "./style.module.css";

const BmiCalculator = () => {
  const [field, setField] = useState(null);

  const [bmi, setBmi] = useState({ height: "", weight: "", score: "" });
  const handleClick = (val) => {
    setBmi((prevState) => {
      let newState = { ...prevState };
      newState[field] = newState[field].toString() + val.toString();
      return newState;
    });
  };
  const handleInput = (val, input) => {
    setBmi((prevState) => {
      return { ...prevState, [input]: val };
    });
  };

  const calculateBmi = (e) => {
    e.preventDefault();
    let hm = bmi.height / 100;
    setBmi((prevState) => {
      return { ...prevState, score: bmi.weight / hm ** 2 };
    });
  };
  const photos = [
    "https://s4.thcdn.com/widgets/125-us/54/480x480-sc-FutModelcommuinity-123154.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uiA4-WOudCJ4-WEUGt3_ugAAAA%26pid%3DApi&f=1https://s4.thcdn.com/widgets/125-us/54/480x480-sc-FutModelcommuinity-123154.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bLGgDUv6bkr6rC1L_UoLegAAAA%26pid%3DApi&f=1",
    "http://iluvesports.com/wp-content/uploads/2016/08/Scott-Baptie-2.jpg",
    "https://i.pinimg.com/236x/40/2d/f5/402df56b0f31eed5e3191639919d4717.jpg?b=t",
    "https://2.bp.blogspot.com/-KyPZ28XWt1g/VlCzXidHC8I/AAAAAAAAEwY/4xtJ-4FlMcI/s400/-R9EDuNofp.jpg",
    "https://3.bp.blogspot.com/-uclnKwlpsCg/VputG85XChI/AAAAAAAAJeE/ASiyRThq44g/s1600/9PM0njN7eh.jpg",
    "https://4.bp.blogspot.com/-5rlTulK8Gqk/UA8vmiK-Z5I/AAAAAAAAAO8/9v3RHyvUYsc/s1600/sexy+fitness+4.jpg",
    "https://s.hdnux.com/photos/37/55/26/8312238/12/1024x1024.jpg",
    "https://www.uaepersonaltrainers.com/wp-content/uploads/2020/12/Pilates-Prenatal-Personal-Trainer-in-Dubai-Lara-e1607952796638.jpeg",
    "https://celebmafia.com/wp-content/uploads/2014/11/chloe-madeley-personal-trainer-workout-in-a-north-london-park_7.jpg",
    "https://fitnesstrainer.imgix.net/uploads/instructor/picture5/7975/9E53D21D-9E9D-4B32-BA1D-E7F3F7493DD4.jpeg?auto=format%2Cenhance%2Credeye",
  ];

  return (
    <section className={styles.bmiCalculator}>
      <Container fluid>
        <Row style={{ minHeight: "90vh" }} className="my-4">
          <Col xs={12} className="text-center  mb-4">
            <h4 style={{ fontWeight: 800, fontSize: "2.5em", color: "#fff" }}>
              Our Team
            </h4>
          </Col>
          <Col
            xs={12}
            md={4}
            className={
              "d-flex justify-content-center flex-column align-items-center order-md-2"
            }
          >
            <h5 className="text-center text-white">Check you Bmi</h5>
            <div className={`${styles.calculator} shadow p-2 bg-white`}>
              {bmi.score ? (
                <div className="text-center py-3">
                  <h4>Your score is {Math.round(bmi.score)}</h4>
                  <p className="mt-3">
                    BMI Categories: Underweight = 18.5 <br />
                    Normal weight = 18.5–24.9
                    <br />
                    Overweight = 25–29.9
                    <br />
                    Obesity = BMI of 30 or greater
                    <br />
                  </p>
                  <ul>
                    <li> What Next? Take Action Towards Better Health:</li>
                  </ul>
                  <p>
                    <br />
                    Maintain a Healthy Weight
                    <br />
                    Maintaining a healthy weight is important for your heart
                    health.
                    <br />
                    Learn more about overweight and obesity
                    <br />
                    Increase Physical Activity
                    <br />
                    Moving more can lower your risk factors for heart disease.
                    <br />
                    Eat a Heart-Healthy Diet
                    <br />
                    Eating a healthy diet is the key to heart disease
                    prevention.
                    <br />
                    Know and Control Your Heart Health Numbers
                    <br />
                    Tracking your heart health stats can help you meet your
                    heart health goals.
                    <br />
                    Download the BMI calculator app today (available for
                    iPhoneexternal disclaimer and Androidexternal disclaimer).
                    <br />
                  </p>
                  <Button
                    variant="primary"
                    onClick={() =>
                      setBmi({ height: "", weight: "", score: "" })
                    }
                  >
                    Reset
                  </Button>
                </div>
              ) : (
                <Form onSubmit={calculateBmi}>
                  <Form.Group className="mb-2">
                    <Form.Control
                      value={bmi.height}
                      onChange={(e) => handleInput(e.target.value, "height")}
                      placeholder="Height in cm"
                      onClick={() => setField("height")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control
                      value={bmi.weight}
                      onChange={(e) => handleInput(e.target.value, "weight")}
                      placeholder="Weight in kg"
                      onClick={() => setField("weight")}
                    />
                  </Form.Group>
                  <div className="my-2 d-flex flex-wrap justify-content-center">
                    {new Array(10).fill("").map((item, index) => (
                      <div
                        key={"btn" + index}
                        className="p-1 text-center"
                        style={{ flex: "0 0 33.333333%" }}
                      >
                        <Button
                          type="button"
                          className={styles.calcBtn + " mb-2"}
                          onClick={() => handleClick(index)}
                        >
                          {index}
                        </Button>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="primary"
                    type="submit"
                    block
                    style={{ width: "100%" }}
                  >
                    Calculate Bmi
                  </Button>
                </Form>
              )}
            </div>
          </Col>
          <Col xs={12} md={8} className="my-3 my-md-0">
            <Gallery photos={photos} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BmiCalculator;
