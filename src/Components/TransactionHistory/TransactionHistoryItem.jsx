import React from "react";
import PropTypes from "prop-types";
// import styles from "./styles.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
};
export default TransactionHistoryItem;
