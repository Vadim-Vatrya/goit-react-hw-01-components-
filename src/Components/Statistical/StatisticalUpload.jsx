import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

function getColor() {
  let color = "";
  for (let i = 0; i < 3; i += 1) {
    let sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? "0" + sub : sub;
  }
  return `#${color}`;
}

const StatisticalUpoad = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: getColor() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatisticalUpoad.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticalUpoad;
