import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TabContent from "./tabContent";

import yogaImg from "../../../assets/item3.jfif";
import danceImg from "../../../assets/item2.jfif";
import nutritionImg from "../../../assets/item6.jfif";
import boxingImg from "../../../assets/item5.jfif";

import styles from "./style.module.css";

const Section2 = () => {
  const tags = [
    {
      title: "Yoga",
      icon: yogaImg,
      img: "https://www.agenziasmartup.it/wp-content/uploads/2020/10/yoga-img-11-2.jpg",
      content: `Yoga is worldwide recognized for keeping the body fit and healing from
      injuries and diseases. These ancient body exercises are a gift to the
      world from India. Yoga is inclined to work on mind and body at the
      same time. It induces the body’s natural tendency to know about
      self-awareness and self-healing. The universal purpose of yoga is to
      develop strength, awareness, and focus in both body and mind. More
      than a hundred types of yoga exercises and many yogic schools teach
      people to live a balanced life.`,
    },
    {
      title: "Dance Fitness",
      icon: danceImg,
      img: "https://i.pinimg.com/originals/38/74/97/38749756157065bfd7a9a9f236e6d0fe.jpg",
      content: `Dance Fitness is an easy, fun yet super effective cardio workout which is worldwide one of the most popular workout formats . It includes music and dance styles from all across the world, making it different from other dance-based workouts. There is no age or gender bar – Dance Fitness is suitable for everyone of all age groups and all genders. And guess what! You can be a complete non-dancer and still love and rock Dance Fitness!! One session can burn upto 500-600 calories and caters to people from all fitness levels – Beginners to Advanced. Dance & Music being commonly loved by all, makes you forget the workout, allows you to enjoy the hour and induces high energy and positive vibes, which makes Dance Fitness a format loved by all !`,
    },
    {
      title: "Nutrition",
      icon: nutritionImg,
      img: "https://image.shutterstock.com/image-photo/smiling-nutritionist-her-office-she-260nw-381051757.jpg",
      content: `Nutrition means to nourish our body with all the nutrients, vitamins, and minerals to perform its function at the best levels. Food is nothing but the meditation of the body. When it comes to body health, nutrition is your captain, leader, and a vital key player to achieve your goals. No matter if you do strength, MetCon, HIIT, Zumba, yoga, etc. If your nutrition plan and diet is not proper, you will find it difficult to see visible results. Nutrition is the healer of your body. It plays a 70% role in building your body. When you exercise and sweat out, your body removes all the toxic jargon present in it and creates space to accumulate more food for nourishment. 
      Our body has a system to heal its muscles with nutrition. Nutrition contains all the vital elements like proteins, vitamins, carbohydrates, calcium, and minerals that help fix the body’s needs. We also call them “macronutrients.”
      `,
    },
    {
      title: "Boxing",
      icon: boxingImg,
      img: "https://live.staticflickr.com/1772/43093418014_631caa160f.jpg",
      content: `Boxing is a brutal, basic sport — and it can also serve as a brutal, basic workout to help you knock out your fitness goals.
      Even when you don’t have gloves or an opponent, Boxing and its principles can still be applied to make you a tougher athlete. Bonus is if you’re frustrated and you want to unleash some aggression during your workout, there’s nothing better than grabbing some boxing gloves and letting it all out on a heavy bag. Beginners don’t have to worry as Boxing workout can be done at home using just your bodyweight. For online sessions, we offer two kinds of Fitness Boxing: one is without equipment, where the whole intense workout can be done just using our bodyweight; another option is with boxing equipments, where the client can have equipments like boxing gloves and punching bag at home and the workout will be designed using them.`,
    },
  ];

  const [tab, setTab] = useState(0);

  return (
    <section className={styles.section2}>
      <Container>
        <Row>
          <Col xs={12} className="text-center py-4">
            <h3
              style={{ fontWeight: 800, fontSize: " 2.5em", color: "#00aeed" }}
            >
              Our Services
            </h3>
          </Col>
          <Col xs={12} className={"d-flex justify-content-start flex-wrap"}>
            {tags.map((item, index) => {
              return (
                <div
                  key={item.title + index}
                  className={`${styles.tabButton} ${
                    tab === index ? styles.active : ""
                  }`}
                  onClick={() => setTab(index)}
                >
                  <img
                    src={item.icon}
                    style={{
                      width: 40,
                      height: 40,
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })}
          </Col>
          <Col xs={12} className={"d-flex justify-content-center p-2"}>
            <div className={styles.tabContent}>
              <TabContent {...tags[tab]} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section2;
