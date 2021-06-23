import { useState } from "react";
import styles from "./Friends.module.scss";
const Friends = (props) => {
  const [friendsList, setFriendsList] = useState([]);
  const friend_avatar = props.friend.map((friend) => {
    return (
      <div className={styles.friends_list}>
        <div className={styles.avatar}>
            <i class="fas fa-user-circle"></i>
            <p>{friend.name}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.friends}>
      <h1>Friends list</h1>
      <div className={styles.friends_list}>{friend_avatar}</div>
    </div>
  );
};

export default Friends;
