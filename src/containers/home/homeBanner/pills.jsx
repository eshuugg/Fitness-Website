import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Pills = ({ data }) =>
  data.map((item, index) => (
    <Link key={"pill" + index} to={item.url} className={styles.pill}>
      {item.title}
    </Link>
  ));

export default Pills;
