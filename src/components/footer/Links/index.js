import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../style.module.css";

const Links = ({ title, links }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul className={styles.list + " small"}>
        {links.map((item, index) => (
          <li key={item.title + index + "link"}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Links.prototype = {
  title: PropTypes.string,
  links: PropTypes.array,
};

export default Links;
