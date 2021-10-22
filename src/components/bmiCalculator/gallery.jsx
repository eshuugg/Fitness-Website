import { useEffect, useState } from "react";
import styles from "./style.module.css";

const Gallery = ({ photos }) => {
  const [ph, setPh] = useState(photos.length ? photos : []);

  useEffect(() => {
    let interval = setInterval(() => {
      if (ph.length > 0) {
        // setPh((prevState) => {
        //   let phCopy = [...prevState];
        //   let rand1 = Math.floor(Math.random() * phCopy.length);
        //   let rand2 = Math.floor(Math.random() * phCopy.length);
        //   let temp = phCopy[rand1];
        //   phCopy[rand1] = phCopy[rand2];
        //   phCopy[rand2] = temp;
        //   return phCopy;
        // });
      }

      // let images = document.querySelectorAll("." + styles.img);
      // let grid = document.querySelector("." + styles.grid);

      // if (images.length > 2) {
      //   let rand1 = Math.floor(Math.random() * images.length);
      //   let rand2 = Math.floor(Math.random() * images.length);
      //   // let rand1 = 1;
      //   // let rand2 = 2;

      //   // let elem1 = images[rand1].getBoundingClientRect();
      //   // let elem2 = images[rand2].getBoundingClientRect();

      //   let elem1 = {
      //     top: images[rand1].offsetTop,
      //     left: images[rand1].offsetLeft,
      //   };
      //   let elem2 = {
      //     top: images[rand2].offsetTop,
      //     left: images[rand2].offsetLeft,
      //   };

      //   images[rand1].style.setProperty(
      //     "transform",
      //     `translate(${elem2.left - elem1.left}px, ${elem2.top - elem1.top}px)`
      //   );
      //   images[rand2].style.setProperty(
      //     "transform",
      //     `translate(${elem1.left - elem2.left}px, ${elem1.top - elem2.top}px)`
      //   );

      //   // let temp = images[rand1];
      //   // images[rand1].parentNode.replaceChild(images[rand2], images[rand1]);
      //   // images[rand2].parentNode.replaceChild(temp, images[rand2]);
      // }
    }, 5000);

    return () => clearInterval(interval);
  }, [ph.length]);

  return (
    <div className={styles.grid}>
      {ph.map((item, index) => (
        <div key={"img" + index}>
          <img alt={"img" + index} src={item} className={styles.img} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
