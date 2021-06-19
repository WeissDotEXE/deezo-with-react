import { useState } from "react";
import styles from "./AddFriend.module.scss";

const AddFriend = (props) => {
  const [friendName, setFriendName] = useState("");

  const nameChangeHandler = (event) => {
    setFriendName(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(friendName);
    setFriendName("");
  };

  return (
    <div className={styles.addFriend}>
      <button id={styles.close_btn} onClick={props.closeHandler}>
        <i class="fas fa-times"></i>
      </button>

      <div className={styles.content}>
        <h1 id={styles.addMoney_txt}>Add Friend</h1>
        <form onSubmit={submitHandler}>
          <label>Friend's name</label>
          <input
            type="text"
            required
            placeholder="John"
            value={friendName}
            onChange={nameChangeHandler}
          ></input>
          <button type="submit">Add Friend</button>
        </form>
      </div>
    </div>
  );
};

export default AddFriend;
