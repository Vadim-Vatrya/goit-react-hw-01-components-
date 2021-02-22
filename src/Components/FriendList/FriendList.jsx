import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default FriendList;
