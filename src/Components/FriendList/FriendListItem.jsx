import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.is_Online : styles.is_Offline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <h3 className={styles.name}>{name}</h3>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
